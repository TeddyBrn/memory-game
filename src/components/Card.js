import Image from "next/image";
import styles from "../styles/Card.module.css";

export default function Card(props){
  return (
    <div onClick={() => props.selectCard(props.id)} className={`${styles.card} ${(props.selected || props.found) && styles.active}`}>
      <div className={styles.flipper}>
        <div className={styles.cardBack}>
          <Image src="/images/questionmark.svg" alt="Card Back" width={50} height={50} />
        </div>
        <div className={styles.cardFront}>
          <Image src={`/images/${props.image}`} alt={props.name} width={50} height={50} />
        </div>
      </div>
    </div>
  );
}

