import React, { useEffect, useRef } from 'react'
import style from"./About.module.css"
export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const current = aboutRef.current;
    const scrollEvent = () => {
      const rect = current.getBoundingClientRect();
      const top = rect.top;
      const bottom = rect.bottom;
      const mid = top + current.clientHeight / 2;
      const midIntersecting = top <= 2 && mid <= window.screen.height && mid >= 0;
      const isElementVisible = top <= 2 && bottom >= window.screen.height;
      // console.log(top, bottom, window.screen.height,isElementVisible)
      if (midIntersecting || isElementVisible) {
        // console.log("here",midIntersecting)
        document.body.style.setProperty(
          "--current-page-color",
          current.getAttribute("data-color")
        );
      }
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      console.log("clean up") 
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [aboutRef]);


  return (
    <>
      <div
        ref={aboutRef}
        data-color="#1AF527"
        className={style["aboutcontainer"]}
      >
        <p className={style["heading1"]}>ABOUT US</p>
        <p className={style["aboutcontent"]}>
          XPECTO’23 is the second edition of IIT Mandi’s afresh Inter College
          Technical Fest organized by the Science and Technical Council (SNTC),
          IIT Mandi. 
          <br />
          <br />
          XPECTO’22 envisioned a platform where our nation’s astute
          and beaming minds could unite and dazzle in discussions and
          competitions relating to diverse science, technology, and management
          domains.
          <br /> 
          <br /> 
          After the astounding participation of 7200+ contestants from
          650+ colleges across India, it is back with another thunderous
          edition. 
          <br />
          <br />
          XPECTO’23 now flaunts a plethora of offline events, where the
          contestants will be accommodated in IIT Mandi. 
          <br />
          <br />
          XPECTO’23 aspires to be the greatest offline convention of the brightest contestants in the
          country, working their way through intense events ranging from
          hackathons, contests, and conferences, all topped with an icing of
          entertaining shows and events.
        </p>
      </div>
    </>
  );
}
