import React, { useRef } from "react";
import "./showwork.scss";
import Data from "./showworkData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { gsap } from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger";
function ShowWork() {
  const workRef = useRef(null);

  // useEffect(() => {
  //   const works = document.querySelectorAll(".showwork__work");
  //   ScrollTrigger.matchMedia({
  //     all: function () {
  //       gsap.to(works, {
  //         scale: 1,
  //         duration: 0.5,
  //         ease: "ease",
  //         stagger: 0.3,
  //         scrollTrigger: {
  //           trigger: workRef.current,
  //           start: "10% center",
  //           end: "50% center",
  //           // markers: true,
  //           toggleActions: "play none none reset",
  //         },
  //       });
  //     },
  //     "(max-width:800px)": function () {
  //       gsap.to(works, {
  //         scale: 1,
  //         duration: 0.5,
  //         ease: "ease",
  //         stagger: 1,
  //         scrollTrigger: {
  //           trigger: workRef.current,
  //           start: "top center",
  //           end: "50% center",
  //           // markers: true,
  //           toggleActions: "play none none none",
  //         },
  //       });
  //     },
  //   });
  // }, []);
  const variants = {
    initial: {
      opacity: 0.9,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.4,
        ease: "backOut",
      },
    },
  };
  const childVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };
  return (
    <div ref={workRef} className="showworks__container">
      <h1>OUR WORKS</h1>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="showwork"
      >
        {Data.map((item, index) => {
          return (
            <motion.div
              variants={childVariants}
              key={`data-showwork-${index}`}
              className="showwork__work"
            >
              <img src={item.imgUrl} alt="work img" />
              <span>{item.title}</span>
              <p>{item.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
      <Link to="/projects">Learn More</Link>
    </div>
  );
}

export default ShowWork;
