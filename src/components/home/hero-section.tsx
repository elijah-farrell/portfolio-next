"use client";

import * as React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useLoadingStatus } from "@/components/loading-context";
import { NeuralNetwork } from "@/components/home/neural-network";
import { Button } from "@/components/ui/button";
import { TransitionLink } from "@/components/ui/transition-link";
import { HackerText } from "@/components/ui/hacker-text";
import { portfolio, quickStats } from "@/data/portfolio";

gsap.registerPlugin(useGSAP);

export function HeroSection() {
  const containerRef = React.useRef<HTMLElement>(null);
  const { assetsLoaded } = useLoadingStatus();
  const wasLoadedOnMount = React.useRef(assetsLoaded);

  useGSAP(
    () => {
      if (!assetsLoaded) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      const startDelay = wasLoadedOnMount.current ? 0.1 : 1.3;

      // 1. Network Fade In
      tl.fromTo(
        ".network-layer",
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "sine.inOut" },
        startDelay,
      );

      // 2. Content Slide Up
      tl.fromTo(
        ".hero-animate",
        { y: 40, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.15,
        },
        "-=1.5",
      );
    },
    { scope: containerRef, dependencies: [assetsLoaded] },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[60vh] md:min-h-0 md:h-auto w-full flex-col items-center justify-center overflow-hidden px-4 py-12"
    >
      {/* Neural Network Background Layer */}
      <div className="network-layer absolute inset-0 z-0 opacity-0 transition-opacity">
        <NeuralNetwork />
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-8 text-center pointer-events-none">
        <div className="hero-animate opacity-0 pointer-events-auto rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-mono tracking-wider text-emerald-400">
          <span className="mr-2">🟢</span>
          {portfolio.availability}
        </div>

        <h1 className="hero-animate opacity-0 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl select-text pointer-events-auto">
          {portfolio.name}
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60">
            <HackerText text={portfolio.title} />
          </span>
        </h1>

        <div className="hero-animate opacity-0 mx-auto max-w-4xl rounded-2xl bg-background/30 p-4 text-muted-foreground backdrop-blur-sm md:text-xl border border-white/5 pointer-events-auto">
          <p className="text-foreground/90">
            {portfolio.heroLines.map((line) => (
              <span key={line} className="mr-2 inline-block">
                {line}
              </span>
            ))}
          </p>
        </div>

        <div className="hero-animate opacity-0 flex flex-wrap items-center justify-center gap-3 pointer-events-auto">
          <Button asChild className="cursor-none gap-2">
            <a href="#" aria-label="Download Resume">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button variant="outline" asChild className="cursor-none gap-2">
            <TransitionLink href="/contact">
              <Mail className="h-4 w-4" />
              Get in touch
            </TransitionLink>
          </Button>
        </div>

        <div className="hero-animate opacity-0 flex items-center gap-2 text-muted-foreground">
          <ArrowDown className="h-4 w-4" />
          <span className="font-mono text-xs">Explore tabs below</span>
        </div>

        <div className="hero-animate opacity-0 grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 pointer-events-auto">
          {quickStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border/50 bg-background/40 p-4 backdrop-blur-sm"
            >
              <div className="text-2xl font-black tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
