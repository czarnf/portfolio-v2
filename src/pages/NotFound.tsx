import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="wrap py-24 md:py-32">
      <p className="label text-ink-3">404</p>
      <h1 className="mt-3 text-[34px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[48px]">This page does not exist.</h1>
      <p className="prose-col mt-4 text-ink-2">The link may be out of date. Everything on the site is reachable from the home page.</p>
      <Link to="/" className="btn btn-primary mt-8">
        Back to the home page
      </Link>
    </section>
  );
}
