import styles from "./Info.module.scss";
import Button from "../Button/Button";
const Info = () => {
  return (
    <section className={styles.root}>
      <div className={styles.background}></div>
      <div className={styles.info}>
        <div className={styles.container}>
          <h2 className={styles.title}>Not Your Average Hemp</h2>
          <p className={styles.text}>
            Our hemp is organically grown and then expertly extracted using the
            whole plant- mainly the flower, not just stalks and leaves. This
            creates a potent, ultra-pure, full-spectrum extract with
            cannabinoids, terpenes, and flavonoids. Other hemp extraction
            methodologies damage the plant in favor of quick mass production. We
            take care of our hemp by processing it slowly to yield the most
            efficacious medicine possible.
          </p>
          <div className={styles.benefits}>
            <div className={styles.list}>
              <span className={styles.item}>Organic Full Spectrum Hemp</span>
              <span className={styles.item}>
                Potent Medicinal Cannabinoid Profile
              </span>
            </div>
            <div className={styles.list}>
              <span className={styles.item}>Premium Extraction</span>
              <span className={styles.item}>No High, Just Bliss</span>
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
