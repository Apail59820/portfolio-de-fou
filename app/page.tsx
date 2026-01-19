'use client'

import styles from "./page.module.css";
import Shuffle from "@/components/Shuffle/Shuffle";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div>
      <main>
        <motion.div
          initial={{
            opacity: 0,
            scale: 1
          }}
          animate={{
            opacity: 1,
            scale: 1.5,
            transition: { duration: 2},
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
    </div>
  );
}
