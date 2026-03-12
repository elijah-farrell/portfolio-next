import { Metadata } from "next";
import { AboutClient } from "@/components/pages/about-client";

export const metadata: Metadata = {
  title: "About",
  description: "Get to know Elijah Farrell's journey and background.",
};

export default function AboutPage() {
  return <AboutClient />;
}
