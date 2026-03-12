"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  outline?: boolean;
}

export function Logo({ className, outline = false, ...props }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 100"
      fill="currentColor"
      fillOpacity={outline ? 0 : 1}
      stroke={outline ? "currentColor" : "none"}
      strokeWidth={outline ? "2" : "0"}
      className={cn("h-10 w-auto", className)}
      {...props}
    >
      <path
        className="logo-path"
        d="M8 8H52V20H20V42H46V54H20V80H52V92H8ZM68 8H112V20H80V42H104V54H80V92H68Z"
      />
    </svg>
  );
}
