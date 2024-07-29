import React from "react";
import Hexagon from "@/components/Hexagon";
import styles from "@/styles/modules/hexagonRow.module.css";

interface HexagonRowProps {
  icons: string[];
}

const HexagonRow: React.FC<HexagonRowProps> = ({ icons }) => {
  return (
    <div
      className={styles.container}
    >
      {[...Array(icons.length)].map((_, index) => (
        <Hexagon key={index} iconName={icons[index]}/>
      ))}
    </div>
  );
};

export default HexagonRow;