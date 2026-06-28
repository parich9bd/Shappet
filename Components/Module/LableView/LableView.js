import Link from "next/link";
import Image from "next/image";

import { ArrowLeft } from "lucide-react";

import styles from "./LableView.module.css";

function LableView() {
  return (
    <section className={styles.hero}>
      {/* تصاویر تزئینی */}

      <Image
        src="/Lable/۱.svg"
        width={130}
        height={160}
        alt="bone"
        className={styles.bone}
      />
      <Image
        src="/Lable/۲.svg"
        width={510}
        height={300}
        alt="bone"
        className={styles.boneone}
      />

      <Image
        src="/Lable/۴.svg"
        width={200}
        height={190}
        alt="paw"
        className={styles.paw}
      />

      <Image
        src="/Lable/۳.svg"
        width={80}
        height={80}
        alt="ball"
        className={styles.ball}
      />

      <Image
        src="/Lable/۵.svg"
        width={60}
        height={50}
        alt="ball"
        className={styles.ball2}
      />

      <div className={styles.discounting}>
        <Image src="/Lable/sale.svg" width={102} height={102} alt="ball" />
      </div>
      {/* محتوا */}

      <div className={styles.content}>
        <h1>بهترین و جدیدترین لوازم سگ خانگی</h1>

        <p>
          با شاپت ، دغدغه ی ارجینال بودن رو نداشته باشه . جزو اوین ها در ایران
          با بیش از ۹ سال سابقه و مورد تایید دامپزشک های مطرح ایران ، خاص ترین
          غذا برای خاص ترین نژاد ها فقط در شاپت
        </p>
        {/* <span style={{ color: "#F7763D" }}>شاپت همراه پت</span> */}

        <Link href="/products" className={styles.btn}>
          خرید کنید
          <ArrowLeft size={18} />
        </Link>
      </div>

      {/* تصویر اصلی */}

      <div className={styles.imageBox}>
        <Image src="/Lable/main.svg" width={500} height={500} alt="dog" />
      </div>
    </section>
  );
}

export default LableView;
