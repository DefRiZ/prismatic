import { motion } from "framer-motion";
import { textAnimation } from "../../animations";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.root}>
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
          Less Stress. More Vibrancy.
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
          By healing your body’s nervous and immune systems, our adaptogen
          <br />
          CBD oil drops and infusions provide natural stress relief and better
          <br />
          sleep.
        </motion.p>
        <motion.p
          className={styles.text}
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          custom={0.6}
          transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
          viewport={{ once: true }}
        >
          We consulted the wisdom of Master Herbalists, Ph.D. Chemists, <br />
          and Cannabis Experts to develop this ﬁrst-of-its-kind formula--
          <br />
          adaptogens, non-psychoactive cannabis, edible essential oils, and
          <br />
          immune-lifting mushrooms are in one supercharged elixir.
        </motion.p>
        <motion.p
          className={styles.text}
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          custom={0.6}
          transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
          viewport={{ once: true }}
        >
          Take it now for instant stress or insomnia relief, and take it long
          <br />
          term to let the power of plants help you achieve optimal health.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
