import styles from "./Header1.module.css";

function Header1({ children }) {
  return <h1 className={styles.header1}>{children}</h1>;
}

export default Header1;
