import "server-only";

import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { z } from "zod";
import type { Experience } from "@/types/experience";

const experienceFrontmatterSchema = z.object({
  company: z.string({ message: "Field 'company' is required and must be a string" }),
  role: z.string({ message: "Field 'role' is required and must be a string" }),
  period: z.string({ message: "Field 'period' is required and must be a string" }),
  order: z.number({ message: "Field 'order' is required and must be a number" }),
  active: z.boolean().optional().default(false),
  activeLabel: z.string().optional(),
  description: z.string().optional(),
  highlights: z.array(z.string()).optional(),
  draft: z.boolean().optional().default(false),
});

const experiencesDirectory = path.join(process.cwd(), "content", "experiences");

async function parseExperienceFile(fileName: string): Promise<Experience> {
  const filePath = path.join(experiencesDirectory, fileName);
  const fileContents = await fs.readFile(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  const parsed = experienceFrontmatterSchema.safeParse(data);
  if (!parsed.success) {
    const formattedErrors = parsed.error.issues
      .map((issue) => `[${issue.path.join(".") || "root"}]: ${issue.message}`)
      .join("; ");
    throw new Error(
      `Invalid frontmatter in "${fileName}": ${formattedErrors}`
    );
  }

  const slug = fileName.replace(/\.md$/, "");
  const trimmedContent = content.trim();
  let contentHtml: string | undefined;

  if (trimmedContent) {
    const processedContent = await remark().use(html).process(trimmedContent);
    contentHtml = String(processedContent);
  }

  return {
    slug,
    company: parsed.data.company,
    role: parsed.data.role,
    period: parsed.data.period,
    order: parsed.data.order,
    active: parsed.data.active,
    activeLabel: parsed.data.activeLabel,
    description: parsed.data.description,
    highlights: parsed.data.highlights,
    draft: parsed.data.draft,
    contentHtml,
  };
}

export async function getAllExperiences(): Promise<Experience[]> {
  try {
    const fileNames = await fs.readdir(experiencesDirectory);
    const mdFiles = fileNames.filter((name) => name.endsWith(".md"));

    const experiences = await Promise.all(
      mdFiles.map((fileName) => parseExperienceFile(fileName))
    );

    return experiences
      .filter((experience) => !experience.draft)
      .sort((a, b) => a.order - b.order);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}
