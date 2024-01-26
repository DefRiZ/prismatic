import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { imgAnimation, textAnimation } from "../../animations";

import styles from "./HeaderDrawer.module.scss";

const HeaderDrawer = ({ isOpen, setIsOpen }) => {
  return (
    <article className={styles.container}>
      <motion.div
        className={styles.root}
        variants={imgAnimation}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
        viewport={{ once: true }}
      >
        <ul className={styles.navigation}>
          <motion.li
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
            custom={0.3}
            viewport={{ once: true }}
          >
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className={styles.link}
              to="/"
            >
              Shop
            </Link>
          </motion.li>
          <motion.li
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
            custom={0.4}
            viewport={{ once: true }}
          >
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className={styles.link}
              to="/"
            >
              About
            </Link>
          </motion.li>
          <motion.li
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
            custom={0.5}
            viewport={{ once: true }}
          >
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className={styles.link}
              to="/"
            >
              Strange Mind Blog
            </Link>
          </motion.li>
          <motion.li
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
            custom={0.6}
            viewport={{ once: true }}
          >
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className={styles.link}
              to="/"
            >
              Cart
            </Link>
          </motion.li>
        </ul>
      </motion.div>
    </article>
  );
};

export default HeaderDrawer;
