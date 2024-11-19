import React from "react";
import styler from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className={styler.navbar_head}>
      <div className={styler.navbar}>
        <ul class="nav_list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
