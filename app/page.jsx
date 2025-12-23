import Card from "@/app/_components/card/Card";
import styles from "./home.module.scss";
import CardImage from "@/app/_ui/cardImage/CardImage";
import CardContent from "@/app/_ui/cardContent/CardContent";

export default function Home() {
  return (
    <section className={styles.section}>
      <Card>
        <CardImage />
        <CardContent />
      </Card>
    </section>
  );
}
