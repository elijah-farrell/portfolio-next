import { Metadata } from "next";
import { ProjectsClient } from "@/components/pages/projects-client";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of recent projects and technologies.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
