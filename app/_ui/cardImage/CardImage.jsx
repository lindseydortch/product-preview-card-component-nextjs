"use client";

import styles from "@/app/_ui/cardImage/cardImage.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

function CardImage() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 374px)");

    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  // Prevent hydration mismatch
  if (isMobile === null) return null;

  return (
    <div className={styles.imageContainer}>
      <Image
        src={
          !isMobile
            ? "/images/image-product-desktop.jpg"
            : "/images/image-product-mobile.jpg"
        }
        alt="Image of Gabrielle Essence Eau De Parfum"
        fill
        priority
        sizes="auto"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
}

export default CardImage;
