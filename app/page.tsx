import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h2>Diagnosis?</h2>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-row" aria-hidden="true">
          <span className="arrow arrow-left" />
          <Link href="/quiz" className="cta-circle" aria-label="Start the diagnostic questionnaire">
            <span className="sr-only">Start the diagnostic questionnaire</span>
          </Link>
          <span className="arrow arrow-right" />
        </div>
        <Link href="/quiz" className="cta-link">
          Start the Diagnostic Here
        </Link>
      </section>
    </>
  );
}
