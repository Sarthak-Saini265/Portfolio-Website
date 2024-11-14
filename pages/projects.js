import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styler from "../styles/Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";



const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("/api/projectsMain")
          .then((a) => {
            return a.json();
          })
          .then((res) => {
            setProjects(res);
          });
      }, []);

    useEffect(() => {
      fetch("/api/projectsImages").then((a) => {
        return a.json()
      }).then((res) => {
        setImages(res)
      })
    }, [])

      const arrowTransform = (e) => {
        const arrowImg = e.currentTarget.querySelector("img")
        const swiper_div = document.querySelector(`.${styler.swiper_div}`);
        const currentRotation = arrowImg.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
        arrowImg.style.transform = currentRotation;
        swiper_div.style.display === "flex" ? swiper_div.style.display = "none" : swiper_div.style.display = "flex";
      };

    return (
        <>
            <div className={styler.wrapper}>
                <div className={styler.sect_general}>
                    <div className={styler.section_head}>
                        <h1>Projects</h1>
                    </div>
                    <div className={styler.project_divs}>
                        {projects.map((project, ind) => {
                            return (
                                <div
                                  style={ind % 2 != 0 ? { flexDirection: "row-reverse" } : {}}
                                  className={styler.project_div}
                                >
                                  <div>
                                    <Image src={project.img} width={420} height={420} />
                                  </div>
                                  <div
                                    style={
                                      ind % 2 == 0 ? { marginLeft: "5rem" } : { marginRight: "5rem" }
                                    }
                                    className={styler.name_w_text}
                                  >
                                    <h1>{project.name}</h1>
                                    <p>{project.text}</p>
                                    <div className={styler.buttons}>
                                        <Link href={project.linkedin} target="_blank">
                                            <button className={styler.button} id={styler.linkedin}>
                                                <div className={styler.social}>
                                                    <Image width={500} height={500} src="/Projects_page/linkedin_white.png" />
                                                </div>
                                                <p>View on LinkedIn</p>
                                            </button>
                                        </Link>
                                        <Link href={project.github} target="_blank">
                                        <button className={styler.button}>
                                                <div className={styler.social}>
                                                    <Image width={500} height={500} src="/Projects_page/github_white.png" />
                                                </div>
                                                <p>View on Github</p>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className={styler.images_div}>
                                        <div className={styler.arrow_div} onClick={arrowTransform}>
                                            <Image width={40} height={40} src="/Projects_page/down_arrow.svg" />
                                        </div>
                                        <div className={styler.swiper_div}>
                                          <Swiper
                                            modules={[Navigation, Pagination, Autoplay]}
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            navigation
                                            pagination={{ clickable: true }}
                                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                                            loop={true}
                                            effect="fade"
                                            className={styler.swiper}
                                          >
                                            {images.map((image, index) => {
                                              return (
                                                <SwiperSlide key={index} className={styler.swiperSlide}>
                                                  <div className={styler.slideShow}>
                                                    <Image
                                                      src={image}
                                                      className={styler.slide}
                                                      width={1920}
                                                      height={1080}
                                                    />
                                                  </div>
                                                </SwiperSlide>
                                              );
                                            })}
                                          </Swiper>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                              );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};



export default Projects;



