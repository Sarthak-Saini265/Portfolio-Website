// import Footer from '@/Components/footer'
import Navbar from '@/Components/navbar'
import '@/styles/globals.css'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
      {/* <link rel="icon" href="/Saransh_Saini_Logo_Rounded.png" /> */}
      <title>Sarthak Saini | Full Stack Developer & Data Science Student</title>
      <meta name="description" content="Greetings! I'm a student passionate about Data Science and Web Development, currently pursuing a BS in Data Science at IIT Madras and B.Sc. in Computer Science (Hons.) at Delhi University. Welcome to my portfolio website where you can explore about me in great detail. "></meta>
    </Head>
    <Navbar />
    <Component {...pageProps} />
    {/* <Footer /> */}
  </>
};

