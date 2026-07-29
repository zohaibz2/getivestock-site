import Image from "next/image";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import ribbon from "@/public/ribbon.jpg";
import plat from "@/public/plat.jpg";
import logo from "@/public/logo.jpeg";


export default function Home() {
  return (
    <>
      <Header />

      {/* ---------------- HERO ---------------- */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Mirpurkhas, Sindh · Since 2017</p>
            <h1 className="h1">
              Goats and buffalo,
              <br />
              <em>raised properly.</em>
            </h1>
            <p className="pact-quote">
              {"“I made a pact with myself: I would not quit until I had rebuilt this business from scratch at least 10 times.”"}
              <span>Chapter 3 · 2020</span>
            </p>
          </div>

          <div className="ribbon">
            <Image
              src={ribbon}
              alt="Illustration of the farm — pens, goats, buffalo in the water channel and a canal cutting through the fields — held inside a single green brushstroke"
              sizes="(max-width: 1080px) 90vw, 46vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* ---------------- 01 SEVEN CHAPTERS ---------------- */}
      <Timeline />

      {/* ---------------- QUOTE BAND ---------------- */}
      <section className="band">
        <div className="wrap">
          <div className="band-in">
            <p className="band-q">
              {"“I wasn't here for the quick buck. I was here to fix the supply chain.”"}
            </p>
            <p className="band-a">Chapter 4 · 2021</p>
          </div>
        </div>
      </section>

      {/* ---------------- 02 THE CORRIDOR ---------------- */}
      <section className="mission" id="mission">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">02</span>
            <h2 className="sec-title">Why the corridor</h2>
          </div>
          <p className="mission-lede">
            An animal raised in Mirpurkhas is worth roughly double 250
            kilometres away in Karachi. We carry it that distance ourselves, so
            the value stays with the people who raised it.
          </p>
        </div>

        <div className="plat">
          <Image
            src={plat}
            alt="Survey-style drawing of the 250 kilometre route between Mirpurkhas and Karachi, with dense tree cover at the Mirpurkhas end thinning to empty ground at the Karachi end"
            sizes="100vw"
          />
          <div className="pin pin-a">
            <p className="place">Karachi</p>
            <p className="role">Where it is paid for</p>
          </div>
          <div className="pin pin-b">
            <p className="place">Mirpurkhas</p>
            <p className="role">Where it is raised</p>
          </div>
          <p className="pin-km">250 km</p>
        </div>

        <div className="wrap">
          {/* Shown instead of the map pins below 820px, where they would collide. */}
          <div className="corridor">
            <div>
              <p className="place">Mirpurkhas</p>
              <p className="role">Where it is raised</p>
            </div>
            <p className="km">↓ 250 km</p>
            <div>
              <p className="place">Karachi</p>
              <p className="role">Where it is paid for</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="foot">
        <div className="wrap foot-in">
          <div className="foot-brand">
            <span className="foot-logo">
              <Image src={logo} alt="Narejo Farms logo" width={52} height={52} />
            </span>
            <span>
              <span className="foot-name">Narejo Farms</span>
              <span className="foot-where">Mirpurkhas · Karachi</span>
            </span>
          </div>
          <div className="foot-r">
            <p className="foot-mail">Contact details to follow</p>
            <p style={{ marginTop: 8, opacity: 0.5 }}>
              Est. 2017 · Sindh, Pakistan
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
