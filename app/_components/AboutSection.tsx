import Passion from "@/components/Passion/Passion";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

import SectionTitle from "./SectionTitle";
import styles from "../page.module.css";

export default function AboutSection() {
  return (
    <>
      <SectionTitle>A propos de moi</SectionTitle>
      <div className={styles.passionContainer}>
        <Passion highlightClassName={styles.highlightWord} />
      </div>
      <div className={styles.scrollRevealContainer}>
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={5}
          blurStrength={8}
          textClassName={styles.scrollRevealText}
          highlightWords={["rapides", "propres", "mémorables"]}
          highlightClassName={styles.highlightWord}
        >
          Je conçois des expériences web rapides, propres, et mémorables.
        </ScrollReveal>
      </div>
    </>
  );
}
