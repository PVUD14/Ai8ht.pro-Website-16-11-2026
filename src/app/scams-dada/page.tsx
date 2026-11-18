import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, CircleHelp, Image as ImageIcon, Languages, Link as LinkIcon, MessageSquareText, Users, Volume2 } from "lucide-react";
import { ContactCta } from "@/components/ContactCta";
import { scamsDadaProduct } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./scams-dada.module.css";

export const metadata = pageMetadata({
  title: "ScamsDada | Digital Scam Awareness & Safety",
  description:
    "Explore ScamsDada by AI8HT, a digital safety platform designed to help people recognize suspicious messages, screenshots and website links.",
  path: scamsDadaProduct.path
});

const features = [
  { icon: ImageIcon, title: "Screenshot Check", description: "Review screenshots of suspicious digital content for potential scam indicators, including unexpected requests and messages that pressure you to act." },
  { icon: MessageSquareText, title: "Message Check", description: "Look for phishing, impersonation and social-engineering warning signs in SMS, WhatsApp and other message text." },
  { icon: LinkIcon, title: "Link Check", description: "Assess suspicious website links for potential phishing indicators and available risk signals before deciding what to do next." },
  { icon: CircleHelp, title: "Get Help", description: "Find understandable guidance on verifying a request, avoiding a suspicious interaction or reporting a concern through the appropriate channels." }
];

const steps = [
  { title: "Choose", description: "Select Screenshot, Message or Link from the dashboard." },
  { title: "Submit", description: "Provide the suspicious content you want to review." },
  { title: "Understand", description: "Read the available assessment and potential warning signs." },
  { title: "Act safely", description: "Use the guidance to verify, ignore, report or avoid the interaction." }
];

const accessibility = [
  { icon: Languages, title: "Language options", description: "English, Telugu and Hindi options help make the interface more approachable." },
  { icon: Volume2, title: "Listen controls", description: "Audio controls are intended to support people who prefer listening over reading." },
  { icon: Users, title: "A familiar experience", description: "Clearly labeled choices and a family-friendly design welcome people across generations." }
];

const scenarios = [
  "Fake bank and KYC verification requests",
  "Suspicious UPI and payment messages",
  "Fraudulent job and recruitment offers",
  "Fake courier and delivery notifications",
  "Impersonation and phishing messages",
  "Suspicious links and websites"
];

