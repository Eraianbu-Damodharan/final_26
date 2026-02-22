import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ScrollReveal from "../components/ScrollReveal";
import collegeLogo from "../assets/college.png";
import deptLogo from "../assets/department.png";
import celistaLogo from "../assets/logo.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".about-image");

      images.forEach((img, index) => {
        gsap.fromTo(
          img,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100, // alternate direction
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-section">
      <div className="about-heading">
        <h1>ABOUT US</h1>
      </div>

      {/* COLLEGE */}
      <div className="about-row">
        <div className="about-image">
          <img src={collegeLogo} alt="College Logo" />
        </div>

        <div className="about-text">
          <ScrollReveal>
            Meenakshi Sundararajan Engineering College, founded in 2001 under
            IIET Society, is part of the esteemed KRS Group. Upholding a legacy
            of excellence, MSEC focuses on quality education, discipline and
            holistic development.
          </ScrollReveal>
        </div>
      </div>

      {/* DEPARTMENT */}
      <div className="about-row reverse">
        <div className="about-image">
          <img src={deptLogo} alt="Department Logo" />
        </div>
        
        <div className="about-text">
          <ScrollReveal>
            The Department of Artificial Intelligence & Data Science nurtures
            innovation through machine learning, deep learning and predictive
            analytics.
          </ScrollReveal>
        </div>
      </div>

      {/* CELISTA */}
      <div className="about-row">
        <div className="about-image">
          <img src={celistaLogo} alt="Celista Logo" />
        </div>

        <div className="about-text">
          <ScrollReveal>
            CELISTA is the flagship annual technical symposium conducted by
            AI & DS department blending innovation, creativity and competition.
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}