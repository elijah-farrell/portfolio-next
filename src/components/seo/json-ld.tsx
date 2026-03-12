import React from "react";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Elijah Farrell",
    jobTitle: "Software Developer",
    image: "/Avatar.png",
    sameAs: ["https://github.com", "https://linkedin.com"],
    description:
      "Computer Science graduate focused on software development, data analysis, and IT.",
    knowsAbout: ["Python", "Java", "C++", "React", "TypeScript", "IT Support"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
