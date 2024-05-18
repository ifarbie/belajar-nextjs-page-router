import React from "react";
import styles from "../Product.module.scss";
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

const ProductViews = ({ products }: { products: Product[] }) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Products</h1>
      <div className={styles.product__content}>
        {products.map((product: Product) => (
          <div key={product.id} className={styles.product__content__item}>
            <div className={styles.product__content__item_image}>
              <img src={product.image} alt={product.name} />
            </div>
            <h4 className={styles.product__content__item_name}>{product.name}</h4>
            <p className={styles.product__content__item_category}>{product.category}</p>
            <p className={styles.product__content__item_price}>{product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR"
            })}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductViews;
