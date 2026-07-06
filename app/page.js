import Image from "next/image";
import { Tractor } from "lucide-react";
import Header from "./components/Header";
import hero from "@/public/hero.jpeg";

// Ordered Chapter 1 -> Chapter 7. Rendered top-to-bottom as 2024 -> 2017
// (newest on top) so the story reads bottom-to-top up the road.
const chapters = [
  {
    n: 1,
    year: "2017",
    title: "The First Spark",
    body: "Born into a family that loved livestock. I took my entire 4,000-rupee Eidi savings to buy my first goat — the seller refused, and I went home crushed. But the dream had already taken root.",
  },
  {
    n: 2,
    year: "2018",
    title: "The Hardest Lessons",
    body: "Saving my 50-rupee lunch allowance and taking small loans, I finally bought in — then lost a buffalo, and arthritis left me bedridden at selling time. I barely broke even, but learned I didn't have to do this alone.",
  },
  {
    n: 3,
    year: "2020",
    title: "The Promise",
    body: "Starting from zero for the third time, I bought a bull for 29,000 rupees and made a pact with myself: never quit until I'd rebuilt this business from scratch at least 10 times.",
  },
  {
    n: 4,
    year: "2021",
    title: "The Vision",
    body: "My first partner bought into the idea and we expanded. My equity diluted, but I didn't care — I was here to fix a broken supply chain, not chase a quick profit.",
  },
  {
    n: 5,
    year: "2022",
    title: "The Weight of Expectations",
    body: "Animals were dying and 4–5 lakhs were on the line. People mocked the 250km weekly drives; my father feared I was throwing my education away. But this was bigger than me.",
  },
  {
    n: 6,
    year: "2023",
    title: "The Breaking Point",
    body: "A buyer backed out and sent me to square one. I rebuilt again — a buffalo bought for 1.5 lakhs, sold for 2.3 — and made the risky move to bring the next batch to Karachi.",
  },
  {
    n: 7,
    year: "2024",
    title: "The Sacrifice",
    body: "I got into FCCU and had to move to Lahore. With 25 lakhs invested and pressure to quit, I sold everything ten days before Eid — goats I'd raised for a year, gone at half-price. But I'd secretly secured land for a real farm.",
  },
];

export default function Home() {
  return (
    <div className="page">
      <Header />

      <main className="hero">
        <div className="hero-text">
          <p className="eyebrow">The Journey</p>
          <h1 className="headline">
            The Future of
            <br />
            Livestock Farming
          </h1>
          <p className="subtext">
            A business student&apos;s journey toward a smarter, healthier future
            for goat farming. Currently doing a Bachelor&apos;s in Business
            Administration at Forman Christian College Lahore — the plan? Finish
            the degree. Skip the job. Run back to the goats.
          </p>
          <a className="btn btn-pill hero-cta" href="#">
            Explore the Journey
            <span className="arrow" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>

        <div className="hero-media">
          <Image
            src={hero}
            alt="A farmer surrounded by goats at a livestock farm"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover", borderRadius: "var(--radius-photo)" }}
            priority
          />
        </div>
      </main>

      <section id="our-story" className="story">
        <div className="story-head">
          <p className="eyebrow">Our Story</p>
          <h2 className="story-title">The Road So Far</h2>
        </div>

        <ol className="timeline">
          <Tractor
            className="timeline-tractor"
            size={52}
            strokeWidth={1.6}
            aria-hidden="true"
          />

          {[...chapters].reverse().map((chapter, i) => (
            <li
              key={chapter.n}
              className={`chapter${i % 2 === 1 ? " flip" : ""}`}
            >
              <div className="chapter-side chapter-heading">
                <p className="chapter-label">Chapter {chapter.n}</p>
                <h3 className="chapter-title">{chapter.title}</h3>
                <p className="chapter-year">{chapter.year}</p>
              </div>

              <span className="chapter-dot" aria-hidden="true" />

              <div className="chapter-side chapter-desc">
                <p>{chapter.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
