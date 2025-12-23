import styles from "@/app/_components/button/button.module.scss";
import Link from "next/link";

function Button({ children }) {
  return (
    <Link href="#" className={styles.button}>
      {children}
    </Link>
  );
}

export default Button;
