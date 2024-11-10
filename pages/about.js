import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import styler from "../styles/About.module.css";

const About = () => {

    const [education, setEducation] = useState([])

    useEffect(() => {
        fetch("/api/aboutEducation").then((a) => {
          return a.json()
        }).then((res) => {
          setEducation(res)
        })
      }, [])

  return (
    <>
        <div className={styler.wrapper}>
            <section className={`${styler.education_sect} ${styler.sect_general}`}>
                <div className={styler.section_head}>
                    <h1>Education</h1>
                </div>
                <div className={styler.ed_divs}>
                    {
                        education.map((edu, ind) => {
                            return <div className={`${styler.ed_div} ${edu.extra ? styler.ed_long_div : ''}`}>
                                <div className={styler.logo_w_txt}>
                                    <div className={styler.logo_div}>
                                        <Image width={500} height={500} src={edu.img}/>
                                    </div>
                                        <h3>{edu.name}</h3>
                                        {edu.extra ? <h3>{edu.extra}</h3> : null}
                                        <h4>{edu.duration}</h4>
                                </div>
                                <div className={styler.info_div}>
                                    <h3>{edu.program}</h3>
                                    <p>{edu.description}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>
        </div>
    </>
  );
};

export default About;
