import classes from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      Copyright <span className={classes.brand}>GamesKart &copy;</span>{" "}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
