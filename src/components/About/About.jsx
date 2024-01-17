import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>Less Stress. More Vibrancy.</h2>
        <p className={styles.text}>
          By healing your body’s nervous and immune systems, our adaptogen
          <br />
          CBD oil drops and infusions provide natural stress relief and better
          <br />
          sleep.
        </p>
        <p className={styles.text}>
          We consulted the wisdom of Master Herbalists, Ph.D. Chemists, <br />
          and Cannabis Experts to develop this ﬁrst-of-its-kind formula--
          <br />
          adaptogens, non-psychoactive cannabis, edible essential oils, and
          <br />
          immune-lifting mushrooms are in one supercharged elixir.
        </p>
        <p className={styles.text}>
          Take it now for instant stress or insomnia relief, and take it long
          <br />
          term to let the power of plants help you achieve optimal health.
        </p>
      </div>
    </section>
  );
};

export default About;
