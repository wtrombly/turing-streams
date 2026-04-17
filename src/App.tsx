import { useState } from "react";
import "./App.css";

const SERVICES = [
  {
    id: "pipelines",
    title: "Data Pipeline Engineering",
    description:
      "Reliable pipelines from source to insight. We design batch and streaming architectures that handle scale gracefully — from high-volume event ingestion to complex ETL orchestration.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
        <path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3" />
      </svg>
    ),
  },
  {
    id: "webapp",
    title: "Web App Development",
    description:
      "Production-grade web applications built with TypeScript and React. From internal tools to customer-facing platforms, we deliver fast, maintainable code your team can confidently own.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="15" rx="2" />
        <path d="M2 7h20" />
        <path d="M8 21h8M12 18v3" />
      </svg>
    ),
  },
  {
    id: "serverless",
    title: "Serverless & Distributed Systems",
    description:
      "Cloud-native architecture that scales to demand without idle costs. We design event-driven, fault-tolerant systems on AWS, Azure, and GCP — resilient by default, cheap at rest.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M18 10a6 6 0 0 0-11.88-1A4 4 0 1 0 6 17h12a4 4 0 0 0 0-8z" />
        <path d="M12 17v-5M9.5 14.5l2.5-2.5 2.5 2.5" />
      </svg>
    ),
  },
  {
    id: "lowcode",
    title: "Low-Code Cost Reduction",
    description:
      "Azure Logic Apps and Workato are powerful but expensive at scale. We identify high-cost workflows and replace them with lean, custom solutions — same reliability, significantly lower licensing spend.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    id: "ai",
    title: "AI Integration & Automation",
    description:
      "The future of software is already here — and most teams are still doing manually what machines can handle in milliseconds. We integrate LLMs and AI APIs into your existing systems, automate document and data workflows, and identify where intelligence can eliminate hours of repetitive work.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="12" cy="5" r="2" />
        <circle cx="4" cy="19" r="2" />
        <circle cx="20" cy="19" r="2" />
        <circle cx="12" cy="13" r="2.5" />
        <line x1="12" y1="7" x2="12" y2="10.5" />
        <line x1="10.1" y1="14.6" x2="5.9" y2="17.4" />
        <line x1="13.9" y1="14.6" x2="18.1" y2="17.4" />
      </svg>
    ),
  },
  {
    id: "eventsourcing",
    title: "Event Sourcing",
    description:
      "Model your domain as a stream of immutable events and gain audit trails, temporal queries, and event-driven integrations by default. We design event-sourced systems that are easier to reason about and evolve.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <line x1="2" y1="12" x2="22" y2="12" />
        <circle cx="5" cy="12" r="2.5" />
        <circle cx="12" cy="7" r="2.5" />
        <circle cx="19" cy="12" r="2.5" />
        <line x1="7.5" y1="11.2" x2="9.5" y2="7.8" />
        <line x1="14.5" y1="7.8" x2="16.5" y2="11.2" />
      </svg>
    ),
  },
];

type FormState = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;

