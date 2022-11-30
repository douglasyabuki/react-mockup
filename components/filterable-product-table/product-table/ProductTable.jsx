import styles from "./ProductTable.module.css";
import ProductRow from "./product-row/ProductRow";
import ProductCategoryRow from "./product-category-row/ProductCategoryRow";

export default function ProductTable() {
  return (
    <div className={styles.productTableContainer}>
      <h1>Product Table works!</h1>
      <ProductRow></ProductRow>
      <ProductCategoryRow></ProductCategoryRow>
    </div>
  );
}
