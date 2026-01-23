"use client";

import { useLayoutEffect, useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView, type Variants } from "framer-motion";

import SectionTitle from "@/app/_components/SectionTitle";
import ScrambledText from "@/components/ScrambledText/ScrambledText";
import VariableProximity from "@/components/VariableProximity/VariableProximity";
import BlurText from "@/components/BlurText/BlurText";
import styles from "./LookingForSection.module.css";

gsap.registerPlugin(ScrollTrigger);

type OrbitTone = "violet" | "amber" | "mint";

type OrbitItem = {
  title: string;
  value: string;
  meta: string;
  tone: OrbitTone;
  x: string;
  y: string;
  rotate: string;
};

const ORBIT_ITEMS: OrbitItem[] = [
  {
    title: "Mission",
    value: "Freelance",
    meta: "mandat externe",
    tone: "violet",
    x: "22%",
    y: "26%",
    rotate: "-6deg",
  },
  {
    title: "Format",
    value: "Missions courtes",
    meta: "sprints serrés préférés",
    tone: "amber",
    x: "30%",
    y: "78%",
    rotate: "6deg",
  },
  {
    title: "Mode",
    value: "Remote préféré",
    meta: "distanciel d'abord",
    tone: "mint",
    x: "78%",
    y: "28%",
    rotate: "4deg",
  },
  {
    title: "Dispo",
    value: "Disponible",
    meta: "maintenant",
    tone: "violet",
    x: "72%",
    y: "78%",
    rotate: "-4deg",
  },
];

export default function LookingForSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const sweepRef = useRef<HTMLDivElement | null>(null);
  const coreRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, {
    amount: 0.35,
    margin: "0px 0px -20% 0px",
    once: true,
  });

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const orbitItems = gsap.utils.toArray<HTMLElement>(
        `.${styles.orbitItem}`,
      );

      if (prefersReducedMotion) {
        gsap.set(orbitItems, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        });
        return;
      }

      gsap.set(orbitItems, {
        opacity: 0,
        y: 40,
        scale: 0.92,
        filter: "blur(10px)",
      });

      gsap.to(orbitItems, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      if (sweepRef.current) {
        gsap.to(sweepRef.current, {
          rotate: 360,
          duration: 12,
          ease: "none",
          repeat: -1,
        });
      }

      if (coreRef.current) {
        gsap.to(coreRef.current, {
          y: -10,
          duration: 2.6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contentVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 26,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section ref={sectionRef} className={styles.mainContainer}>
      <SectionTitle>Ce que je recherche</SectionTitle>
      <div className={styles.stage}>
        <motion.div
          ref={copyRef}
          className={styles.copy}
          variants={contentVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className={styles.kicker} variants={itemVariants}>
            <ScrambledText
              className={styles.kickerText}
              style={{ margin: 0, maxWidth: "none" }}
              highlightWords={["Freelance", "courtes", "Remote"]}
              highlightClassName={styles.highlight}
            >
              Freelance / missions courtes / remote préféré
            </ScrambledText>
          </motion.div>

          <motion.div variants={itemVariants}>
            <VariableProximity
              label="Je cherche une mission freelance courte qui va droit au but."
              className={styles.headline}
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 1000"
              highlightWords={["freelance", "courte"]}
              highlightClassName={styles.highlight}
              /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
              // @ts-expect-error
              containerRef={copyRef}
              radius={150}
              falloff="gaussian"
            />
          </motion.div>

          <motion.div className={styles.availability} variants={itemVariants}>
            <span className={styles.availabilityDot} aria-hidden="true" />
            Disponible maintenant
          </motion.div>

          <motion.p className={styles.subline} variants={itemVariants}>
            TJM 600€ / jour. Je préfère les missions courtes, mais je reste disponible pour les marathons.
          </motion.p>
        </motion.div>

        <div className={styles.boardWrap}>
          <div className={styles.board}>
            <div className={styles.radarBase} aria-hidden="true" />
            <div className={styles.radarGrid} aria-hidden="true" />
            <div className={styles.radarRings} aria-hidden="true" />
            <div ref={sweepRef} className={styles.radarSweep} aria-hidden="true" />
            <div ref={coreRef} className={styles.core}>
              <span className={styles.coreLabel}>TJM</span>
              <BlurText
                text="600€"
                className={styles.coreValue}
                animateBy="letters"
                delay={35}
                direction="top"
              />
              <span className={styles.coreUnit}>/ jour</span>
            </div>
          </div>

          <div className={styles.orbit}>
            {ORBIT_ITEMS.map((item) => {
              const toneClass =
                item.tone === "amber"
                  ? styles.orbitItemAmber
                  : item.tone === "mint"
                    ? styles.orbitItemMint
                    : styles.orbitItemViolet;

              return (
                <div
                  key={item.value}
                  className={`${styles.orbitItem} ${toneClass}`}
                  style={
                    {
                      "--x": item.x,
                      "--y": item.y,
                      "--rotate": item.rotate,
                    } as CSSProperties
                  }
                >
                  <span className={styles.orbitLabel}>{item.title}</span>
                  <span className={styles.orbitValue}>{item.value}</span>
                  <span className={styles.orbitMeta}>{item.meta}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
