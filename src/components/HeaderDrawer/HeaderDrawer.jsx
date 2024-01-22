import React from "react";
import { Link } from "react-router-dom";

import styles from "./HeaderDrawer.module.scss";

const HeaderDrawer = ({ isOpen, setIsOpen }) => {
  return (
    <article className={styles.container}>
      <div className={styles.root}>
        <ul className={styles.navigation}>
          <li>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className={styles.link}
              to="/"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className={styles.link}
              to="/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className={styles.link}
              to="/"
            >
              Strange Mind Blog
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className={styles.link}
              to="/"
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default HeaderDrawer;
