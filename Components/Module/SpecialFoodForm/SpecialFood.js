import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import styles from "./SpecialFood.module.css";

function SpecialFood() {
  return (
    <section className={styles.section}>
      <div className={`${styles.card} ${styles.fish}`}>
        <div className={styles.left}>
          <Image src="/FoodForm/fish.svg" width={60} height={60} alt="fish" />

          <p>غذا ماهی</p>
        </div>

        <Link href="/" className={styles.arrow}>
          <ArrowLeft size={18} />
        </Link>
      </div>

      <div className={`${styles.card} ${styles.cat}`}>
        <div className={styles.left}>
          <Image src="/FoodForm/cat.svg" width={60} height={60} alt="cat" />

          <p>غذا و لوازم گربه</p>
        </div>

        <Link href="/" className={styles.arrow}>
          <ArrowLeft size={18} />
        </Link>
      </div>

      <div className={`${styles.card} ${styles.dog}`}>
        <div className={styles.left}>
          <Image src="/FoodForm/dog.svg" width={60} height={60} alt="dog" />

          <p>غذا و لوازم سگ</p>
        </div>

        <Link href="/" className={styles.arrow}>
          <ArrowLeft size={18} />
        </Link>
      </div>
    </section>
  );
}

export default SpecialFood;
