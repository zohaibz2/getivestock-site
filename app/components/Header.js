import Link from "next/link";

const navLinks = [
  { label: "Seven chapters", href: "#chapters" },
  { label: "The corridor", href: "#mission" },
  { label: "Case studies", href: "#cases" },
];

export default function Header() {
  return (
    <div className="top-shell">
      <header className="top">
        <div className="top-in">
          <Link className="mark" href="#top" aria-label="Narejo Farms — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-logo" src="/logo.svg" alt="Narejo Farms" />
          </Link>

          <nav>
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <a className="top-cta" href="#mission">
            Work with us
          </a>
        </div>
      </header>
    </div>
  );
}
