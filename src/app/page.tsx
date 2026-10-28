"use cache";

import { getAllProjects } from "@/lib/projects";
import { Container } from "@/components/layout/container";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { WorkSection } from "@/components/sections/work-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";

export default async function HomePage() {
  const projects = await getAllProjects();

  return (
    <>
      <Container>
        <SiteHeader />
        <main id="top">
          <HeroSection />
          <WorkSection projects={projects} />
          <AboutSection />
          <ContactSection />
        </main>
      </Container>
      <SiteFooter />
    </>
  );
}
