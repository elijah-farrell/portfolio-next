"use client";

import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import { HudHeader } from "@/components/ui/hud-header";
import { experiences } from "@/data/portfolio";

export function ExperienceClient() {
  return (
    <main className="relative flex min-h-dvh w-full flex-col items-center overflow-hidden text-foreground pt-24 md:pt-32 pb-20 px-6">
      <HudHeader
        title="EXPERIENCE"
        icon={BriefcaseBusiness}
        telemetry={
          <>
            <span>TRACK: PROFESSIONAL</span>
            <span>::</span>
            <span>ACTIVE</span>
          </>
        }
        dotColor="bg-blue-500"
      />

      <section className="relative z-10 w-full max-w-5xl mt-10 grid gap-4">
        {experiences.map((experience) => (
          <article
            key={experience.role}
            className="rounded-xl border border-border/50 bg-background/40 p-6 backdrop-blur-sm"
          >
            <h2 className="text-xl font-bold">{experience.role}</h2>
            <p className="text-primary">{experience.organization}</p>
            <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              {experience.range}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
