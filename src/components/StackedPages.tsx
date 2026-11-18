"use client";
import { useState } from "react";
export type PageData = { id: string; title: string; content: React.ReactNode };
export function StackedPages({ pages }: { pages: PageData[] }) {
  const [active, setActive] = useState(0);
  return <div className="resource-reader">
    <nav aria-label="Whitepaper chapters" className="reader-index">
      <p className="eyebrow">In this whitepaper</p>
      {pages.map((page, index) => <button key={page.id} type="button" aria-current={active === index ? "true" : undefined} aria-controls="reader-content" onClick={() => setActive(index)}><span className="side-nav-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{page.title}</span></button>)}
    </nav>
    <article id="reader-content" className="reader-content" aria-labelledby="reader-title" aria-live="polite">
      <p className="eyebrow">Chapter {active + 1} of {pages.length}</p><h2 id="reader-title">{pages[active].title}</h2>
      {pages[active].content}
      <div className="reader-controls"><button className="button ghost" disabled={active === 0} onClick={() => setActive(active - 1)}>Previous</button><button className="button ghost" disabled={active === pages.length - 1} onClick={() => setActive(active + 1)}>Next chapter</button></div>
    </article>
  </div>;
}
