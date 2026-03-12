import { Metadata } from "next";
import { ContactClient } from "@/components/pages/contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Elijah Farrell for opportunities and collaboration.",
};

export default function ContactPage() {
  return <ContactClient />;
}