function App() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    const form = e.currentTarget;

    try {
      const data = new FormData(form);
      data.append("access_key", WEB3FORMS_KEY);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      <header className="site-header">
        <div className="container">
          <a href="/" className="wordmark">
            Turing Streams
          </a>
          <nav aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#results">Results</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav-cta">
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" aria-labelledby="hero-heading">
          <div className="container">
            <p className="eyebrow">Software Consulting · Houston, TX</p>
            <h1 id="hero-heading">
              Build the right system.
              <br />
              Cut the platforms you don't need.
            </h1>
            <p className="hero-sub">
              Turing Streams designs data pipelines, AI-powered automation, and
              cloud systems — and replaces expensive low-code platforms with
              solutions your team can actually own and maintain.
            </p>
            <a href="#contact" className="btn-primary">
              Start a conversation
            </a>
          </div>
        </section>

        <section id="process" aria-labelledby="process-heading">
          <div className="container">
            <h2 id="process-heading">How It Works</h2>
            <p className="section-sub">
              A straightforward engagement — no surprises, no billable-hour
              guesswork.
            </p>
            <ol className="process-steps" role="list">
              <li>
                <span className="step-number" aria-hidden="true">
                  1
                </span>
                <h3>Discovery Call</h3>
                <p>
                  30 minutes to understand your systems, pain points, and goals.
                  No pitch, no obligation — just an honest conversation about
                  whether we're the right fit.
                </p>
              </li>
              <li>
                <span className="step-number" aria-hidden="true">
                  2
                </span>
                <h3>Scoped Proposal</h3>
                <p>
                  Within 48 hours you'll receive a written proposal with clear
                  deliverables, a fixed price, and a realistic timeline. No
                  hourly billing, no scope creep.
                </p>
              </li>
              <li>
                <span className="step-number" aria-hidden="true">
                  3
                </span>
                <h3>Build &amp; Hand Off</h3>
                <p>
                  We build iteratively with weekly check-ins and hand off clean,
                  documented code your team can own and extend — no ongoing
                  dependency on us to keep things running.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section id="services" aria-labelledby="services-heading">
          <div className="container">
            <h2 id="services-heading">What We Do</h2>
            <p className="section-sub">
              Deep expertise across the modern data and cloud stack.
            </p>
            <ul className="services-grid" role="list">
              {SERVICES.map((s) => (
                <li key={s.id} className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="results" aria-labelledby="results-heading">
          <div className="container">
            <h2 id="results-heading">Results</h2>
            <p className="section-sub">Real engagements, anonymized clients.</p>
            <ul className="case-studies" role="list">
              <li className="case-study-card">
                <p className="case-label">Low-Code Cost Reduction</p>
                <h3>From $6,200/mo to $180/mo in three weeks</h3>
                <p>
                  Our client was running multiple Workato workflows connecting
                  their CRM, billing platform, and data warehouse. We audited
                  every workflow, replaced them with .NET Azure Functions behind
                  an Azure Service Bus, and handed off code the team could
                  modify without a Workato license.
                </p>
                <div className="case-stat">
                  <span className="stat-number">97%</span>
                  <span className="stat-label">
                    reduction in monthly integration costs
                  </span>
                </div>
              </li>
              <li className="case-study-card">
                <p className="case-label">Data Pipeline Engineering</p>
                <h3>
                  6-hour batch jobs replaced with 4-minute streaming updates
                </h3>
                <p>
                  A logistics company's reporting pipeline ran nightly, leaving
                  operations teams making decisions on stale data. We rebuilt it
                  as a streaming architecture on Azure Event Hubs with
                  serverless processing and a materialized view layer — no new
                  infrastructure to manage.
                </p>
                <div className="case-stat">
                  <span className="stat-number">99%</span>
                  <span className="stat-label">reduction in data latency</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading">
          <div className="container">
            <h2 id="about-heading">Who We Are</h2>
            <p className="section-sub">
              Based in Houston, TX. Built on engineering and operational
              discipline.
            </p>
            <div className="founder-card">
              <div className="founder-header">
                <div>
                  <h3>Will Trombly</h3>
                  <p className="founder-title">
                    Founder &amp; Software Engineer
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/willtrombly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-btn"
                  aria-label="Will Trombly on LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
              </div>
              <p className="founder-bio">
                US Army veteran turned software engineer. Will brings
                operational discipline and full-stack depth to every engagement
                — from designing high-throughput data pipelines and
                event-sourced architectures to building React applications and
                right-sizing expensive low-code platforms like Azure Logic Apps
                and Workato. If a system is costing more than it should or
                moving slower than your team needs, that's the problem Turing
                Streams was built to solve.
              </p>
              <ul className="founder-tags" role="list">
                {[
                  "React & TypeScript",
                  "Data Pipelines",
                  "Cloud Architecture",
                  "Node.js / Express",
                  "Event Sourcing",
                  "Business Analytics",
                ].map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <div className="container">
            <h2 id="contact-heading">Start a Conversation</h2>
            <p className="section-sub">
              Tell us about your project and we'll get back to you within one
              business day.
            </p>
            <a
              href="mailto:contact@turingstreams.com"
              className="contact-email"
            >
              contact@turingstreams.com
            </a>

            {formState === "success" ? (
              <div className="form-success" role="status">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p>Thanks! We'll be in touch soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project…"
                  />
                </div>
                {formState === "error" && (
                  <p className="form-error" role="alert">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={formState === "submitting"}
                >
                  {formState === "submitting" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <span className="wordmark">Turing Streams</span>
          <span>
            © {new Date().getFullYear()} Turing Streams. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
