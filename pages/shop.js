import ProductCard from "../components/ProductCard";

import { getProducts } from "./api/products";

import classes from "../styles/ShopPage.module.css";

const ShopPage = ({ products }) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>All Results</h1>
      <div className={classes.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
