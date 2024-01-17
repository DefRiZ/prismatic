import Button from "../Button/Button";
import styles from "./Shop.module.scss";

const Shop = () => {
  return (
    <section className={styles.root}>
      <div className={styles.light}>
        <div className={styles.container}>
          <h2 className={styles.title}>Meet Good Day</h2>
          <p className={styles.text}>
            Anxiety soothing full <br /> spectrum hemp oil (CBD, <br /> CBDa)
            and energizing <br />
            adaptogenic herbs in our <br /> daytime tincture
          </p>
          <Button>Shop Day</Button>
        </div>
      </div>
      <div className={styles.dark}>
        <div className={styles.container}>
          <h2 className={styles.title}>Meet Good Night</h2>
          <p className={styles.text}>
            Our nighttime CBD tincture <br /> for sleep support, with <br />
            calming herbs, immune-enhancing <br /> adaptogens, and <br />
            stress-relieving <br /> cannabinoids (CBD, CBN)
          </p>
          <Button>Shop Night</Button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
