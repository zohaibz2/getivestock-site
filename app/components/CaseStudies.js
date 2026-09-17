"use client";

import { useState } from "react";

const categories = ["All", "Qurbani", "Breeding", "Logistics", "Supply chain"];

// Placeholder case studies — swap the copy for real ones, and drop a photo into
// each card by replacing the .case-img placeholder with a <next/image> (see globals.css).
const studies = [
  {
    date: "August 2024",
    cat: "Qurbani",
    title: "Ten days before Eid",
    excerpt:
      "Liquidating a year's herd in a brutal mandi — and what timing the market really costs.",
  },
  {
    date: "June 2024",
    cat: "Logistics",
    title: "The 250-kilometre run",
    excerpt:
      "Moving animals from Mirpurkhas to Karachi ourselves, and why the distance is the whole business.",
  },
  {
    date: "March 2023",
    cat: "Logistics",
    title: "Bringing the herd to the city",
    excerpt:
      "A risky, expensive move to Karachi at 2,000 rupees a day in feed — and the bet behind it.",
  },
  {
    date: "May 2021",
    cat: "Supply chain",
    title: "Cutting out the middleman",
    excerpt:
      "Tomatoes at 10 rupees in the village, 200 in the city. The same gap, closed for livestock.",
  },
  {
    date: "January 2020",
    cat: "Breeding",
    title: "Starting over from one bull",
    excerpt:
      "Rebuilding from zero for the third time, with a pact to not quit until it worked ten times over.",
  },
  {
    date: "October 2018",
    cat: "Breeding",
    title: "The first buffalo",
    excerpt:
      "Thirty thousand rupees saved fifty at a time — and the six days that changed the plan.",
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState("All");
  const shown =
    active === "All" ? studies : studies.filter((s) => s.cat === active);

  return (
    <section className="cases" id="cases">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">03</span>
          <h2 className="sec-title">Case studies</h2>
        </div>
        <p className="cases-lede">
          A closer look at the animals, the seasons, and the runs to Karachi —
          told one story at a time.
        </p>

        <div className="cat-row" aria-label="Filter case studies by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={`cat${active === c ? " on" : ""}`}
              aria-pressed={active === c}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <hr className="cases-rule" />

        <div className="case-grid">
          {shown.map((s) => (
            <article className="case" key={s.title}>
              <div className="case-top">
                <span className="case-date">{s.date}</span>
                <span className="case-tag">{s.cat}</span>
              </div>
              {/* Replace this placeholder with <Image src={...} alt="…" fill /> */}
              <div className="case-img" aria-hidden="true">
                <span>Photo</span>
              </div>
              <h3 className="case-title">{s.title}</h3>
              <p className="case-ex">{s.excerpt}</p>
              <span className="case-more">Read case study</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
