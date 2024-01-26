import { motion } from "framer-motion";
import { textAnimation } from "../../animations";
import styles from "./Composition.module.scss";

import image from "../../img/composition/image.svg";

const Composition = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>A Prismatic Approach to Stress Relief</h2>
      <div className={styles.container}>
        <div className={styles.left}>
          <ul className={styles.list}>
            <motion.li
              className={styles.component}
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
              viewport={{ once: true }}
            >
              Adaptogenic Herbs & Mushrooms
            </motion.li>
            <motion.li
              className={styles.component}
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              custom={0.3}
              transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
              viewport={{ once: true }}
            >
              Cannabinoids
            </motion.li>
            <motion.li
              className={styles.component}
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              custom={0.4}
              transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
              viewport={{ once: true }}
            >
              Edible Essential Oils
            </motion.li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.image}>
            <img src={image} alt="design" />
          </div>

          <motion.p
            className={styles.text}
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
            viewport={{ once: true }}
          >
            Adaptogens naturally heal the body’s response to stress. Why? These
            non-toxic herbs (think Ashwagandha, Rhodiola, Reishi Mushroom, and
            White Asian Ginseng) flourish in stressful environmental conditions.
            Their resilience transfers to your body, so you can better adapt to
            your environmental stressors.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Composition;
