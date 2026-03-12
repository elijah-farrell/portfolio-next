"use client";

import React, { useRef } from "react";
import { BookOpenText, MapPin, GraduationCap, UserRound } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { HudHeader } from "@/components/ui/hud-header";
import { portfolio } from "@/data/portfolio";

gsap.registerPlugin(useGSAP);

export function AboutClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".floating-header",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.2 },
      );
      tl.fromTo(
        ".about-card",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
        "-=0.6",
      );
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="relative flex min-h-dvh w-full flex-col items-center overflow-hidden text-foreground pt-24 md:pt-32 pb-20 px-6"
    >
      <HudHeader
        title="ABOUT_ME"
        icon={BookOpenText}
        telemetry={
          <>
            <span>LOC: {portfolio.location.toUpperCase()}</span>
            <span>::</span>
            <span>EDU: B.S. CS</span>
          </>
        }
        dotColor="bg-emerald-500"
      />

      <section className="relative z-10 w-full max-w-5xl mt-10 grid gap-4">
        <div className="about-card grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-border/50 bg-background/40 p-4 backdrop-blur-sm">
            <div className="mb-1 flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Location
            </div>
            <p className="text-lg font-semibold">{portfolio.location}</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-background/40 p-4 backdrop-blur-sm">
            <div className="mb-1 flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <GraduationCap className="h-4 w-4" />
              Education
            </div>
            <p className="text-lg font-semibold">{portfolio.education}</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-background/40 p-4 backdrop-blur-sm">
            <div className="mb-1 flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <UserRound className="h-4 w-4" />
              Age
            </div>
            <p className="text-lg font-semibold">{portfolio.age}</p>
          </div>
        </div>

        <div className="about-card rounded-xl border border-border/50 bg-background/40 p-6 backdrop-blur-sm space-y-5 text-muted-foreground leading-relaxed">
          {portfolio.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
