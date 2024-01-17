import Button from "../Button/Button";
import styles from "./Banner.module.scss";

import forbes from "../../img/banner/forbes.svg";
import rolling from "../../img/banner/rolling.svg";
import allure from "../../img/banner/allure.svg";
import byrdie from "../../img/banner/byrdie.svg";
import popsugar from "../../img/banner/porsugar.svg";
import elle from "../../img/banner/elle.svg";
import gq from "../../img/banner/gq.svg";
import fast from "../../img/banner/fast.svg";
const Banner = () => {
  return (
    <section className={styles.root}>
      <div className={styles.upper}>
        <div className={styles.background}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              Potent Plant Elixirs for <br /> Body & Spirit
            </h1>
            <p className={styles.text}>
              Tinctures of balancing adaptogens, <br /> healing cannabinoids
              &#40;CBD, CBDa, <br /> CBN&#41;, and mood-enhancing terpenes
            </p>
            <Button className={styles.button}>Shop our Products</Button>
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.content}>
          <img src={forbes} alt="forbes" />
          <img src={rolling} alt="rolling" />
          <img src={allure} alt="allure" />
          <img src={byrdie} alt="byrdie" />
          <img className={styles.popsugar} src={popsugar} alt="popsugar" />
          <img src={elle} alt="elle" />
          <img src={gq} alt="gq" />
          <img src={fast} alt="fast" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
