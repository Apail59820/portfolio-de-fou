import HeaderSection from "@/components/HeaderSection/HeaderSection";
import AboutSection from "./_components/AboutSection";
import SkillsSection from "./_components/SkillsSection";

import styles from "./page.module.css";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import TechnicalSection from "@/components/TechnicalSection/TechnicalSection";
import StudiesSection from "@/components/StudiesSection/StudiesSection";
import LookingForSection from "@/components/LookingForSection/LookingForSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TechnicalSection/>
      <StudiesSection />
      <LookingForSection/>
      <div className={styles.paddingShit}></div>
    </main>
  );
}
