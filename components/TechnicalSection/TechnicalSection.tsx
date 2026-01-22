"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import SectionTitle from "@/app/_components/SectionTitle";
import Folder from "@/components/Folder/Folder";
import styles from "./TechnicalSection.module.css";

export default function TechnicalSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
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

  return (
    <div ref={sectionRef} className={styles.mainContainer}>
      <SectionTitle>Ce que je maîtrise</SectionTitle>
      <div className={styles.foldersRow}>
        <motion.div
          className={`${styles.folderItem} ${styles.folderLeft}`}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
        >
          <div className={styles.folderFloat}>
            <Folder size={3} color="#9B7BFF" label="core.frontend" />
          </div>
        </motion.div>
        <motion.div
          className={`${styles.folderItem} ${styles.folderCenter}`}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1}
        >
          <div className={styles.folderFloat}>
            <Folder size={3} color="#FFB36B" label="web.next" />
          </div>
        </motion.div>
        <motion.div
          className={`${styles.folderItem} ${styles.folderRight}`}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={2}
        >
          <div className={styles.folderFloat}>
            <Folder size={3} color="#72E4C7" label="quality.ship" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
