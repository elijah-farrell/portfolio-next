"use client";

import { useState } from "react";
import { TransitionLink } from "@/components/ui/transition-link";
import { usePathname } from "next/navigation";
import {
  Send,
  User,
  FolderGit2,
  BriefcaseBusiness,
  Menu,
  X,
  BrainCircuit,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { SoundToggle } from "@/components/sound-toggle";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { useSfx } from "@/hooks/use-sfx";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "About", href: "/about", icon: User },
  { name: "Experience", href: "/experience", icon: BriefcaseBusiness },
  { name: "Projects", href: "/projects", icon: FolderGit2 },
  { name: "Skills", href: "/skills", icon: BrainCircuit },
  { name: "Contact", href: "/contact", icon: Send },
];

export function Navbar() {
  const { play } = useSfx();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav>
      <div className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between p-4 md:p-6 md:px-12 pointer-events-none">
        <div className="pointer-events-auto z-50">
          <MagneticWrapper strength={0.2}>
            <TransitionLink
              href="/"
              aria-label="Home"
              className="block"
              onClick={() => {
                play("click");
                setIsMobileMenuOpen(false);
              }}
            >
              <Logo className="h-8 w-auto text-foreground transition-transform hover:scale-105" />
            </TransitionLink>
          </MagneticWrapper>
        </div>

        <div
          className={cn(
            "hidden md:flex pointer-events-auto items-center gap-2 rounded-full border border-border/40 p-1.5 backdrop-blur-md shadow-lg shadow-black/5",
            "bg-white/60 dark:bg-neutral-950/60",
          )}
        >
          <div className="flex items-center">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <MagneticWrapper key={item.href} strength={0.6}>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "relative overflow-hidden rounded-full transition-all duration-300",
                      isActive
                        ? "bg-primary/10 text-primary hover:bg-primary/20"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                    )}
                    onMouseEnter={() => play("hover")}
                    aria-label={item.name}
                  >
                    <TransitionLink
                      href={item.href}
                      onClick={() => play("click")}
                    >
                      <item.icon className="h-4 w-4" />
                    </TransitionLink>
                  </Button>
                </MagneticWrapper>
              );
            })}
          </div>

          <div className="h-6 w-px bg-border/50 mx-1" />

          <div className="flex items-center gap-1">
            <MagneticWrapper strength={0.6}>
              <SoundToggle />
            </MagneticWrapper>
            <MagneticWrapper strength={0.6}>
              <ThemeToggle />
            </MagneticWrapper>
          </div>
        </div>

        <div
          className={cn(
            "flex md:hidden pointer-events-auto items-center gap-2 z-50",
            isMobileMenuOpen && "opacity-0 pointer-events-none",
          )}
        >
          <MagneticWrapper strength={0.2}>
            <Button
              variant="outline"
              size="icon"
              aria-label="Open menu"
              className={cn(
                "rounded-full backdrop-blur-md border-border/40",
                "bg-white/60 dark:bg-neutral-950/60",
              )}
              onClick={() => {
                play("click");
                setIsMobileMenuOpen(true);
              }}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </MagneticWrapper>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col justify-center px-8 backdrop-blur-xl md:hidden bg-white/80 dark:bg-black/60">
          <div className="absolute top-4 right-4 flex items-center gap-2 pointer-events-auto">
            <MagneticWrapper strength={0.6}>
              <SoundToggle />
            </MagneticWrapper>
            <MagneticWrapper strength={0.6}>
              <ThemeToggle />
            </MagneticWrapper>
            <MagneticWrapper strength={0.2}>
              <Button
                variant="outline"
                size="icon"
                aria-label="Close menu"
                className={cn(
                  "rounded-full backdrop-blur-md border-border/40",
                  "bg-white/60 dark:bg-neutral-950/60",
                )}
                onClick={() => {
                  play("click");
                  setIsMobileMenuOpen(false);
                }}
              >
                <X className="h-5 w-5" />
              </Button>
            </MagneticWrapper>
          </div>

          <div className="flex flex-col gap-4 max-w-sm mx-auto w-full">
            {NAV_ITEMS.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <TransitionLink
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    play("click");
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "text-4xl font-black tracking-tighter flex items-center gap-4 transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-foreground/60 hover:text-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "text-sm font-mono tracking-widest",
                      isActive ? "text-primary" : "text-muted-foreground/30",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.name}
                </TransitionLink>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
