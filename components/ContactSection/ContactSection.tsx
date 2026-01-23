import styles from './ContactSection.module.css'
import SectionTitle from "@/app/_components/SectionTitle";

export default function ContactSection() {

  return (
    <section className={styles.mainContainer}>
      <SectionTitle>
        Me contacter
      </SectionTitle>
    </section>
  )
}