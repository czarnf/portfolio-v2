import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHead({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <Reveal className="mb-10 md:mb-12">
      <p className="label text-ink-3">{eyebrow}</p>
      <h2 id={`${id}-title`} className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.015em] md:text-[32px]">
        {title}
      </h2>
      {children && <div className="prose-col mt-4 text-ink-2">{children}</div>}
    </Reveal>
  );
}
