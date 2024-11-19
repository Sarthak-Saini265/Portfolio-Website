import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styler from "../styles/Contact.module.css";


const Contact = () => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("/api/contactMain")
          .then((a) => {
            return a.json();
          })
          .then((res) => {
            setContacts(res);
          });
      }, []);

    return (
        <>
            <div className={styler.wrapper}>
                <div className={styler.heading}>
                    <h1>Contact</h1>
                    <p>Thanks for visiting! Whether you have a project idea, a question, or just want to connect, I'd love to hear from you. You can reach me directly via email or phone, and I'm also active on the social platforms linked below. Let's connect and start a conversation!</p>
                </div>
                <div className={styler.main_contacts}>
                    {contacts.map((contact, ind) => {
                        return (
                            <div className={styler.contacts_div} key={ind}>
                                <div className={styler.icon_holder}>
                                    <Image width={500} height={500} src={contact.img} alt="" className={styler.gen_ico} />
                                </div>
                                <h3 className={styler.contacts_text}>{contact.name}.</h3>
                                <Link href={contact.href} className={styler.contacts_details_text}>{contact.text}</Link>
                            </div>
                        );
                    })}
                </div>
                <div className={styler.socials_div}>
                    <h3>Socials: </h3>
                    <div className={styler.social} onClick={() => window.open("https://www.linkedin.com/in/sarthak-saini-54945a252")}>
                        <Image width={500} height={500} alt="" src="/Contact/Socials/linkedin.png" />
                    </div>
                    <div className={styler.social} onClick={() => window.open("https://github.com/Sarthak-Saini265")}>
                        <Image width={500} height={500} alt="" src="/Contact/Socials/github.png" />
                    </div>
                    {/* <div className={styler.social}>
                        <Image width={500} height={500} src="/Contact/Socials/facebook.png" />
                    </div>
                    <div className={styler.social}>
                        <Image width={500} height={500} src="/Contact/Socials/facebook.png" />
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Contact;