import Link from "next/link";
import Image from "next/image";

import classes from "../styles/CategoryCard.module.css";

const CategoryCard = ({ image, name }) => {
  return (
    <div className={classes.card}>
      <Image
        className={classes.image}
        src={image}
        alt="some image"
        height={700}
        width={1300}
      />
      <Link href={`/category/${name.toLowerCase()}`}>
        <div className={classes.info}>
          <h3>{name}</h3>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
