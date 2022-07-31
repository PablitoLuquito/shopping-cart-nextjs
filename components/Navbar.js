import Link from "next/link";

import { useSelector } from "react-redux";

import classes from "../styles/Navbar.module.css";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className={classes.navbar}>
      <h6 className={classes.logo}>GamesKart</h6>
      <ul className={classes.links}>
        <li>
          <Link href="/">
            <a className={classes.navlink}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a className={classes.navlink}>Shop</a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a className={classes.navlink}>Cart ({getItemsCount()})</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
