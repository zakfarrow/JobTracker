import hexagonSvg from "../../public/icons/hexagon.svg";
import Image from "next/image";
import styles from "@/styles/modules/hexagon.module.css";

interface HexagonProps {
  iconName: string;
}

const Hexagon: React.FC<HexagonProps> = ({ iconName }) => {
  return (
    <div className={styles.container}>
      <Image src={hexagonSvg} width={100} height={100} className={styles.hexagonIcon} alt=""></Image>
      <Image src={`/icons/tech/${iconName}.svg`} width={50} height={50} className={styles.techIcon} alt={iconName}></Image>
    </div>
  );
}

export default Hexagon;