import { siteConfig } from "@/data/site-config";
import { contactData } from "@/data/contact";

export function PersonJsonLd() {
  const sameAsLinks = contactData.socialLinks.map((link) => link.href);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        alternateName: ["علی جوشقانی", "Ali Josheghani"],
        url: siteConfig.url,
        image: `https://github.com/${siteConfig.githubUsername}.png`,
        jobTitle: "Front-end Developer",
        worksFor: {
          "@type": "Organization",
          name: "ShaliSystem",
        },
        sameAs: sameAsLinks,
        description: siteConfig.description,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#person`,
        },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
