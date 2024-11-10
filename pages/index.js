import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/Components/navbar'
import Image from 'next/image'
import styler from '../styles/Home.module.css'




export default function Home() {
  return (
    <>
      <div className={styler.home}>
        <section className={styler.image_sect}>
          <div className={styler.text_div}>
            <h1>— HELLO</h1>
            <div className={styler.name_colored}>
              <h1>I'm</h1>
              <h1 className={styler.colored}>Sarthak</h1>
              <h1>Saini</h1>
            </div>
            <p>
              Greetings! I'm a student passionate about Data Science and Web
              Development, currently pursuing a BS in Data Science at IIT Madras and
              B.Sc. in Computer Science (Hons.) at Delhi University.
            </p>  
          </div>
          <div className={styler.image_div}>
            <div className={styler.prof_img_div}>
              <Image src="/Home/profile.png" width={500} height={500} alt="Profile Image" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}






