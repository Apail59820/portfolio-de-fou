"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionTitle from "@/app/_components/SectionTitle";
import styles from "./ProjectsSection.module.css";
import DomeGallery from "@/components/DomeGallery/DomeGallery";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const galleryWrapRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(galleryWrapRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.92,
        filter: "blur(12px)",
      });

      gsap.to(galleryWrapRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: galleryWrapRef.current,
          start: "top 55%",
          once: true,
        },
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className={styles.mainContainer}>
      <SectionTitle>Quelques projets</SectionTitle>

      <div
        ref={galleryWrapRef}
        className={styles.galleryWrapper}
        style={{ width: "100vw", height: "100vh", marginTop: "15vh" }}
      >
        <DomeGallery
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale
        />
      </div>
    </div>
  );
}
