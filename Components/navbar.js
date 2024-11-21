import React from "react";
import styler from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className={styler.navbar_head}>
      <div className={styler.logo_div} onClick={() => {window.location.href = "/"}}>
        <Image src="/logo_no_bg.png" alt="" width={500} height={500}/>
      </div>
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
