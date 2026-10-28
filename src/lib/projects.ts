import "server-only";

import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { z } from "zod";
import type { Project } from "@/types/project";

const projectFrontmatterSchema = z.object({
  title: z.string({ message: "Field 'title' is required and must be a string" }),
  year: z.number({ message: "Field 'year' is required and must be a number" }),
  order: z.number({ message: "Field 'order' is required and must be a number" }),
  summary: z.string({ message: "Field 'summary' is required and must be a string" }),
  role: z.string().optional(),
  tech: z.array(z.string()).optional(),
  links: z
    .array(
      z.object({
        label: z.string({ message: "Link label must be a string" }),
        href: z.string({ message: "Link href must be a string" }),
      })
    )
    .optional(),
  draft: z.boolean().optional().default(false),
});

const projectsDirectory = path.join(process.cwd(), "content", "projects");

async function parseProjectFile(fileName: string): Promise<Project> {
  const filePath = path.join(projectsDirectory, fileName);
  const fileContents = await fs.readFile(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  const parsed = projectFrontmatterSchema.safeParse(data);
  if (!parsed.success) {
    const formattedErrors = parsed.error.issues
      .map((issue) => `[${issue.path.join(".") || "root"}]: ${issue.message}`)
      .join("; ");
    throw new Error(
      `Invalid frontmatter in "${fileName}": ${formattedErrors}`
    );
  }

  const slug = fileName.replace(/\.md$/, "");
  const processedContent = await remark().use(html).process(content);
  const contentHtml = String(processedContent);

  return {
    slug,
    title: parsed.data.title,
    year: parsed.data.year,
    order: parsed.data.order,
    summary: parsed.data.summary,
    role: parsed.data.role,
    tech: parsed.data.tech,
    links: parsed.data.links,
    draft: parsed.data.draft,
    contentHtml,
  };
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const fileNames = await fs.readdir(projectsDirectory);
    const mdFiles = fileNames.filter((name) => name.endsWith(".md"));

    const projects = await Promise.all(
      mdFiles.map((fileName) => parseProjectFile(fileName))
    );

    return projects
      .filter((project) => !project.draft)
      .sort((a, b) => {
        if (a.order !== b.order) {
          return a.order - b.order;
        }
        return b.year - a.year;
      });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const fileName = `${slug}.md`;
  const filePath = path.join(projectsDirectory, fileName);
  try {
    await fs.access(filePath);
  } catch {
    return null;
  }

  const project = await parseProjectFile(fileName);
  if (project.draft) {
    return null;
  }
  return project;
}
