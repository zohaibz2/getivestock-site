"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.jpeg";

const navLinks = [
  { label: "Our Story", href: "/our-story" },
  { label: "Our Ecosystem", href: "#" },
  { label: "Impact", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link className="brand" href="/">
        <Image src={logo} alt="Getlivestock logo" width={88} height={88} priority />
      </Link>

      <nav className="nav">
        {navLinks.map(({ label, href }) => {
          const isActive = href !== "#" && pathname === href;
          return (
            <Link
              key={label}
              href={href}
              className={isActive ? "active" : undefined}
              aria-current={isActive ? "page" : undefined}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <a className="btn btn-pill header-cta" href="#">
        Explore Our Ecosystem
        <span className="arrow" aria-hidden="true">
          &rarr;
        </span>
      </a>
    </header>
  );
}
