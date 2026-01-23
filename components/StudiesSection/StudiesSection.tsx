"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionTitle from "@/app/_components/SectionTitle";
import styles from "./StudiesSection.module.css";

gsap.registerPlugin(ScrollTrigger);

type StudyTone = "violet" | "amber" | "mint";

type StudyItem = {
  title: string;
  label: string;
  tone: StudyTone;
};

const STUDIES: StudyItem[] = [
  {
    title: "BTS Systèmes Numériques Informatique et Réseaux",
    label: "Diplome",
    tone: "violet",
  },
  {
    title: "Bachelor Concepteur Développeur d'Applications",
    label: "Diplome",
    tone: "amber",
  },
  {
    title: "Master Expert Developpeur Web",
    label: "Diplome",
    tone: "mint",
  },
];

type TimelineItemProps = {
  item: StudyItem;
  index: number;
};

function TimelineItem({ item, index }: TimelineItemProps) {
  const indexLabel = String(index + 1).padStart(2, "0");
  const toneClass =
    item.tone === "amber"
      ? styles.timelineItemAmber
      : item.tone === "mint"
        ? styles.timelineItemMint
        : styles.timelineItemViolet;

  return (
    <li className={`${styles.timelineItem} ${toneClass}`}>
      <span className={styles.timelineMarker} aria-hidden="true">
        <span className={styles.timelineDot} />
        <span className={styles.timelinePulse} />
      </span>
      <div className={styles.timelineCard}>
        <span className={styles.timelineIndex}>{indexLabel}</span>
        <div className={styles.timelineMetaRow}>
          <span className={styles.timelineStep}>{`Etape ${indexLabel}`}</span>
          <span className={styles.timelineType}>{item.label}</span>
        </div>
        <h3 className={styles.timelineTitle}>{item.title}</h3>
      </div>
    </li>
  );
}

type StudiesTimelineProps = {
  items: StudyItem[];
};

function StudiesTimeline({ items }: StudiesTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const ticksRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const lineTargets = [progressRef.current, glowRef.current, ticksRef.current].filter(
        Boolean,
      );

      if (prefersReducedMotion) {
        gsap.set(lineTargets, { scaleY: 1, transformOrigin: "top center" });
        gsap.set(`.${styles.timelineCard}`, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        });
        gsap.set(`.${styles.timelineMarker}`, { opacity: 1, scale: 1 });
        return;
      }

      gsap.set(lineTargets, { scaleY: 0, transformOrigin: "top center" });

      gsap.to(lineTargets, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top top+=10%",
          end: "bottom bottom-=10%",
          scrub: 0.6,
        },
      });

      const items = gsap.utils.toArray<HTMLElement>(
        `.${styles.timelineItem}`,
        timelineRef.current,
      );

      items.forEach((item) => {
        const card = item.querySelector<HTMLElement>(`.${styles.timelineCard}`);
        const marker = item.querySelector<HTMLElement>(`.${styles.timelineMarker}`);
        const indexBadge = item.querySelector<HTMLElement>(`.${styles.timelineIndex}`);

        if (!card || !marker) return;

        gsap.set([card, marker], {
          opacity: 0,
          y: 36,
          filter: "blur(10px)",
        });

        if (indexBadge) {
          gsap.set(indexBadge, { opacity: 0, scale: 0.9 });
        }

        gsap.to([card, marker], {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
          },
        });

        if (indexBadge) {
          gsap.to(indexBadge, {
            opacity: 0.16,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
            },
          });
        }

        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 40%",
          toggleClass: { targets: item, className: styles.timelineItemActive },
        });
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={timelineRef} className={styles.timeline}>
      <div className={styles.timelineRail} aria-hidden="true">
        <span className={styles.timelineTrack} />
        <span ref={ticksRef} className={styles.timelineTicks} />
        <span ref={progressRef} className={styles.timelineProgress} />
        <span ref={glowRef} className={styles.timelineGlow} />
      </div>
      <ol className={styles.timelineItems}>
        {items.map((item, index) => (
          <TimelineItem key={item.title} item={item} index={index} />
        ))}
      </ol>
    </div>
  );
}

export default function StudiesSection() {
  return (
    <section className={styles.mainContainer}>
      <SectionTitle>Etudes & certifications</SectionTitle>
      <p className={styles.lead}>
        Un parcours qui monte en puissance, avec des etapes qui se revelent au
        fil du scroll.
      </p>
      <StudiesTimeline items={STUDIES} />
    </section>
  );
}
