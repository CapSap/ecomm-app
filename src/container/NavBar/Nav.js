import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navItem_link}>
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
