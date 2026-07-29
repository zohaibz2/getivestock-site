"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import tractorImg from "@/public/tractor.png";

const chapters = [
  {
    n: 1,
    year: "2017",
    title: "The First Spark",
    teaser: "It began with 4,000 rupees of Eidi and one refused goat.",
    full: "We were born with the love of livestock. My father used to raise animals on our 3 acres, and I wanted in. I had 4,000 rupees—my entire Eidi collection. I marched to the village with my grandmother, ready to buy my first goat. Her sister refused to sell, and I returned home completely demotivated. I needed more capital. That same week, I saw a newborn buffalo at a relative's house, and the dream shifted.",
  },
  {
    n: 2,
    year: "2018",
    title: "The Hardest Lessons",
    teaser: "Hunger, loans, a dead buffalo, and a razor-thin first profit.",
    full: "By 2018, that relative was ready to sell. The price: 30,000 rupees. I started saving every cent. I gave 5,000 as an advance and began the hunt for the rest. I was bullied daily at school—everyone asked why I never had lunch money. I'd sit there, hungry and idle during the break, hiding the fact that I was saving my 50-rupee allowance for a dream. I finally raised the 30k. Six days later, my grandmother told me the buffalo had died. I was heartbroken. I was done waiting for savings; I started asking for loans, promising to pay them back once I sold the animals. I raised 12k in a single day—a massive realization: I didn't have to do this alone. I bought two goats, but when it came time to sell, I was hit by a flare of arthritis. I was bedridden, unable to walk. Others sold the animals for me, but they only fetched 16k each. After paying back my partners, my profit was razor-thin. Adjusted for inflation, I had barely enough to buy two new goats. Where was the growth?",
  },
  {
    n: 3,
    year: "2020",
    title: "The Promise",
    teaser: "Starting from zero a third time, with a pact to never quit.",
    full: "I didn't give up. I saved, I hustled, and I bought a bull for 29,000 rupees. This was it—the business was starting from zero for the third time. I made a pact with myself: I would not quit until I had rebuilt this business from scratch at least 10 times.",
  },
  {
    n: 4,
    year: "2021",
    title: "The Vision",
    teaser: "A first partner, a diluting stake, and a bigger mission.",
    full: "I landed my first partner, a school friend. I was good at selling ideas, and he bought in. We expanded to a buffalo and more goats. But I quickly learned that while the herd grew, my equity was diluting. I didn't care. I wasn't here for the quick buck; I was here to fix the supply chain. I saw the disparity: tomatoes were 10 rupees in Mirpurkhas and 200 in Karachi. Goats for Qurbani sold for double in the city. The village children weren't in school, and I wanted to change that. Why would I care about profit margins when I was chasing a mission?",
  },
  {
    n: 5,
    year: "2022",
    title: "The Weight of Expectations",
    teaser: "Dying animals, mounting losses, and a father's fear.",
    full: "Reality hit. Animals were dying, and it was devastating. I had invested 4-5 lakhs—half of it belonging to my partner, who did want a return. People mocked me: “Why waste your time? Why drive 250 kilometers every week for a loss-making hobby?” My father said I was just playing. He knew the pain of the business because it had almost destroyed him. He worked his whole life to give me an education, and he saw me throwing it away. I understood his worry, but this was bigger than me. It was about changing lives.",
  },
  {
    n: 6,
    year: "2023",
    title: "The Breaking Point",
    teaser: "Back to square one, then a risky move to Karachi.",
    full: "The bull I'd kept for two years finally sold for 70k, but the buyer returned five days later, backing out. I was at square one. I eventually sold it for 50k, took a trip, and started over again. I bought a buffalo for 1.5 lakhs, which eventually sold for 2.3 lakhs. I decided to bring the next batch to Karachi—a risky, expensive move. Feed costs alone were 2,000 rupees a day. I knew it would pay off.",
  },
  {
    n: 7,
    year: "2024",
    title: "The Sacrifice",
    teaser: "FCCU, Lahore, and selling everything ten days before Eid.",
    full: "I graduated, and the pressure to conform was immense: Apply to LUMS, get a degree, leave the goats behind. I got waitlisted at LUMS, but then I got into FCCU. My mother had dreamt it—just like she had for my sister and brother. But now, I had to move to Lahore. Where would the goats go? I had 25 lakhs invested, mostly my own hard-earned money and a portion from my sister, who hated the business but loved her brother. When I went to Lahore for my test, my world imploded. My father had gone to Mirpurkhas and told everyone the business was over. He demanded I scrap it. I stood there, looking at my goats, knowing the dream was being dismantled. I had to choose. I asked my sister for the money to secure a piece of land in Mirpurkhas—a place for a real farm. I bought it in secret. Ten days before Eid, the market was brutal. I went back and forth to the mandi, day after day, selling at half-price just to liquidate. Standing there, selling a goat I'd raised for a year for a measly 20k—it broke me. My sister's voice echoed in my head: “Sell them, gift them, give them away for free, but don't bring them back.” I did it. I sold everything to scrap together 5 lakhs. The animals I loved, the dream I'd bled for—all gone.",
  },
];

