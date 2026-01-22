import type { ReactNode } from "react";

import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";

import styles from "../page.module.css";

type SectionTitleProps = {
  children: ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className={styles.scrollFloatContainer}>
      <div className={styles.scrollFloatContent}>
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          {children}
        </ScrollFloat>
      </div>
    </div>
  );
}
