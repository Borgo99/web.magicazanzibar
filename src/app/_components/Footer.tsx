"use client";

import React from "react";
import styles from "../_styles/components.module.css";
import Socials from "./Socials";
import { Link, usePathname } from "@/i18n/routing";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className={styles.footer}>
      <Link href={`${pathname.slice(0, 1)}`}>Home</Link>
      <Link href={`${pathname}/#tours`}>Tours</Link>
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
