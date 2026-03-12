import { HomeClient } from "@/components/pages/home-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Elijah Farrell's portfolio.",
};

export default function HomePage() {
  return <HomeClient />;
}
