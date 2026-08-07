"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

import styles from "./EpicItems.module.css";

function EpicItems() {
  const { addToCart } = useCart();
  const handleAdd = (item) => {
    addToCart(item);

    toast.success(`${item.productName} به سبد خرید اضافه شد`);
  };

  return (
    <section className={styles.section}>
      <div className={`${styles.card} ${styles.card1}`}>
        <p>غذای کامل گربه Royal Canin</p>

        <div className={styles.imageBox}>
          <Image
            src="/pic/EpicItems/drycatfood.svg"
            width={170}
            height={170}
            alt=""
            className={styles.product}
          />
        </div>

        <button
          onClick={() =>
            handleAdd({
              id: 1,
              productName: "غذای خشک گربه",
              price: 120000,
              image: "/pic/EpicItems/drycatfood.svg",
            })
          }
          className={`${styles.btn} ${styles.btn1}`}
        >
          خرید کنید
          <span className={styles.arrow}>
            <ArrowLeft size={18} />
          </span>
        </button>

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
        <p>غذای سگ نژاد جونیور Reflex</p>

        <div className={styles.imageBox}>
          <Image
            src="/pic/EpicItems/juniordog.svg"
            width={170}
            height={170}
            alt=""
            className={styles.product}
          />
        </div>

        <button
          onClick={() =>
            handleAdd({
              id: 2,
              productName: "غذای سگ جونیور",
              price: 150000,
              image: "/pic/EpicItems/juniordog.svg",
            })
          }
          className={`${styles.btn} ${styles.btn2}`}
        >
          خرید کنید
          <span className={styles.arrow}>
            <ArrowLeft size={18} />
          </span>
        </button>

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
        <p> کنسرو سگ Rawz</p>

        <div className={styles.imageBox}>
          <Image
            src="/pic/EpicItems/conserves.svg"
            width={170}
            height={170}
            alt=""
            className={styles.product}
          />
        </div>

        <button
          onClick={() =>
            handleAdd({
              id: 3,
              productName: "کنسرو سگ",
              price: 90000,
              image: "/pic/EpicItems/conserves.svg",
            })
          }
          className={`${styles.btn} ${styles.btn3}`}
        >
          خرید کنید
          <span className={styles.arrow}>
            <ArrowLeft size={18} />
          </span>
        </button>

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
        <p>مولتی ویتامین SuperDog</p>

        <div className={styles.imageBox}>
          <Image
            src="/pic/EpicItems/dogvitamite.svg"
            width={170}
            height={170}
            alt=""
            className={styles.product}
          />
        </div>

        <button
          onClick={() =>
            handleAdd({
              id: 4,
              productName: "مولتی ویتامین سگ",
              price: 70000,
              image: "/pic/EpicItems/dogvitamite.svg",
            })
          }
          className={`${styles.btn} ${styles.btn4}`}
        >
          خرید کنید
          <span className={styles.arrow}>
            <ArrowLeft size={18} />
          </span>
        </button>

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
