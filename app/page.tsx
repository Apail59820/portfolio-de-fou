import HeaderSection from "@/components/HeaderSection/HeaderSection";
import AboutSection from "./_components/AboutSection";
import SkillsSection from "./_components/SkillsSection";

import styles from "./page.module.css";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <div className={styles.paddingShit}></div>
    </main>
  );
}
