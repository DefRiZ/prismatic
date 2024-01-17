import styles from "./Composition.module.scss";

import image from "../../img/composition/image.svg";

const Composition = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>A Prismatic Approach to Stress Relief</h2>
      <div className={styles.container}>
        <div className={styles.left}>
          <ul className={styles.list}>
            <li className={styles.component}>Adaptogenic Herbs & Mushrooms</li>
            <li className={styles.component}>Cannabinoids</li>
            <li className={styles.component}>Edible Essential Oils</li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.image}>
            <img src={image} alt="design" />
          </div>

          <p className={styles.text}>
            Adaptogens naturally heal the body’s response to stress. Why? These
            non-toxic herbs (think Ashwagandha, Rhodiola, Reishi Mushroom, and
            White Asian Ginseng) flourish in stressful environmental conditions.
            Their resilience transfers to your body, so you can better adapt to
            your environmental stressors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Composition;