export default function ScamsDadaPage() {
  return (
    <div className={styles.root}>
      <section className={"section " + styles.hero} aria-labelledby="scamsdada-title">
        <p className="eyebrow">ScamsDada · An AI8HT product</p>
        <h1 id="scamsdada-title">Check Before <span>You Trust.</span></h1>
        <p className={styles.summary}>{scamsDadaProduct.description}</p>
        <div className={"hero-actions " + styles.actions}>
          <Link className="button ghost" href="/contact">
            Talk to us <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a className="button primary" href="https://www.scamsdada.ai8ht.pro">
            Launch ScamsDada <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className={"section " + styles.previewSection} id="dashboard" aria-labelledby="dashboard-title">
        <div className="section-heading centered">
          <p className="eyebrow">Product preview</p>
          <h2 id="dashboard-title">Digital safety, made simple.</h2>
          <p className={styles.previewCopy}>
            A family-friendly interface with English, Telugu and Hindi options and Listen controls.
          </p>
        </div>
        <figure className={"one-shot " + styles.dashboard}>
          <a
            className="dashboard-image-frame" data-dashboard-frame="true"
            href={scamsDadaProduct.dashboardImage}
            target="_blank"
            rel="noreferrer"
            aria-label="View the ScamsDada dashboard screenshot at full size (opens in a new tab)"
          >
            <Image
              src={scamsDadaProduct.dashboardImage}
              alt="ScamsDada dashboard showing screenshot, message and link checking options, Get Help, multilingual navigation and audio assistance."
              width={1522}
              height={823}
              sizes="(max-width: 1212px) calc(100vw - 32px), 1180px"
              unoptimized
            />
          </a>
          <figcaption className="one-shot-note">ScamsDada dashboard · Select the image to view full size</figcaption>
        </figure>
      </section>

      <section className={"section " + styles.featuresSection} id="features" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="eyebrow">What ScamsDada is designed to do</p>
          <h2 id="features-title">Four ways to approach a concern.</h2>
          <p className={styles.sectionCopy}>Understand suspicious content and find practical guidance before you click, respond or share sensitive information.</p>
        </div>
        <div className="pillar-grid">
          {features.map(({ icon: Icon, title, description }) => (
            <article className={"pillar-card " + styles.feature} key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={"section " + styles.detailSection} id="how-it-works" aria-labelledby="how-title">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2 id="how-title">From a suspicious message to an informed next step.</h2>
          <p className={styles.sectionCopy}>The intended checking journey is simple. An assessment provides guidance, not a guarantee.</p>
        </div>
        <ol className={styles.steps}>
          {steps.map(({ title, description }, index) => (
            <li key={title}>
              <span className={styles.stepNumber} aria-hidden="true">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={"section " + styles.detailSection} id="accessibility" aria-labelledby="accessibility-title">
        <div className={styles.accessibilityPanel}>
          <div className="section-heading">
            <p className="eyebrow">Designed for everyone</p>
            <h2 id="accessibility-title">Digital awareness across generations.</h2>
          </div>
          <div className={styles.accessibilityGrid}>
            {accessibility.map(({ icon: Icon, title, description }) => (
              <article key={title}>
                <Icon size={24} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className={styles.note}>The dashboard preview shows language and audio controls; complete translation and audio workflows have not been independently verified.</p>
        </div>
      </section>

      <section className={"section " + styles.detailSection} id="faq" aria-labelledby="faq-title">
        <div className="section-heading">
          <p className="eyebrow">More about ScamsDada</p>
          <h2 id="faq-title">Useful things to know.</h2>
        </div>
        <div className={styles.faqs}>
          <details>
            <summary>What is ScamsDada?<ChevronDown size={20} aria-hidden="true" /></summary>
            <div className={styles.answer}>
              <p>ScamsDada is a digital scam-awareness initiative by AI8HT. It is designed to make potential warning signs easier to understand through screenshot, message and link checking, alongside practical safety guidance.</p>
            </div>
          </details>
          <details>
            <summary>What kinds of situations should I be cautious about?<ChevronDown size={20} aria-hidden="true" /></summary>
            <div className={styles.answer}>
              <ul>{scenarios.map((scenario) => <li key={scenario}>{scenario}</li>)}</ul>
              <p>These are educational examples, not a list of scam types detected with verified accuracy.</p>
            </div>
          </details>
          <details>
            <summary>Can I run a scam check on this page?<ChevronDown size={20} aria-hidden="true" /></summary>
            <div className={styles.answer}>
              <p>This is the ScamsDada product information page. The dashboard image is a preview, and this page does not accept content or run scam checks.</p>
            </div>
          </details>
          <details>
            <summary>Can a check guarantee that something is safe?<ChevronDown size={20} aria-hidden="true" /></summary>
            <div className={styles.answer}>
              <p>No. Automated checks may be incomplete or inconclusive. Independently verify sensitive requests through official channels, even when an assessment does not identify a warning sign.</p>
            </div>
          </details>
        </div>
      </section>

      <section className={"section " + styles.detailSection} aria-labelledby="safety-title">
        <div className={styles.safety}>
          <h2 id="safety-title">Stay informed. Verify independently.</h2>
          <p>ScamsDada is designed to identify potential digital fraud indicators and provide practical safety guidance. Automated checks may be incomplete or inconclusive and cannot guarantee that a phone number, message or website is legitimate or fraudulent. Always independently verify sensitive requests through official channels.</p>
          <div className={styles.safetyLinks}>
            <Link href="/contact">Privacy &amp; terms enquiries</Link>
            <a href="https://cybercrime.gov.in/" target="_blank" rel="noreferrer">Report cybercrime in India ↗</a>
            <a href="tel:1930">Financial cyber fraud helpline: 1930</a>
          </div>
        </div>
      </section>

      <ContactCta related={[{ label: "AI8HT capabilities", href: "/capabilities" }]} />
    </div>
  );
}
