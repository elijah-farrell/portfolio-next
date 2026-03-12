import { Metadata } from "next";
import { SkillsClient } from "@/components/pages/skills-client";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills built through coursework and projects.",
};

export default function SkillsPage() {
  return <SkillsClient />;
}
