"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
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
    full: "Reality hit. Animals were dying, and it was devastating. I had invested 4-5 lakhs—half of it belonging to my partner, who did want a return. People mocked me: \"Why waste your time? Why drive 250 kilometers every week for a loss-making hobby?\" My father said I was just playing. He knew the pain of the business because it had almost destroyed him. He worked his whole life to give me an education, and he saw me throwing it away. I understood his worry, but this was bigger than me. It was about changing lives.",
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
    full: "I graduated, and the pressure to conform was immense: Apply to LUMS, get a degree, leave the goats behind. I got waitlisted at LUMS, but then I got into FCCU. My mother had dreamt it—just like she had for my sister and brother. But now, I had to move to Lahore. Where would the goats go? I had 25 lakhs invested, mostly my own hard-earned money and a portion from my sister, who hated the business but loved her brother. When I went to Lahore for my test, my world imploded. My father had gone to Mirpurkhas and told everyone the business was over. He demanded I scrap it. I stood there, looking at my goats, knowing the dream was being dismantled. I had to choose. I asked my sister for the money to secure a piece of land in Mirpurkhas—a place for a real farm. I bought it in secret. Ten days before Eid, the market was brutal. I went back and forth to the mandi, day after day, selling at half-price just to liquidate. Standing there, selling a goat I'd raised for a year for a measly 20k—it broke me. My sister's voice echoed in my head: \"Sell them, gift them, give them away for free, but don't bring them back.\" I did it. I sold everything to scrap together 5 lakhs. The animals I loved, the dream I'd bled for—all gone.",
  },
];

export default function StoryTimeline() {
  const [openId, setOpenId] = useState(null);
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef(null);

  const toggle = (n) => setOpenId((prev) => (prev === n ? null : n));

  // Tie the tractor's vertical position to scroll progress through the timeline.
  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the timeline top reaches the viewport middle,
      // 1 once its bottom passes the viewport middle.
      const raw = (vh * 0.5 - rect.top) / rect.height;
      const clamped = Math.min(1, Math.max(0, raw));
      setProgress(clamped);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol className="os-timeline" ref={timelineRef}>
      <Image
        className="os-tractor"
        src={tractorImg}
        alt=""
        aria-hidden="true"
        width={60}
        height={60}
        priority
        style={{ top: `calc(${progress} * (100% - 60px))` }}
      />

      {chapters.map((chapter, i) => {
        const open = openId === chapter.n;
        return (
          <li
            key={chapter.n}
            className={`os-chapter${i % 2 === 1 ? " flip" : ""}`}
          >
            <span className="os-dot" aria-hidden="true" />

            <article className={`os-card${open ? " open" : ""}`}>
              <button
                type="button"
                className="os-card-head"
                aria-expanded={open}
                onClick={() => toggle(chapter.n)}
              >
                <p className="os-label">Chapter {chapter.n}</p>
                <h3 className="os-title">{chapter.title}</h3>
                <p className="os-year">{chapter.year}</p>
                <p className="os-teaser">{chapter.teaser}</p>
                <ChevronDown className="os-chevron" size={22} aria-hidden="true" />
              </button>

              <div className="os-body">
                <div className="os-body-inner">
                  <p>{chapter.full}</p>
                </div>
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
