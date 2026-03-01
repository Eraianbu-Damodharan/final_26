import React, { useEffect, useRef } from "react";
import "./Sponsors.css";

import simpligo from "../assets/sponsors/simpligo.png";
import darkhorse from "../assets/sponsors/darkhorse.png";
import core from "../assets/sponsors/core.png";

const Sponsors = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sponsors-section" id="sponsors">
      <div className="sponsors-container">
        <h2 className="sponsors-title">
          POWERING <span>CELISTA 2K26</span>
        </h2>

        <div className="sponsors-grid">
          
          {/* Sponsor 1 */}
          <div
            className="sponsor-card"
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={simpligo} alt="SimpliGO" />
              </div>
              <div className="card-back">
                <h4>SimpliGO</h4>
                <p>
                  Smart mobility solutions<br />
                  Powering digital transport innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Sponsor 2 */}
          <div
            className="sponsor-card"
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={darkhorse} alt="Dark Horse Works" />
              </div>
              <div className="card-back">
                <h4>Dark Horse Works</h4>
                <p>
                  Creative tech innovators<br />
                  Driving digital transformation.
                </p>
              </div>
            </div>
          </div>

          {/* Sponsor 3 */}
          <div
            className="sponsor-card"
            ref={(el) => (cardsRef.current[2] = el)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={core} alt="Core" />
              </div>
              <div className="card-back">
                <h4>Core</h4>
                <p>
                  Engineering excellence<br />
                  Empowering future technologies.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sponsors;