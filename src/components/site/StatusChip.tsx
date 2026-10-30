import { STATUS_LABEL, type Status } from "@/data/site";

// Glyph + label: colour is never the only cue, so the four states read in greyscale.
const GLYPH: Record<Status, string> = {
  verified: "●",
  built: "■",
  progress: "◐",
  concept: "○",
};

export function StatusChip({ status, className = "" }: { status: Status; className?: string }) {
  return (
    <span
      className={`label inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm px-2 py-1 ${className}`}
      style={{ color: `var(--${status}-fg)`, background: `var(--${status}-bg)` }}
    >
      <span aria-hidden="true" className="text-[10px] leading-none">
        {GLYPH[status]}
      </span>
      {STATUS_LABEL[status]}
    </span>
  );
}
