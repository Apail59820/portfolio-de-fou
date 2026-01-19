import styles from "./page.module.css";
import Shuffle from "@/components/Shuffle/Shuffle";

export default function Home() {
  return (
    <div>
      <main>
        <div className={styles.shuffleContainer}>
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
            triggerOnHover
            respectReducedMotion={true}
            loop={false}
            loopDelay={0}
          />
        </div>
      </main>
    </div>
  );
}
