"use client";

import { BrainCircuit } from "lucide-react";
import { HudHeader } from "@/components/ui/hud-header";
import { skillGroups } from "@/data/portfolio";

export function SkillsClient() {
  return (
    <main className="relative flex min-h-dvh w-full flex-col items-center overflow-hidden text-foreground pt-24 md:pt-32 pb-20 px-6">
      <HudHeader
        title="SKILLS"
        icon={BrainCircuit}
        telemetry={
          <>
            <span>STACK: READY</span>
            <span>::</span>
            <span>MULTI_DOMAIN</span>
          </>
        }
        dotColor="bg-cyan-500"
      />

      <section className="relative z-10 w-full max-w-6xl mt-10 grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.category}
            className="rounded-xl border border-border/50 bg-background/40 p-6 backdrop-blur-sm"
          >
            <h2 className="text-lg font-bold">{group.category}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-2.5 py-1 text-xs font-mono text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <p className="relative z-10 mt-8 max-w-4xl px-3 text-center font-mono text-sm text-muted-foreground">
        I learn fast mostly because I break things faster.
      </p>
    </main>
  );
}
