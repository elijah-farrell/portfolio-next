import { Metadata } from "next";
import { ExperienceClient } from "@/components/pages/experience-client";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional and academic experience.",
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
