"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { HudHeader } from "@/components/ui/hud-header";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/socials";

export function ContactClient() {
  return (
    <main className="relative flex min-h-dvh w-full flex-col items-center justify-start overflow-x-hidden text-foreground">
      <HudHeader
        title="CONTACT"
        icon={Send}
        telemetry={
          <>
            <span>STATUS: OPEN</span>
            <span>::</span>
            <span>RESPONSIVE</span>
          </>
        }
        dotColor="bg-emerald-500"
      />

      <section className="relative z-10 w-full max-w-4xl px-6 pt-44 md:pt-36 pb-24">
        <div className="rounded-xl border border-border/50 bg-background/40 p-8 backdrop-blur-sm text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Let&apos;s discuss how I can help your vision.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Feel free to reach me at{" "}
            <a
              href={`mailto:${portfolio.email}`}
              className="text-primary underline underline-offset-4"
            >
              {portfolio.email}
            </a>
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="cursor-none">
              <a href={`mailto:${portfolio.email}`}>
                <Mail className="h-4 w-4" />
                Email
              </a>
            </Button>
            {socialLinks
              .filter((item) => item.name !== "Email")
              .map((item) => (
                <Button
                  key={item.name}
                  variant="outline"
                  asChild
                  className="cursor-none"
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </Button>
              ))}
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/50 px-4 py-1 text-xs font-mono text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {portfolio.location}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            © Developed by Me
          </p>
        </div>
      </section>
    </main>
  );
}
