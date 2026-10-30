import { LAST_UPDATED, LINKS } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-sunken">
      <div className="wrap flex flex-col gap-3 py-8 text-[14px] text-ink-3 md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-semibold text-ink">Emmanuel Chiefson</span> · Bristol, UK
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          <li>
            <a href={`mailto:${LINKS.email}`} className="hover:text-ink">Email</a>
          </li>
          <li>
            <a href={LINKS.linkedin} className="hover:text-ink" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href={LINKS.github} className="hover:text-ink" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
        <p className="mono text-[13px]">Last updated {LAST_UPDATED}</p>
      </div>
    </footer>
  );
}
