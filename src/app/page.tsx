import React from "react";
import Image from "next/image";

import styles from "./page.module.scss";

import imageProduct from "../../public/images/image-product-desktop.jpg";
import iconCart from "../../public/images/icon-cart.svg";

const Home = () => {
  return (
    <main className={styles.mainContainer}>
      <Image src={imageProduct} className={styles.image} alt={""} />
      <div className={styles.content}>
        <div className={styles.product}>Perfume</div>
        <div className={styles.name}>Gabrielle Essence Eau De Parfum</div>
        <div className={styles.description}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.discountedPrice}>$149.99</span>
          <span className={styles.originalPrice}>$169.99</span>
        </div>
        <button className={styles.addToCartButton}>
          <Image src={iconCart} alt={""} />
          <span className={styles.buttonName}>Add to Cart</span>
        </button>
      </div>
    </main>
  );
};

export default Home;
