import type { FooterData } from "@/types/footer";
import { footerData as defaultFooterData } from "@/data/footer";
import { Container } from "@/components/layout/container";

interface SiteFooterProps {
  data?: FooterData;
}

export function SiteFooter({ data = defaultFooterData }: SiteFooterProps) {
  return (
    <footer className="border-t border-border py-[28px] text-[16px] text-muted">
      <Container>{data.copyright}</Container>
    </footer>
  );
}
