"use client";

import styles from "./Passion.module.css";
import { useRef } from "react";
import VariableProximity from "@/components/VariableProximity/VariableProximity";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function Passion() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(containerRef, {
    amount: 0.35,
    margin: "0px 0px -15% 0px",
  });

  return (
    <div className={styles.mainContainer} ref={containerRef}>
      <AnimatePresence mode="wait">
        {isInView && (
          <motion.div
            key="passion"
            className={styles.motionWrap}
            initial={{
              opacity: 0,
              y: 50,
              rotateX: 22,
              filter: "blur(18px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.98,
              filter: "blur(14px)",
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              className={styles.shine}
              initial={{ x: "-120%", opacity: 0 }}
              animate={{ x: "120%", opacity: [0, 1, 0] }}
              transition={{
                duration: 1.1,
                ease: "easeInOut",
                delay: 0.15,
              }}
            />

            <VariableProximity
              label={"Développeur passionné depuis plus de 10 ans..."}
              className={styles.text}
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 1000"
              /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
              // @ts-expect-error
              containerRef={containerRef}
              radius={140}
              falloff="linear"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
