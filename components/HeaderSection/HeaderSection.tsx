"use client";

import styles from "./HeaderSection.module.css";
import Shuffle from "@/components/Shuffle/Shuffle";
import { motion } from "motion/react";
import CurvedLoop from "@/components/CurvedLoop/CurvedLoop";

export default function HeaderSection() {
  return (
    <div className={styles.page}>
      <div className={styles.centerWrap}>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: 1,
            scale: 1.5,
            transition: { duration: 2 },
          }}
        >
          <Shuffle
            text="Paillart Amaury"
            shuffleDirection="right"
            duration={0.85}
            animationMode="evenodd"
            shuffleTimes={2}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={false}
            respectReducedMotion={true}
            loop={false}
            loopDelay={0}
          />
        </motion.div>
      </div>

      <div className={styles.curvedBottom}>
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.98,
            filter: "blur(18px)",
            rotateX: 70,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            rotateX: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: 1000,
            willChange: "transform, filter, opacity",
          }}
        >
          <CurvedLoop
            marqueeText="Compétences ✦ Parcours ✦ Expertise ✦ Experience ✦"
            speed={2}
            curveAmount={400}
            direction="right"
            interactive
            className={styles.customTextStyle}
          />
        </motion.div>
      </div>
    </div>
  );
}
