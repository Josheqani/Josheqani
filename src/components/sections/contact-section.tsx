import type { ContactData } from "@/types/contact";
import { contactData as defaultContactData } from "@/data/contact";
import { Section } from "@/components/layout/section";
import { TextLink } from "@/components/ui/text-link";

interface ContactSectionProps {
  data?: ContactData;
}

export function ContactSection({
  data = defaultContactData,
}: ContactSectionProps) {
  return (
    <Section id="contact">
      <h2 className="mb-[36px] max-w-[12ch] font-display text-[clamp(38px,8.4vw,108px)] font-extrabold leading-[0.94] tracking-[-0.04em]">
        {data.title}
      </h2>
      <TextLink href={`mailto:${data.email}`} variant="email">
        {data.email}
      </TextLink>
      <ul className="m-0 mt-[36px] flex list-none flex-wrap gap-[28px] p-0">
        {data.socialLinks.map((link) => (
          <li key={link.label}>
            <TextLink href={link.href} variant="bordered">
              {link.label}
            </TextLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
