"use client";

import React from "react";
import styles from "../_styles/components.module.css";
import BookButton from "./BookButton";
import Socials from "./Socials";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("Aboutus");

  return (
    <div className={styles.aboutus}>
      <h1>{t("title")}</h1>
      <p>{t("content1")}</p>
      <p>{t("content2")}</p>
      <Socials />
      <div>
        <BookButton text={t("contact_us")} />
      </div>
    </div>
  );
};

export default AboutUs;
