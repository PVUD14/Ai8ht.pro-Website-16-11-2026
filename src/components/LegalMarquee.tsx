import { legalLines } from "@/data/site";

export function LegalMarquee() {
  const items = [legalLines.copyright, legalLines.trademark];
  return (
    <div className="legal-marquee-wrapper" aria-label="Legal notices">
      <div className="legal-marquee-track">
        {[0, 1].map(copy => (
          <div className="legal-marquee-group" key={copy} aria-hidden={copy === 1}>
            {items.map(text => <span key={text}>{text}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}
