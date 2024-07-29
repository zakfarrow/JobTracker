"use client";

import Image from "next/image";
import checkSvg from "../../public/icons/utility/check.svg";
import documentSvg from "../../public/icons/utility/document.svg";
import handshakeSvg from "../../public/icons/utility/handshake.svg";
import rocketSvg from "../../public/icons/utility/rocket.svg";
import styles from "@/styles/modules/progressBar.module.css";
import { useState } from "react";

interface ProgressBarProps {
  totalSteps?: number;
  stepsComplete?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  totalSteps = 4,
  stepsComplete = 1,
}) => {
  const [currentStep, setCurrentStep] = useState(stepsComplete);

  const changeCurrentStep = (target: number) => {
    setCurrentStep(target);
  };

  return (
    <div className={styles.container}>
      <div className={styles.barBase}>
        <div className={`${styles.barSection} ${currentStep >= 2 ? styles.barFill : ''}`}></div>
        <div className={`${styles.barSection} ${currentStep >= 3 ? styles.barFill : ''}`}></div>
        <div className={`${styles.barSection} ${currentStep >= 4 ? styles.barFill : ''}`}></div>
      </div>
      <ol className={styles.stepContainer}>
        <li className={styles.item}>
          <span
            className={`${styles.circle} ${
              currentStep >= 1 ? styles.active : ""
            }`}
            onClick={() => changeCurrentStep(1)}
          >
            <Image
              src={checkSvg}
              width={30}
              height={30}
              alt=""
              className={styles.light}
            ></Image>
          </span>
        </li>
        <li className={styles.item}>
          <span
            className={`${styles.circle} ${
              currentStep >= 2 ? styles.active : ""
            }`}
            onClick={() => changeCurrentStep(2)}
          >
            <Image
              src={documentSvg}
              width={30}
              height={30}
              alt=""
              className={styles.light}
            ></Image>
          </span>
        </li>
        <li className={styles.item}>
          <span
            className={`${styles.circle} ${
              currentStep >= 3 ? styles.active : ""
            }`}
            onClick={() => changeCurrentStep(3)}
          >
            <Image
              src={handshakeSvg}
              width={30}
              height={30}
              alt=""
              className={styles.light}
            ></Image>
          </span>
        </li>
        <li className={styles.item}>
          <span
            className={`${styles.circle} ${
              currentStep === 4 ? styles.active : ""
            }`}
            onClick={() => changeCurrentStep(4)}
          >
            <Image
              src={rocketSvg}
              width={30}
              height={30}
              alt=""
              className={styles.light}
            ></Image>
          </span>
        </li>
      </ol>
    </div>
  );
};

export default ProgressBar;
