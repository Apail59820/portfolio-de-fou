import HeaderSection from "@/components/HeaderSection/HeaderSection";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";

import styles from "./page.module.css";
import LiquidEtherBg from "@/components/LiquidEtherBg/LiquidEtherBg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.bg}>
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
      <HeaderSection />
      <div className={styles.scrollFloatContainer}>
        <div className={styles.scrollFloatContent}>
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Mon Histoire
          </ScrollFloat>
        </div>
      </div>
    </main>
  );
}
