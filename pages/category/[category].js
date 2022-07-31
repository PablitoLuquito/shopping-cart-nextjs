import { useRouter } from "next/router";

import { getProductsByCategory } from "../api/products/[category]";

import ProductCard from "../../components/ProductCard";

import classes from "../../styles/ShopPage.module.css";

const CategoryPage = ({ products }) => {
  const router = useRouter();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Results for {router.query.category}</h1>
      <div className={classes.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}
