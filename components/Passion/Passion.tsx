"use client";

import styles from "./Passion.module.css";
import { useRef } from "react";
import VariableProximity from "@/components/VariableProximity/VariableProximity";

export default function Passion() {
  const containerRef = useRef(null);

  return (
    <div className={styles.mainContainer} ref={containerRef}>
      <VariableProximity
        label={"Hover me! And then star React Bits on GitHub, or else..."}
        className={styles.text}
        fromFontVariationSettings="'wght' 400"
        toFontVariationSettings="'wght' 1000"
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-expect-error
        containerRef={containerRef}
        radius={200}
        falloff="linear"
      />
    </div>
  );
}
