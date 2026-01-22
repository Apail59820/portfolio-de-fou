"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import SectionTitle from "@/app/_components/SectionTitle";
import Folder from "@/components/Folder/Folder";
import styles from "./TechnicalSection.module.css";

export default function TechnicalSection() {
  const foldersRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<HTMLDivElement>(null);
  const softwareSplitRef = useRef<HTMLDivElement>(null);
  const devopsSplitRef = useRef<HTMLDivElement>(null);
  const foldersInView = useInView(foldersRef, {
    amount: 0.35,
    margin: "0px 0px -20% 0px",
    once: true,
  });
  const splitInView = useInView(splitRef, {
    amount: 0.35,
    margin: "0px 0px -20% 0px",
    once: true,
  });
  const softwareSplitInView = useInView(softwareSplitRef, {
    amount: 0.35,
    margin: "0px 0px -20% 0px",
    once: true,
  });
  const devopsSplitInView = useInView(devopsSplitRef, {
    amount: 0.35,
    margin: "0px 0px -20% 0px",
    once: true,
  });

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 90,
      scale: 0.85,
      rotateZ: -6,
      filter: "blur(12px)",
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateZ: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.95,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.2,
      },
    }),
  };

  const splitContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const splitItemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.96,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.1,
      },
    },
  };

  const contentItemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: "blur(8px)",
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

  const pillsContainerVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const pillVariants = {
    hidden: {
      opacity: 0,
      y: 18,
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stackItems = [
    "Next.js",
    "React",
    "Laravel",
    "Directus",
    "Node.js",
    "TypeScript",
    "Prisma",
    "Tailwind CSS",
    "MUI / AntD / Chakra / shadcn",
  ];
  const softwareStackItems = [
    "C/C++/C#",
    "Qt / SFML / SDL",
    "OpenGL",
    "Networking",
    "CMake",
    "GDL / LLDB",
    "OOP",
    "MultiThreading",
  ];
  const devopsStackItems = [
    "IaC (Terraform)",
    "GCP",
    "AWS",
    "Cloud Build",
    "Docker",
    "Kubernetes",
    "CI/CD (GitHub Actions, GitLab CI)",
  ];

  return (
    <div className={styles.mainContainer}>
      <SectionTitle>Ce que je maîtrise</SectionTitle>
      <div ref={foldersRef} className={styles.foldersRow}>
        <motion.div
          className={`${styles.folderItem} ${styles.folderLeft}`}
          variants={itemVariants}
          initial="hidden"
          animate={foldersInView ? "visible" : "hidden"}
          custom={0}
        >
          <div className={styles.folderFloat}>
            <Folder
              size={3}
              color="#9B7BFF"
              label="core.frontend"
              cards={[
                {
                  title: "JavaScript (ES6+)",
                  icon: <img src={'/icons/js.svg'}/>
                },
                {
                  title: "TypeScript",
                  icon: <img src={'/icons/typescript.png'}/>
                },
                {
                  title: "React",
                  icon: <img src={'/icons/react.svg'}/>
                },
              ]}
            />
          </div>
        </motion.div>
        <motion.div
          className={`${styles.folderItem} ${styles.folderCenter}`}
          variants={itemVariants}
          initial="hidden"
          animate={foldersInView ? "visible" : "hidden"}
          custom={1}
        >
          <div className={styles.folderFloat}>
            <Folder
              size={3}
              color="#FFB36B"
              label="web.next"
              cards={[
                {
                  title: "Next.js",
                  icon: <img src={'/icons/nextjs.webp'}/>
                },
                {
                  title: "API REST / GraphQL",
                  icon: <img src={'/icons/api.png'}/>
                },
                {
                  title: "Auth & securite basics",
                  icon: <img src={'/icons/auth.png'}/>
                },
              ]}
            />
          </div>
        </motion.div>
        <motion.div
          className={`${styles.folderItem} ${styles.folderRight}`}
          variants={itemVariants}
          initial="hidden"
          animate={foldersInView ? "visible" : "hidden"}
          custom={2}
        >
          <div className={styles.folderFloat}>
            <Folder
              size={3}
              color="#72E4C7"
              label="quality.ship"
              cards={[
                {
                  title: "Animations UI",
                  icon: <img src={'/icons/motion.webp'}/>
                },
                {
                  title: "Performance",
                  icon: <img src={'/icons/perfs.png'}/>
                },
                {
                  title: "Git & workflow",
                  icon: <img src={'/icons/git.png'}/>
                },
              ]}
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        ref={splitRef}
        className={styles.webSplitSection}
        variants={splitContainerVariants}
        initial="hidden"
        animate={splitInView ? "visible" : "hidden"}
      >
        <motion.div className={styles.webVisualWrap} variants={splitItemVariants}>
          <div className={styles.webVisual}>
            <div className={styles.webImageWrap}>
              <Image
                src="/webdev.jpg"
                alt="Développement web"
                fill
                className={styles.webImage}
                sizes="(max-width: 900px) 92vw, 640px"
              />
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.webContent} variants={splitItemVariants}>
          <motion.div className={styles.webContentInner} variants={contentVariants}>
            <motion.h3 className={styles.webTitle} variants={contentItemVariants}>
              Développement Web
            </motion.h3>
            <motion.p
              className={styles.webParagraph}
              variants={contentItemVariants}
            >
              De la conception à la mise en production, je construis des
              expériences web rapides, maintenables et orientées produit. J'accorde
              une attention particulière à l'UX, la performance et l'architecture
              pour livrer un produit solide.
            </motion.p>
            <motion.ul
              className={styles.webPills}
              variants={pillsContainerVariants}
            >
              {stackItems.map((item) => (
                <motion.li
                  key={item}
                  className={styles.webPill}
                  variants={pillVariants}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        ref={softwareSplitRef}
        className={`${styles.webSplitSection} ${styles.webSplitSectionReverse}`}
        variants={splitContainerVariants}
        initial="hidden"
        animate={softwareSplitInView ? "visible" : "hidden"}
      >
        <motion.div className={styles.webVisualWrap} variants={splitItemVariants}>
          <div className={styles.webVisual}>
            <div className={styles.webImageWrap}>
              <Image
                src="/software-eng.jpg"
                alt="Développement logiciel"
                fill
                className={styles.webImage}
                sizes="(max-width: 900px) 92vw, 640px"
              />
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.webContent} variants={splitItemVariants}>
          <motion.div className={styles.webContentInner} variants={contentVariants}>
            <motion.h3 className={styles.webTitle} variants={contentItemVariants}>
              Développement logiciel
            </motion.h3>
            <motion.p
              className={styles.webParagraph}
              variants={contentItemVariants}
            >
              Je conçois des applications desktop performantes, robustes et
              maintenables. J'aime l'optimisation bas niveau, la logique métier
              claire et les architectures qui tiennent dans le temps.
            </motion.p>
            <motion.ul
              className={styles.webPills}
              variants={pillsContainerVariants}
            >
              {softwareStackItems.map((item) => (
                <motion.li
                  key={item}
                  className={styles.webPill}
                  variants={pillVariants}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        ref={devopsSplitRef}
        className={styles.webSplitSection}
        variants={splitContainerVariants}
        initial="hidden"
        animate={devopsSplitInView ? "visible" : "hidden"}
      >
        <motion.div className={styles.webVisualWrap} variants={splitItemVariants}>
          <div className={styles.webVisual}>
            <div className={styles.webImageWrap}>
              <Image
                src="/devops.jpg"
                alt="Dev OPS"
                fill
                className={styles.webImage}
                sizes="(max-width: 900px) 92vw, 640px"
              />
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.webContent} variants={splitItemVariants}>
          <motion.div className={styles.webContentInner} variants={contentVariants}>
            <motion.h3 className={styles.webTitle} variants={contentItemVariants}>
              Dev OPS
            </motion.h3>
            <motion.p
              className={styles.webParagraph}
              variants={contentItemVariants}
            >
              Je mets en place des environnements fiables, reproductibles et
              scalables. Automatisation, observabilite et pipeline de livraison
              sont au coeur d'une mise en production sereine.
            </motion.p>
            <motion.ul
              className={styles.webPills}
              variants={pillsContainerVariants}
            >
              {devopsStackItems.map((item) => (
                <motion.li
                  key={item}
                  className={styles.webPill}
                  variants={pillVariants}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
