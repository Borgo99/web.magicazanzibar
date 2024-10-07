import React from "react";
import styles from "../_styles/components.module.css";
import WebsiteName from "./WebsiteName";
import LocaleSwitcher from "./LocaleSwitcher";
import { Link } from "@/i18n/routing";

const Headbar = () => {
  return (
    <div className={styles.headbar}>
      <WebsiteName />
      <div className={styles.headbar__nav}>
        <Link href="/">Home</Link>
        <Link href="/#tours">Tours</Link>
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default Headbar;
