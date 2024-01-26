import { motion } from "framer-motion";
import { textAnimation } from "../../animations";
import styles from "./Reviews.module.scss";

const Reviews = () => {
  return (
    <article className={styles.root}>
      <h2 className={styles.reviews}>
        Prismatic <br /> Reviews
      </h2>
      <div className={styles.container}>
        <h2 className={styles.title}>“Love It!”</h2>
        <motion.p
          className={styles.text}
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
          viewport={{ once: true }}
        >
          I honestly was very skeptical of CBD benefits. But decided it was
          worth a try since there were so many amazing reviews. I am so happy I
          gave it a shot. I am close to done with my first two bottles and I
          have seen a noticeable difference in a lot of aspects of my life. I am
          a lot more focused, I am less achy throughout the day, less anxious.
          The night time oil gets me nice and relaxed and ready for bed and
          makes me feel nice and cozy. I am now obsessed and will definitely be
          buying again and have recommended to all of my friends.
        </motion.p>
        <p className={styles.author}>Brittni M.</p>
      </div>
    </article>
  );
};

export default Reviews;
