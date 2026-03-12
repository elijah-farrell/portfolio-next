"use client";

import { useEffect, useState } from "react";
import { SocialLinks } from "@/components/home/social-links";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    const id = setTimeout(() => setCurrentYear(new Date().getFullYear()), 0);
    return () => clearTimeout(id);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 py-6 pointer-events-none">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 px-4 pointer-events-auto">
        <div className="scale-90 origin-bottom">
          <SocialLinks isFooter={true} />
        </div>
        <div className="flex items-center gap-3 bg-background/80 backdrop-blur-md px-5 py-2 rounded-full border border-border/50 shadow-sm text-[10px] font-mono text-muted-foreground">
          <span>© {currentYear ?? "—"} Elijah Farrell</span>
          <span className="text-border h-3 w-px bg-border block"></span>
          <span>Open to opportunities</span>
        </div>
      </div>
    </footer>
  );
}
