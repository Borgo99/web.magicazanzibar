"use client";

import React from "react";
import styles from "../_styles/components.module.css";
import WebsiteName from "./WebsiteName";
import LocaleSwitcher from "./LocaleSwitcher";
import { Link, usePathname } from "@/i18n/routing";

const Headbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.headbar}>
      <WebsiteName />
      <div className={styles.headbar__nav}>
        <Link href={`${pathname.slice(0, 1)}`}>Home</Link>
        <Link href={`${pathname}#tours`}>Tours</Link>
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default Headbar;
