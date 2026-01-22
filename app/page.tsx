import HeaderSection from "@/components/HeaderSection/HeaderSection";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";

import styles from "./page.module.css";
import LiquidEtherBg from "@/components/LiquidEtherBg/LiquidEtherBg";
import Passion from "@/components/Passion/Passion";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import CardSwap, { Card } from "@/components/CardSwap/CardSwap";
import BlurText from "@/components/BlurText/BlurText";
import ScrambledText from "@/components/ScrambledText/ScrambledText";

import Image from "next/image";


export default function Home() {
  // @ts-ignore
  return (
    <main className={styles.main}>
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
            A propos de moi
          </ScrollFloat>
        </div>
      </div>
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
      <div className={styles.scrollFloatContainer}>
        <div className={styles.scrollFloatContent}>
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Ce que je sais faire
          </ScrollFloat>
        </div>
      </div>
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
                Le{" "}
                <span className={styles.highlightWord}>mouvement</span> au
                service du sens
              </h3>
              <p className={styles.cardDesc}>
                Chaque{" "}
                <span className={styles.highlightWord}>animation</span> guide
                l’utilisateur,
                renforce la compréhension et rend le produit plus agréable à utiliser.
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
                Du{" "}
                <span className={styles.highlightWord}>propre</span>, même sous
                pression
              </h3>
              <p className={styles.cardDesc}>
                Je livre vite, mais je livre bien : une base solide,
                une expérience fluide, et un code{" "}
                <span className={styles.highlightWord}>solide</span> pour durer.
              </p>
            </div>
          </Card>
        </CardSwap>
      </div>
      <div className={styles.paddingShit}></div>
    </main>
  );
}
