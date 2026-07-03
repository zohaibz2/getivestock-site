import Image from "next/image";
import logo from "@/public/logo.jpeg";
import hero from "@/public/hero.jpeg";

const navLinks = ["Our Story", "Our Ecosystem", "Impact", "Contact"];

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <a className="brand" href="#">
          <Image src={logo} alt="Maveshi Farms logo" width={88} height={88} priority />
        </a>

        <nav className="nav">
          {navLinks.map((label) => (
            <a key={label} href="#">
              {label}
            </a>
          ))}
        </nav>

        <a className="btn btn-pill header-cta" href="#">
          Explore Our Ecosystem
          <span className="arrow" aria-hidden="true">
            &rarr;
          </span>
        </a>
      </header>

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
    </div>
  );
}
