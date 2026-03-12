"use client";

import { FolderGit2 } from "lucide-react";
import { HudHeader } from "@/components/ui/hud-header";
import { projects } from "@/data/portfolio";

export function ProjectsClient() {
  return (
    <main className="relative flex min-h-dvh w-full flex-col items-center overflow-hidden text-foreground pt-24 md:pt-32 pb-20 px-6">
      <HudHeader
        title="PROJECTS"
        icon={FolderGit2}
        telemetry={
          <>
            <span>BUILD_LOG: CURATED</span>
            <span>::</span>
            <span>SHOWCASE</span>
          </>
        }
        dotColor="bg-purple-500"
      />

      <section className="relative z-10 w-full max-w-6xl mt-10 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title + project.description}
            className="rounded-xl border border-border/50 bg-background/40 p-6 backdrop-blur-sm"
          >
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="mt-2 text-muted-foreground">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
