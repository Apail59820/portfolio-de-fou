"use client";

import styles from "./page.module.css";
import Shuffle from "@/components/Shuffle/Shuffle";
import { motion } from "motion/react";
import LiquidEtherBg from "@/components/LiquidEtherBg/LiquidEtherBg";

export default function Home() {
  return (
    <main style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none"
        }}
      >
        <LiquidEtherBg
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={23}
          cursorSize={85}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={49}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          opacity: 1,
          scale: 1.5,
          transition: { duration: 2 },
        }}
        className={styles.shuffleContainer}
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
    </main>
  );
}