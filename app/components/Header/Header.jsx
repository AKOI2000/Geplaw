"use client";

import { useState } from "react";
import "./Header.scss";
import Image from "next/image";
import Link from "next/link";

const LEFT = [
  { label: "About", href: "#about" },
  { label: "Practitioners", href: "#practitioners" },
  { label: "Victories", href: "#victories" },
];
const RIGHT = [
  { label: "Team", href: "#team" },
  { label: "Media", href: "#media" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

function LinkList({ links }) {
  return (
    <ul className="site-header__list">
      {links.map(({ label, href }) => (
        <li key={href}>
          <a className="site-header__link" href={href}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Header({
  logo = "GEPLAW",
  logoLabel = "Home",
  left = LEFT,
  right = RIGHT,
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`site-header${open ? " site-header--open" : ""}`}
      aria-label="Main"
    >
      <div className="site-header__notch">
        <Link className="site-header__logo" href="/" aria-label={logoLabel}>
          {logo}
        </Link>
      </div>

      <LinkList links={left} />

      <button
        type="button"
        className={`site-header__menu-btn${open ? " site-header__menu-btn--open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <LinkList links={right} />
    </nav>
  );
}
