import Link from "next/link";

const navLinks = [
  { label: "Seven chapters", href: "#chapters" },
  { label: "The corridor", href: "#mission" },
];

export default function Header() {
  return (
    <header className="top">
      <div className="wrap top-in">
        <Link className="mark" href="#top">
          <span className="mark-sq">NF</span>
          <span>
            <span className="mark-txt">Narejo Farms</span>
            <span className="mark-sub">Mirpurkhas, Sindh</span>
          </span>
        </Link>

        <nav>
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className="top-cta" href="#talk">
          Work with us
        </a>
      </div>
    </header>
  );
}
