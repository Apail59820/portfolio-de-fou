import Image from "next/image";

import BlurText from "@/components/BlurText/BlurText";
import CardSwap, { Card } from "@/components/CardSwap/CardSwap";
import ScrambledText from "@/components/ScrambledText/ScrambledText";

import SectionTitle from "./SectionTitle";
import styles from "../page.module.css";

export default function SkillsSection() {
  return (
    <>
      <SectionTitle>Ce que je sais faire</SectionTitle>
      <div className={styles.cardSwapContainer}>
        <div className={styles.cardSwapTextContainer}>
          <BlurText
            text="Ce que j'apporte"
            delay={200}
            animateBy="words"
            direction="top"
            className={styles.blurText}
          />
          <ScrambledText
            className={styles.scrambledText}
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
            highlightWords={["expérience", "détail"]}
            highlightClassName={styles.highlightWord}
          >
            Je transforme une idée ou une maquette en expérience web propre,
            rapide et agréable à utiliser. Avec un vrai souci du détail.
          </ScrambledText>
        </div>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card className={styles.skillCard}>
            <div className={styles.cardMedia}>
              <Image
                src="/modern-ui.png"
                alt="Design system en action"
                fill
                className={styles.cardImage}
                priority
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                UI <span className={styles.highlightWord}>modernes</span>,
                lisibles, cohérentes
              </h3>
              <p className={styles.cardDesc}>
                Une interface claire, une hiérarchie nette, et des composants
                cohérents pour une expérience fluide et{" "}
                <span className={styles.highlightWord}>premium</span>.
              </p>
            </div>
          </Card>

          <Card>
            <div className={styles.cardMedia}>
              <Image
                src="/living-product.png"
                alt="Donner vie à vos produits"
                fill
                className={styles.cardImage}
                priority
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Le <span className={styles.highlightWord}>mouvement</span> au
                service du sens
              </h3>
              <p className={styles.cardDesc}>
                Chaque{" "}
                <span className={styles.highlightWord}>animation</span> guide
                l’utilisateur, renforce la compréhension et rend le produit plus
                agréable à utiliser.
              </p>
            </div>
          </Card>

          <Card>
            <div className={styles.cardMedia}>
              <Image
                src="/fast-and-robust.png"
                alt="Rapide à charger. Solide à maintenir."
                fill
                className={styles.cardImage}
                priority
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Du <span className={styles.highlightWord}>propre</span>, même
                sous pression
              </h3>
              <p className={styles.cardDesc}>
                Je livre vite, mais je livre bien : une base solide, une
                expérience fluide, et un code{" "}
                <span className={styles.highlightWord}>solide</span> pour durer.
              </p>
            </div>
          </Card>
        </CardSwap>
      </div>
    </>
  );
}
