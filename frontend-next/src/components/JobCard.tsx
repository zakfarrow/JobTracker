"use client";

import styles from "@/styles/modules/jobCard.module.css";
import ProgressBar from "@/components/ProgressBar";
import { useState } from "react";

interface JobCardProps {
  jobTitle: string;
  totalStages?: number;
  currentStage?: number;
  description?: string;
  location: string;
  companyName: string;
}

const JobCard: React.FC<JobCardProps> = ({
  jobTitle,
  totalStages = 4,
  currentStage = 1,
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, sunt. Dignissimos, magnam officiis eaque ipsum quam quae sint optio veritatis! Mollitia repellendus voluptate suscipit illo perspiciatis, earum officia! Dolorum, officiis?",
  location,
  companyName,
}) => {
  const [bodyActive, setBodyActive] = useState(false);

  const toggleBody = (): void => {
    setBodyActive(!bodyActive);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.titleText}>{jobTitle}</h1>
        <h1 className={`${styles.titleText} ${styles.textLight}`}>
          {companyName}, {location}
        </h1>
      </div>
      <ProgressBar />
      <div className={`${styles.body} ${bodyActive ? styles.expand : ''}`}>
        <p className={`${styles.textShow} ${bodyActive ? styles.fadeIn : ''}`}>{description}</p>
      </div>
      <div className={styles.footer}>
        <button className={styles.button} onClick={toggleBody}>
          {bodyActive ? "Less" : "More"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
