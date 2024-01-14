import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import instagram from "../../img/footer/instagram.svg";
import pinterest from "../../img/footer/pinterest.svg";
import mastercard from "../../img/footer/payment/mastercard.svg";
import visa from "../../img/footer/payment/visa.svg";
const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.left}>
        <div className={styles.container}>
          <ul className={styles.links}>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                FAQs
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                Contact Us
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                Shipping & Returns
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                Privacy Policy
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                Terms of Service
              </Link>
            </li>
          </ul>
          <div className={styles.social}>
            <img className={styles.img} src={pinterest} alt="pinterest" />
            <img className={styles.img} src={instagram} alt="instagram" />
          </div>
          <div className={styles.payment}>
            <img src={mastercard} alt="mastercard" />
            <img src={visa} alt="visa" />
          </div>
          <div className={styles.copyright}>
            <span>© 2021, Prismatic Plants</span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.upper}>
          <div className={styles.content}>
            <h2 className={styles.title}>Embrace the Strange</h2>
            <p className={styles.text}>
              Sending you content straight from the wild & weird minds behind
              Prismatic Plants. Sign up and receive a code <br /> for 10% off
              your first order.
            </p>
            <form className={styles.form}>
              <input
                className={styles.input}
                placeholder="First name"
                type="text"
              ></input>
              <input
                className={styles.input}
                placeholder="Email adress (required)"
                type="email"
              ></input>
              <button className={styles.button}>Subscribe</button>
            </form>
          </div>
        </div>
        <div className={styles.lower}>
          <div className={styles.content}>
            <h2 className={styles.title}>Before You Go</h2>
            <div className={styles.info}>
              <p className={styles.text}>
                *These statements have not been evaluated by the Food and Drug
                Administration. This <br /> product is not intended to diagnose,
                treat, cure, or prevent any disease.
              </p>
              <p className={styles.text}>
                Our products contain less than 0.3% THC and are only intended
                for use if 18 years old <br /> and above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