export default function Timeline() {
  const [openId, setOpenId] = useState(null);
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState([]); // {left%, topPx} per chapter, set after mount
  const listRef = useRef(null);
  const pathRef = useRef(null);
  const poseRef = useRef(() => ({ left: 50, topPx: 0, ang: 90 }));

  const toggle = (n) => setOpenId((prev) => (prev === n ? null : n));

  // The tractor's position down the centre line follows scroll progress.
  useEffect(() => {
    const wrap = listRef.current;
    const path = pathRef.current;
    if (!wrap || !path) return;

    const L = path.getTotalLength();

    // path x (0..100) at a fractional y (0..1)
    const xAtY = (fy) => {
      let lo = 0, hi = L;
      for (let k = 0; k < 24; k++) {
        const mid = (lo + hi) / 2;
        path.getPointAtLength(mid).y / 1000 < fy ? (lo = mid) : (hi = mid);
      }
      return path.getPointAtLength((lo + hi) / 2).x;
    };

    // screen-space pose: left%, topPx, on-screen heading angle
    const poseAtY = (fy) => {
      const h = wrap.getBoundingClientRect().height;
      const w = wrap.getBoundingClientRect().width;
      const e = 0.008;
      const y0 = Math.max(0, fy - e), y1 = Math.min(1, fy + e);
      const x0 = (xAtY(y0) / 100) * w, x1 = (xAtY(y1) / 100) * w;
      const ang = Math.atan2((y1 - y0) * h, x1 - x0) * (180 / Math.PI);
      return { left: xAtY(fy), topPx: fy * h, ang };
    };
    poseRef.current = poseAtY;

    // pin each chapter dot onto the road, using the SAME pose math as the tractor
    const layoutDots = () => {
      const wr = wrap.getBoundingClientRect();
      const next = [];
      wrap.querySelectorAll(".tli").forEach((li) => {
        const cyc = li.getBoundingClientRect().top - wr.top + 30;
        const fy = Math.max(0, Math.min(1, cyc / wr.height));
        const pt = poseAtY(fy);
        next.push({ left: pt.left, topPx: pt.topPx });
      });
      setDots(next);
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = wrap.getBoundingClientRect();
      const raw = (window.innerHeight * 0.5 - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const onResize = () => {
      layoutDots();
      update();
    };

    layoutDots();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const pose = poseRef.current(progress);

  return (
    <section className="chapters" id="chapters">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">01</span>
          <h2 className="sec-title">Seven chapters</h2>
        </div>
        <p className="ch-intro">
          Eight years, told in his own words. Open any chapter to read it in
          full.
        </p>

        <div className="tl-wrap" ref={listRef}>
          <svg
            className="road-svg"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path ref={pathRef} className="road-bed" d={"M 50 0 C 51.33 23.33 59.17 91.67 58 140 C 56.83 188.33 43.33 240 43 290 C 42.67 340 55.67 388.33 56 440 C 56.33 491.67 44.83 546.67 45 600 C 45.17 653.33 56.67 710 57 760 C 57.33 810 48.17 860 47 900 C 45.83 940 49.5 983.33 50 1000"} />
            <path className="road-mid" d={"M 50 0 C 51.33 23.33 59.17 91.67 58 140 C 56.83 188.33 43.33 240 43 290 C 42.67 340 55.67 388.33 56 440 C 56.33 491.67 44.83 546.67 45 600 C 45.17 653.33 56.67 710 57 760 C 57.33 810 48.17 860 47 900 C 45.83 940 49.5 983.33 50 1000"} />
          </svg>

          <Image
            className="tractor"
            src={tractorImg}
            alt=""
            aria-hidden="true"
            width={52}
            height={52}
            style={{
              left: `${pose.left}%`,
              top: `${pose.topPx}px`,
              transform: `translate(-50%,-50%) rotate(${pose.ang}deg)`,
            }}
          />

          <ol className="tl">
            {chapters.map((c, i) => {
              const open = openId === c.n;
              const bodyId = `tl-body-${c.n}`;
              return (
                <li
                  key={c.n}
                  className={`tli${i % 2 ? " flip" : ""}${open ? " open" : ""}`}
                >
                  <div className="tle">
                    <button
                      type="button"
                      className="tlb"
                      aria-expanded={open}
                      aria-controls={bodyId}
                      onClick={() => toggle(c.n)}
                    >
                      <span className="tl-yr">{c.year}</span>
                      <span className="tl-t">{c.title}</span>
                      <span className="tl-tease">{c.teaser}</span>
                      <span className="tl-more">
                        {open ? "Close" : "Read the chapter"}
                      </span>
                    </button>
                    <div className="tl-body" id={bodyId}>
                      <div>
                        <p>{c.full}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="dot-layer" aria-hidden="true">
            {dots.map((d, i) => (
              <span
                key={i}
                className="dot"
                style={{ left: `${d.left}%`, top: `${d.topPx}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
