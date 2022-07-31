import { useDispatch } from "react-redux";

import { addToCart } from "../redux/cart.slice";
import Image from "next/image";

import classes from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.card}>
      <Image src={product.image} height={300} width={220} alt="some image" />
      <h4 className={classes.title}>{product.product}</h4>
      <h5 className={classes.category}>{product.category}</h5>
      <p>$ {product.price}</p>
      <button
        className={classes.button}
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
