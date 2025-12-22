import styles from "@/app/_components/card/card.module.scss";

function Card({ children }) {
  return <div className={styles.card}>{children}</div>;
}

export default Card;
