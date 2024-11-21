import React from "react";
import styler from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styler.wrapper}>
        <footer>
          <div className={styler.logo_div}>
            <Image src="/logo_circle.png" alt="" width={500} height={500}/>
          </div>
            <h3>Copyright &copy; 2025 TheSarthakSaini.com</h3>
        </footer>
    </div>
  );
};

export default Footer;
