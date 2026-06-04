import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  variant?: "light" | "dark";
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function SectionShell({
  id,
  variant = "light",
  eyebrow,
  title,
  children,
  className,
}: SectionShellProps) {
  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 sm:py-28",
        isDark ? "bg-[#0b0d10] text-[#fbfbfa]" : "bg-transparent text-[#0b0d10]",
        className,
      )}
    >
      <div className="container px-6">
        {(eyebrow || title) && (
          <header className="mb-10 sm:mb-14">
            {eyebrow && (
              <div
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em]",
                  isDark
                    ? "border border-white/15 bg-white/5 text-white/80"
                    : "border border-black/10 bg-white/60 text-black/70 backdrop-blur",
                )}
              >
                <span className={cn("h-1.5 w-1.5 rounded-full", isDark ? "bg-[#f3c51a]" : "bg-[#e10600]")} />
                <span>{eyebrow}</span>
              </div>
            )}
            {title && (
              <h2
                className={cn(
                  "mt-5 max-w-3xl font-[var(--font-display)] text-4xl leading-[1.02] tracking-[-0.02em] sm:text-5xl",
                  isDark ? "text-[#fbfbfa]" : "text-[#0b0d10]",
                )}
              >
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

