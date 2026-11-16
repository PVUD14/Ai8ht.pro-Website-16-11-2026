import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="glass-panel">
        <p className="eyebrow">Page not found</p>
        <h1>This AI8HT page is not available.</h1>
        <Link className="button primary" href="/">
          Return home
        </Link>
      </div>
    </section>
  );
}
