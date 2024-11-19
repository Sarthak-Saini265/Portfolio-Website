import Image from 'next/image'
import styler from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function Home() {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    fetch("/api/homeSocial")
      .then((a) => {
        return a.json();
      })
      .then((res) => {
        setSocial(res);
      });
  }, []);

  return (
    <>
      <div className={styler.wrapper}>
        <section className={styler.image_sect}>
          <div className={styler.img_w_name}>
            <div className={styler.text_div}>
              <h1>— HELLO</h1>
              <div className={styler.name_colored}>
                <h1>I&apos;m</h1>
                <h1 className={styler.colored}>Sarthak</h1>
                <h1>Saini</h1>
              </div>
              <p>
                Greetings! I&apos;m a student passionate about Data Science and Web
                Development, currently pursuing a BS in Data Science at IIT Madras and
                B.Sc. in Computer Science (Hons.) at Delhi University.
              </p>  
            </div>
            <div className={styler.image_div}>
              <div className={styler.prof_img_div}>
                <Image src="/Home/profile.png" width={500} height={500} alt="Profile Image" />
              </div>
            </div>
          </div>
          <div className={styler.scroll_w_social}>
            <div className={styler.social_links}>
              {social.map((social, ind) => {
                return (
                  <Link href={social.href} key={ind}>
                    <Image src={social.img} width={27} height={27} alt={social.name} className={styler.social_icon}/>
                  </Link>
                );
              })}
            </div>
            <div className={styler.scroll}>
              <h3>Scroll Down</h3>
              <Image src="/Home/right_arrow.svg" width={27} height={27} alt="Scroll Down"/>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}






