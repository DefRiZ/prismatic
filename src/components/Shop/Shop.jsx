import { motion } from "framer-motion";
import { textAnimation } from "../../animations";
import { Button } from "../Button/Button";
import styles from "./Shop.module.scss";

const Shop = () => {
  return (
    <section className={styles.root}>
      <div className={styles.light}>
        <div className={styles.container}>
          <motion.h2
            className={styles.title}
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
            viewport={{ once: true }}
          >
            Meet Good Day
          </motion.h2>
          <motion.p
            className={styles.text}
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
            viewport={{ once: true }}
          >
            Anxiety soothing full <br /> spectrum hemp oil (CBD, <br /> CBDa)
            and energizing <br />
            adaptogenic herbs in our <br /> daytime tincture
          </motion.p>
          <Button>Shop Day</Button>
        </div>
      </div>
      <div className={styles.dark}>
        <div className={styles.container}>
          <motion.h2
            className={styles.title}
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
            viewport={{ once: true }}
          >
            Meet Good Night
          </motion.h2>
          <motion.p
            className={styles.text}
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
            viewport={{ once: true }}
          >
            Our nighttime CBD tincture <br /> for sleep support, with <br />
            calming herbs, immune-enhancing <br /> adaptogens, and <br />
            stress-relieving <br /> cannabinoids (CBD, CBN)
          </motion.p>
          <Button>Shop Night</Button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
