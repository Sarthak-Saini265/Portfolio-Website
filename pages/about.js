import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styler from "../styles/About.module.css";

const About = () => {
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [extras, setExtras] = useState([]);
  //   const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    fetch("/api/aboutEducation")
      .then((a) => {
        return a.json();
      })
      .then((res) => {
        setEducation(res);
      });
  }, []);

  useEffect(() => {
    fetch("/api/aboutSkills")
      .then((a) => {
        return a.json();
      })
      .then((res) => {
        setSkills(res);
      });
  }, []);

  useEffect(() => {
    fetch("/api/aboutExtra")
      .then((a) => {
        return a.json();
      })
      .then((res) => {
        setExtras(res);
      });
  }, []);
  

  //   useEffect(() => {
  //     fetch("/api/aboutHobbies")
  //       .then((a) => {
  //         return a.json();
  //       })
  //       .then((res) => {
  //         setHobbies(res);
  //       });
  //   }, []);

  return (
    <>
      <div className={styler.wrapper}>
        <section className={`${styler.education_sect} ${styler.sect_general}`}>
          <div className={styler.section_head}>
            <h1>Education</h1>
          </div>
          <div className={styler.ed_divs}>
            {education.map((edu, ind) => {
              return (
                <div
                  className={`${styler.ed_div} ${
                    edu.extra ? styler.ed_long_div : ""
                  }`}
                >
                  <div className={styler.logo_w_txt}>
                    <div className={styler.logo_div}>
                      <Image width={500} height={500} src={edu.img} />
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
              );
            })}
          </div>
        </section>
        <section className={`${styler.skill_sect} ${styler.sect_general}`}>
          <div className={styler.section_head}>
            <h1>Skills</h1>
          </div>
          <div className={styler.skill_divs}>
            {skills.map((skill, ind) => {
              return (
                <div className={styler.skill_div}>
                  <div
                    style={skill.color ? { backgroundColor: skill.color } : {}}
                    className={styler.skill_head}
                  >
                    {skill.category}
                  </div>
                  <ul>
                    {skill.skills.map((skill_inner, ind) => {
                      return (
                        <li>
                          <div
                            style={
                              skill.color
                                ? { backgroundColor: skill.color }
                                : {}
                            }
                            class={styler.ico_div}
                          >
                            <Image
                              src={skill_inner.img}
                              width={500}
                              height={500}
                              style={
                                skill_inner.name == "Vue JS"
                                  ? {
                                      width: "100%",
                                      height: "auto",
                                      filter: "grayscale(100%) brightness(3)",
                                    }
                                  : {}
                              }
                            />
                          </div>
                          <p>{skill_inner.name}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
        <section className={`${styler.hobbies_sect} ${styler.sect_general}`}>
          <div className={styler.section_head}>
            <h1>Additional Information</h1>
          </div>
          <div className={styler.extra_divs}>
            {extras.map((extra, ind) => {
              return (
                <div className={`${styler.extra_div} ${styler.skill_div}`}>
                  <div
                    style={extra.color ? { backgroundColor: extra.color } : {}}
                    className={styler.skill_head}
                  >
                    {extra.category}
                  </div>
                  <ul>
                    {extra.items.map((extra_inner, ind) => {
                      return (
                        <li title={extra_inner.title}>
                          <div className={styler.ico_div} style={extra.color ? { backgroundColor: extra.color } : {}}>
                            <Image
                              src={extra_inner.img}
                              width={500}
                              height={500}/>
                          </div>
                          <p>{extra_inner.name}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

{
  /* <div className={styler.hobbies_divs}>
  {hobbies.map((hobby, ind) => {
    return (
      <div
        style={ind % 2 != 0 ? { flexDirection: "row-reverse" } : {}}
        className={styler.hobby_div}
      >
        <div>
          <Image src={hobby.img} width={500} height={500} />
        </div>
        <div
          style={
            ind % 2 == 0 ? { marginLeft: "5rem" } : { marginRight: "5rem" }
          }
          className={styler.name_w_text}
        >
          <h1>{hobby.name}</h1>
          <p>{hobby.text}</p>
        </div>
      </div>
    );
  })}
</div>; */
}

export default About;
