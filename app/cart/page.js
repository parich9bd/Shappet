"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";

import { useCart } from "@/context/CartContext";

import styles from "./Cart.module.css";

export default function Page() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <section className={styles.empty}>
          <ShoppingCart size={70} />
        <h2>سبد خرید شما خالی است.</h2>

        <Link href="/products" className={styles.shopBtn}>
          مشاهده محصولات
        </Link>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <h1>سبد خرید</h1>

      <div className={styles.wrapper}>
        {/* محصولات */}

        <div className={styles.products}>
          {cart.map((product) => (
            <div className={styles.card} key={product.id}>
              <Image
                src={product.image}
                width={140}
                height={140}
                alt={product.productName}
              />

              <div className={styles.info}>
                <h3>{product.productName}</h3>

                <p>{product.description}</p>

                <div className={styles.tags}>
                  <span>{product.brand}</span>

                  <span>{product.category}</span>

                  {product.discount > 0 && (
                    <span>{product.discount}% تخفیف</span>
                  )}
                </div>

                <div className={styles.bottom}>
                  <div>
                    <small>قیمت</small>

                    <h2>{product.price.toLocaleString("fa-IR")} تومان</h2>

                    {product.oldPrice && (
                      <del>{product.oldPrice.toLocaleString("fa-IR")}</del>
                    )}
                  </div>

                  <div className={styles.quantity}>
                    <button>
                      <Plus size={18} />
                    </button>

                    <span>{product.quantity}</span>

                    <button>
                      <Minus size={18} />
                    </button>
                  </div>

                  <button
                    className={styles.removeBtn}
                    onClick={() => removeFromCart(product.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* خلاصه خرید */}

        <aside className={styles.summary}>
          <h2>خلاصه سفارش</h2>

          <div>
            <span>تعداد کالا</span>

            <strong>
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </strong>
          </div>

          <div>
            <span>مبلغ کل</span>

            <strong>{totalPrice.toLocaleString("fa-IR")} تومان</strong>
          </div>

          <button className={styles.checkoutBtn}>ادامه فرایند خرید</button>
        </aside>
      </div>
    </section>
  );
}
