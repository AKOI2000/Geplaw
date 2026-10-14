"use client";

import { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import "./Intro.scss";

function Intro() {
  const [active, setActive] = useState(0);
  const [mobileActive, setMobileActive] = useState(0);

  return (
    <section id="section-intro">
      {/* Desktop layout */}
      <div className="intro-container intro-desktop">
        {introCards.map((card, i) => (
          <motion.div
            key={card.id}
            className={`intro-block ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            initial={false}
            animate={{ flexGrow: i === active ? 2 : 1 }}
            transition={{ duration: 0.6, ease: easeInOut }}
          >
            <motion.div
              className="intro-content"
              animate={{
                width: i === active ? "50%" : "100%",
              }}
              transition={{ duration: 0.6, ease: easeInOut }}
            >
              <motion.h5 animate={{ opacity: i === active ? 1 : 0 }}>
                {card.title}
              </motion.h5>

              <p>{card.paragraph}</p>
            </motion.div>

            <AnimatePresence initial={false}>
              {i === active && (
                <motion.div
                  className="img-box"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{
                    opacity: 1,
                    width: "50%",
                    transition: { delay: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    width: 0,
                    transition: {
                      duration: 0.05,
                      ease: easeInOut,
                    },
                  }}
                >
                  {card.imgUrl && <img src={card.imgUrl} alt={card.imgAlt} />}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="intro-mobile">
        {introCards.map((card, i) => {
          const isActive = i === mobileActive;

          return (
            <motion.div
              key={card.id}
              className={`intro-mobile-card ${isActive ? "active" : ""}`}
              layout
              transition={{
                layout: {
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            >
              <button
                type="button"
                className="intro-mobile-trigger"
                aria-expanded={isActive}
                aria-controls={`intro-mobile-content-${card.id}`}
                onClick={() => setMobileActive(isActive ? -1 : i)}
              >
                <h5>{card.title}</h5>

                <motion.span
                  className="intro-mobile-icon"
                  aria-hidden="true"
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isActive ? "−" : "+"}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    id={`intro-mobile-content-${card.id}`}
                    className="intro-mobile-content"
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: {
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      opacity: {
                        duration: 0.25,
                      },
                    }}
                  >
                    <motion.div
                      className="intro-mobile-inner"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 6, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.05,
                      }}
                    >
                      <p>{card.paragraph}</p>

                      {card.imgUrl && (
                        <div className="intro-mobile-image">
                          <img src={card.imgUrl} alt={card.imgAlt} />
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Intro;

const introCards = [
  {
    id: 1,
    title: "Four decades of perspective",
    paragraph:
      "Established in 1984, we bring decades of legal experience to the commercial matters entrusted to us.",
    imgUrl: "/georgeEtomi.jpg",
    imgAlt: "",
  },
  {
    id: 2,
    title: "Expertise across industries",
    paragraph:
      "Our practice spans diverse sectors of the Nigerian economy, from energy and financial services to infrastructure and emerging technology.",
      imgUrl: "/georgeEtomi.jpg",
    imgAlt: "",
  },
  {
    id: 3,
    title: "A commercial approach",
    paragraph:
      "We consider the legal requirements and wider business objectives behind the decisions our clients face.",
      imgUrl: "/georgeEtomi.jpg",
    imgAlt: "",
  },
];
