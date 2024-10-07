import React from "react";
import styles from "../_styles/components.module.css";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="/">Home</a>
      <a href="/#tours">Check our tours</a>
      <Socials />
      <p>
        Contact us to:{" "}
        <a href="mailto:magicazanzibar33@gmail.com">
          magicazanzibar33@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Footer;
