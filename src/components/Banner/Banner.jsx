import { MButton } from "../Button/Button";
import styles from "./Banner.module.scss";
import { motion } from "framer-motion";
import { imgAnimation, textAnimation } from "../../animations";

import forbes from "../../img/banner/forbes.svg";
import rolling from "../../img/banner/rolling.svg";
import allure from "../../img/banner/allure.svg";
import byrdie from "../../img/banner/byrdie.svg";
import popsugar from "../../img/banner/porsugar.svg";
import elle from "../../img/banner/elle.svg";
import gq from "../../img/banner/gq.svg";
import fast from "../../img/banner/fast.svg";

const images = [forbes, rolling, allure, byrdie, popsugar, elle, gq, fast];

const Banner = () => {
  return (
    <motion.section className={styles.root}>
      <div className={styles.upper}>
        <div className={styles.background}>
          <div className={styles.container}>
            <motion.h1
              className={styles.title}
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
              viewport={{ once: true }}
            >
              Potent Plant Elixirs for <br /> Body & Spirit
            </motion.h1>
            <motion.p
              className={styles.text}
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              custom={0.4}
              transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
              viewport={{ once: true }}
            >
              Tinctures of balancing adaptogens, <br /> healing cannabinoids
              &#40;CBD, CBDa, <br /> CBN&#41;, and mood-enhancing terpenes
            </motion.p>
            <MButton
              className={styles.button}
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              custom={0.6}
              transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
              viewport={{ once: true }}
            >
              Shop our Products
            </MButton>
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <motion.div className={styles.content}>
          {images.map((el, i) => (
            <motion.img
              src={el}
              alt="item"
              key={i}
              variants={imgAnimation}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ amount: 0.9, once: true }}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Banner;
