"use client";

import { useRef, type FormEvent } from "react";
import { cubicBezier, motion, useInView, type Variants } from "framer-motion";

import styles from "./ContactSection.module.css";
import SectionTitle from "@/app/_components/SectionTitle";
import ProfileCard from "@/components/ProfileCard/ProfileCard";

export default function ContactSection() {
  const stageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const isInView = useInView(stageRef, {
    amount: 0.3,
    margin: "0px 0px -20% 0px",
    once: true,
  });

  const easeOutCubic = cubicBezier(0.22, 1, 0.36, 1);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
      },
    },
  };

  const layoutVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 46,
      scale: 0.98,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.85,
        ease: easeOutCubic,
      },
    },
  };

  const handleCardContactClick = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    nameInputRef.current?.focus();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className={styles.mainContainer}>
      <SectionTitle>
        Me contacter
      </SectionTitle>
      <motion.div
        ref={stageRef}
        className={styles.stage}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className={styles.intro} variants={itemVariants}>
          <div className={styles.kicker}>
            <span className={styles.kickerDot} aria-hidden="true" />
            <span className={styles.kickerText}>Contact direct</span>
          </div>
          <h3 className={styles.headline}>
            On donne forme à votre prochain produit.
          </h3>
          <p className={styles.subline}>
            Brief clair ou idée encore floue, je propose une trajectoire nette,
            une estimation et un plan d'action concret.
          </p>
          <div className={styles.tagRow}>
            <span className={styles.tag}>Réponse &lt; 48h</span>
            <span className={styles.tag}>UI + dev full-stack</span>
            <span className={styles.tag}>Livraison rapide</span>
          </div>
        </motion.div>

        <motion.div className={styles.layout} variants={layoutVariants}>
          <motion.div className={styles.cardColumn} variants={itemVariants}>
            <div className={styles.cardShell}>
              <div className={styles.cardGlow} aria-hidden="true" />
              <ProfileCard
                name="Amaury Paillart"
                title="Développeur Web"
                handle="amaury-paillart"
                status="En ligne"
                contactText="Me contacter"
                avatarUrl="/amaury.png"
                grainUrl="/profilecard/grain.webp"
                iconUrl="/profilecard/iconpattern.png"
                showUserInfo
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={handleCardContactClick}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
              />
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            className={styles.form}
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className={styles.formOrbits} aria-hidden="true">
              <span className={styles.orbit} />
              <span className={`${styles.orbit} ${styles.orbitDelay}`} />
              <span className={`${styles.orbit} ${styles.orbitSlow}`} />
            </div>
            <div className={styles.formHeader}>
              <span className={styles.formEyebrow}>Brief rapide</span>
              <h4 className={styles.formTitle}>Racontez-moi votre besoin</h4>
              <p className={styles.formHint}>
                Quelques lignes suffisent pour démarrer.
              </p>
            </div>
            <div className={styles.fields}>
              <div className={styles.fieldRow}>
                <label className={styles.field}>
                  <span className={styles.label}>Nom complet</span>
                  <input
                    ref={nameInputRef}
                    className={styles.input}
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Votre nom"
                    required
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>Email</span>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="vous@exemple.com"
                    required
                  />
                </label>
              </div>
              <label className={styles.field}>
                <span className={styles.label}>Type de projet</span>
                <div className={styles.selectWrap}>
                  <select className={styles.select} name="project" defaultValue="">
                    <option value="" disabled>
                      Choisir une option
                    </option>
                    <option value="site">Site vitrine / landing</option>
                    <option value="app">Web app / SaaS</option>
                    <option value="refonte">Refonte UI/UX</option>
                    <option value="devops">DevOps / infra</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </label>
              <label className={`${styles.field} ${styles.fieldFull}`}>
                <span className={styles.label}>Message</span>
                <textarea
                  className={styles.textarea}
                  name="message"
                  rows={4}
                  placeholder="Objectif, délai, contraintes, budget..."
                  required
                />
              </label>
            </div>
            <div className={styles.formFooter}>
              <div className={styles.formMeta}>
                <span className={styles.metaDot} aria-hidden="true" />
                <span>Réponse en - de 48h</span>
              </div>
              <button className={styles.submitButton} type="submit">
                <span>Envoyer</span>
                <span className={styles.submitArrow} aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}
