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
          images={[
            {
              src: "/projects/diag2-preview.png",
              title: "Diag 2,0",
              description: "Logiciel de gestion d'états des lieux.",
              stack: ["Next.js", "TypeScript", "Node.JS", "Material UI", "Redux", "Chart JS"],
              meta: ["2024", "B2B SaaS"],
            },
            {
              src: "/projects/ergo-preview.webp",
              title: "Cabinet Sandrine Rombault",
              description: "[WIP] Vitrine cabinet d'ergothérapie.",
              stack: ["Next.js", "Framer Motion", "Laravel"],
              meta: ["2026", "Vitrine"],
            },
            {
              src: "/projects/gritty-gears-preview.png",
              title: "Gritty Gears",
              description: "E-Commerce, accessoires moto et pièces détachées.",
              stack: ["Next.js", "Node.JS", "Laravel", "MedusaJS"],
              meta: ["2023", "E-Commerce"],
            },
            {
              src: "/projects/gritty-preview-2.webp",
              title: "Gritty Gears",
              description: "E-Commerce, accessoires moto et pièces détachées.",
              stack: ["Next.js", "Node.JS", "Laravel", "MedusaJS"],
              meta: ["2023", "E-Commerce"],
            },
            {
              src: "/projects/maia-preview.png",
              title: "Maïa",
              description: "Plateforme de gestion client pour bureaux d'études.",
              stack: ["Next.js", "Directus", "Ant Design"],
              meta: ["2022", "SaaS B2C"],
            },
            {
              src: "/projects/nordkom-preview.webp",
              title: "NordKom",
              description: "Site vitrine de cabinet de prestation informatique.",
              stack: ["Next.js", "Framer Motion", "WebPack"],
              meta: ["2023", "Vitrine"],
            },
            {
              src: "/projects/perf-analytics-preview.webp",
              title: "Perf Analytics",
              description: "Application de mesure de performances sportives.",
              stack: ["React Native", "Next.JS", "PWA", "Laravel"],
              meta: ["2024", "Mobile"],
            },
            {
              src: "/projects/projex-crm-preview.png",
              title: "Projex CRM",
              description: "Newsletter hebdomadaire en mini CRM interne.",
              stack: ["Next.JS", "PWA", "GSAP", "ChartJS", "Firebase", "Stapi", "Tailwinds", "React Query"],
              meta: ["2025", "Web App"],
            },
            {
              src: "/projects/soxup-preview.png",
              title: "Soxup",
              description: "E-Commerce pour marque de chaussettes au design décalé.",
              stack: ["Next.JS", "TypeScript", "WooCommerce", "MedusaJS", "Stripe"],
              meta: ["2021", "E-Commerce"],
            },
          ]}

        />
      </div>
    </div>
  );
}
