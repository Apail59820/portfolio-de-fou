'use client'

import styles from './ContactSection.module.css'
import SectionTitle from "@/app/_components/SectionTitle";
import ProfileCard from "@/components/ProfileCard/ProfileCard";

export default function ContactSection() {

  return (
    <section className={styles.mainContainer}>
      <SectionTitle>
        Me contacter
      </SectionTitle>
      <ProfileCard
        name="Amaury Paillart"
        title="Développeur Web"
        handle="amauryp-paillart"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/amaury.png"
        grainUrl={'/profilecard/grain.webp'}
        iconUrl={'/profilecard/iconpattern.png'}
        showUserInfo
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log('Contact clicked')}
        behindGlowColor="rgba(125, 190, 255, 0.67)"
      />

    </section>
  )
}