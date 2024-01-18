import styles from "./Press.module.scss";

import { Link } from "react-router-dom";

const Press = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>Prismatic Press</h2>

        <Link to="/" className={styles.link}>
          Read the Article
        </Link>
        <p className={styles.text}>
          "Helps me start each day off on the right food with a clear mind and
          steady energy- no coffee necessary"
        </p>
        <span className={styles.author}>FORBES</span>
      </div>
    </section>
  );
};

export default Press;
