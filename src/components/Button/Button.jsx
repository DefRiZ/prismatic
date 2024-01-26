import { motion } from "framer-motion";
import { forwardRef } from "react";
import styles from "./Button.module.scss";

export const Button = forwardRef(({ children }, ref) => {
  return (
    <button className={styles.button} ref={ref}>
      {children}
    </button>
  );
});

export const MButton = motion(Button);
