import styles from "./Header.module.scss";

import logo from "../../img/header/Vector.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.upper}>
        <div className={styles.container}>
          <h3 className={styles.discount}>
            Sign up for our newsletter to get 10% off your first order
          </h3>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.container}>
          <nav className={styles.navigation}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link className={styles.link} to="/">
                  Shop
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to="/">
                  About
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to="/">
                  Strange Mind Blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.img}>
            <Link to="/">
              <img src={logo} alt="website's logo" />
            </Link>
          </div>
          <div className={styles.cart}>
            <Link className={styles.link} to="/">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
