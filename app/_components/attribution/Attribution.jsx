import styles from "@/app/_components/attribution/attribution.module.scss";
import Link from "next/link";

function Attribution() {
  return (
    <div className={styles.attribution}>
      Challenge by{" "}
      <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </Link>{" "}
      | Coded by <Link href="https://alorscreative.com/">Lindsey Dortch</Link>.
    </div>
  );
}

export default Attribution;
