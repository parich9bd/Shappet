import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import styles from "./EpicItems.module.css";

function EpicItems() {
  return (
    <section className={styles.section}>
      <div className={`${styles.card} ${styles.card1}`}>
        <p>فروش انواع غذای خشک</p>
        <div className={styles.imageBox}>
          <Image
            src="/pic/EpicItems/drycatfood.svg"
            width={170}
            height={170}
            alt=""
            className={styles.product}
          />
        </div>

        <Link
          href="/special-products"
          className={`${styles.btn} ${styles.btn1}`}
        >
          خرید کنید
          <span className={styles.arrow}>
            <ArrowLeft size={18} />
          </span>
        </Link>

        <Image
          src="/pic/EpicItems/desing/pink.svg"
          width={302}
          height={197}
          alt=""
          className={styles.paw}
        />
        <Image
          src="/pic/EpicItems/desing/pinkdash.svg"
          width={302}
          height={197}
          alt=""
          className={styles.pawDash}
        />
      </div>

      <div className={`${styles.card} ${styles.card2}`}>
        <p>غذای سگ نژاد جونیور</p>
        <div className={styles.imageBox}>
          <Image
            src="/pic/EpicItems/juniordog.svg"
            width={170}
            height={170}
            alt=""
            className={styles.product}
          />
        </div>

        <Link
          href="/special-products"
          className={`${styles.btn} ${styles.btn2}`}
        >
          خرید کنید
          <span className={styles.arrow}>
            <ArrowLeft size={18} />
          </span>
        </Link>

        <Image
          src="/pic/EpicItems/desing/green.svg"
          width={302}
          height={197}
          alt=""
          className={styles.paw}
        />
        <Image
          src="/pic/EpicItems/desing/pinkdash.svg"
          width={302}
          height={197}
          alt=""
          className={styles.pawDash}
        />
      </div>

      <div className={`${styles.card} ${styles.card3}`}>
        <p>انواع کنسرو برای سگ</p>
        <div className={styles.imageBox}>
          <Image
            src="/pic/EpicItems/conserves.svg"
            width={170}
            height={170}
            alt=""
            className={styles.product}
          />
        </div>

        <Link
          href="/special-products"
          className={`${styles.btn} ${styles.btn3}`}
        >
          خرید کنید
          <span className={styles.arrow}>
            <ArrowLeft size={18} />
          </span>
        </Link>

        <Image
          src="/pic/EpicItems/desing/orange.svg"
          width={302}
          height={197}
          alt=""
          className={styles.paw}
        />
        <Image
          src="/pic/EpicItems/desing/pinkdash.svg"
          width={302}
          height={197}
          alt=""
          className={styles.pawDash}
        />
      </div>

      <div className={`${styles.card} ${styles.card4}`}>
        <p>قرص و پودر های مولتی ویتامین</p>
        <div className={styles.imageBox}>
          <Image
            src="/pic/EpicItems/dogvitamite.svg"
            width={170}
            height={170}
            alt=""
            className={styles.product}
          />
        </div>

        <Link
          href="/special-products"
          className={`${styles.btn} ${styles.btn4}`}
        >
          خرید کنید
          <span className={styles.arrow}>
            <ArrowLeft size={18} />
          </span>
        </Link>

        <Image
          src="/pic/EpicItems/desing/puple.svg"
          width={302}
          height={197}
          alt=""
          className={styles.paw}
        />
        <Image
          src="/pic/EpicItems/desing/pinkdash.svg"
          width={302}
          height={197}
          alt=""
          className={styles.pawDash}
        />
      </div>
    </section>
  );
}

export default EpicItems;
