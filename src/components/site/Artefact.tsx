import type { CaseStudy } from "@/data/site";

// The one real artefact shown with each piece of work. No device mockups or fake browser chrome.
export function Artefact({ artefact }: { artefact: CaseStudy["artefact"] }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-200 group-hover:border-line-strong">
      {artefact.kind === "scores" && (
        <table className="w-full text-left">
          <thead className="bg-sunken">
            <tr>
              <th scope="col" className="label px-4 py-3 font-medium text-ink-3">Measure</th>
              <th scope="col" className="label px-4 py-3 text-right font-medium text-ink-3">Before</th>
              <th scope="col" className="label px-4 py-3 text-right font-medium text-ink-3">After</th>
            </tr>
          </thead>
          <tbody>
            {artefact.rows.map((r) => (
              <tr key={r.label} className="border-t border-line">
                <th scope="row" className="px-4 py-3 text-[15px] font-normal text-ink-2">{r.label}</th>
                <td className="mono px-4 py-3 text-right text-[15px] text-ink-3">{r.from}</td>
                <td className="mono px-4 py-3 text-right text-[15px] font-medium text-ink">{r.to}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {artefact.kind === "facts" && (
        <dl>
          {artefact.rows.map((r, i) => (
            <div key={r.label} className={`grid grid-cols-[minmax(96px,35%)_1fr] gap-4 px-4 py-3 ${i ? "border-t border-line" : ""}`}>
              <dt className="label pt-[3px] text-ink-3">{r.label}</dt>
              <dd className="text-[15px] text-ink">{r.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {artefact.kind === "code" && (
        <pre className="mono overflow-x-auto bg-sunken p-4 text-[13px] leading-[1.7] text-ink">
          {artefact.lines.map((l, i) => (
            <div key={i} className={l.startsWith("$") ? "text-ink-3" : undefined}>
              {l}
            </div>
          ))}
        </pre>
      )}

      {artefact.kind === "image" && <img src={artefact.src} alt={artefact.alt} className="block w-full" loading="lazy" />}

      <figcaption className="border-t border-line px-4 py-2.5 text-[13px] text-ink-3">{artefact.caption}</figcaption>
    </figure>
  );
}
