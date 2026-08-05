import Link from "next/link";
import Image from "next/image";
import { Zap } from "lucide-react";

import styles from "./SpecialProducts.module.css";

function SpecialProducts() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <p>دنیای عجیب حیوانات خانگی</p>

        <Link href="/SpecialProductsItems" className={styles.btn}>
          <Zap size={18} />
          محصولات ویژه
        </Link>
      </div>
      {/* تصاویر تزئینی */}

      <Image
        src="/SpecialIcons/2.svg"
        width={84}
        height={120}
        alt=""
        className={styles.img1}
      />

      <Image
        src="/SpecialIcons/1.svg"
        width={193}
        height={133}
        alt=""
        className={styles.img2}
      />

      <Image
        src="/SpecialIcons/3.svg"
        width={69}
        height={100}
        alt=""
        className={styles.img3}
      />

      <Image
        src="/SpecialIcons/4.svg"
        width={70}
        height={90}
        alt=""
        className={styles.img4}
      />

      <Image
        src="/SpecialIcons/5.svg"
        width={120}
        height={120}
        alt=""
        className={styles.img5}
      />
    </section>
  );
}

export default SpecialProducts;
