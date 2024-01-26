import { motion } from "framer-motion";
import { textAnimation } from "../../animations";
import { Button } from "../Button/Button";
import styles from "./Info.module.scss";

const Info = () => {
  return (
    <section className={styles.root}>
      <div className={styles.background}></div>
      <div className={styles.info}>
        <div className={styles.container}>
          <h2 className={styles.title}>Not Your Average Hemp</h2>
          <motion.p
            className={styles.text}
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
            viewport={{ once: true }}
          >
            Our hemp is organically grown and then expertly extracted using the
            whole plant- mainly the flower, not just stalks and leaves. This
            creates a potent, ultra-pure, full-spectrum extract with
            cannabinoids, terpenes, and flavonoids. Other hemp extraction
            methodologies damage the plant in favor of quick mass production. We
            take care of our hemp by processing it slowly to yield the most
            efficacious medicine possible.
          </motion.p>
          <div className={styles.benefits}>
            <div className={styles.list}>
              <motion.span
                className={styles.item}
                variants={textAnimation}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
                custom={0.1}
                viewport={{ once: true }}
              >
                Organic Full Spectrum Hemp
              </motion.span>
              <motion.span
                className={styles.item}
                variants={textAnimation}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
                custom={0.2}
                viewport={{ once: true }}
              >
                Potent Medicinal Cannabinoid Profile
              </motion.span>
            </div>
            <div className={styles.list}>
              <motion.span
                className={styles.item}
                variants={textAnimation}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
                custom={0.3}
                viewport={{ once: true }}
              >
                Premium Extraction
              </motion.span>
              <motion.span
                className={styles.item}
                variants={textAnimation}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
                custom={0.4}
                viewport={{ once: true }}
              >
                No High, Just Bliss
              </motion.span>
            </div>
          </div>
          <div className={styles.button}>
            <Button>Shop Our Products</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
