import Button from "@/app/_components/button/Button";
import styles from "@/app/_ui/cardContent/cardContent.module.scss";
import Image from "next/image";

function CardContent() {
  return (
    <div className={styles.content}>
      <div className={styles.category}>
        <h2>Perfume</h2>
      </div>
      <div className={styles.item}>
        <h1>Gabrielle Essence Eau De Parfum</h1>
      </div>
      <div className={styles.description}>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
      </div>
      <div className={styles.priceBox}>
        <p className={styles.salePrice}>$149.99</p>
        <p className={styles.price}>$169.99</p>
      </div>
      <div className={styles.buttons}>
        <Button>
          <span className={styles.icon}>
            <Image
              src="/images/icon-cart.svg"
              alt="Shopping cart icon"
              fill
              priority
            />
          </span>
          <span>Add to Cart</span>
        </Button>
      </div>
    </div>
  );
}

export default CardContent;
