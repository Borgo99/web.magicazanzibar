"use client";

import React from "react";
import TourList from "../_components/TourList";
import { ITour } from "../_components/interfaces";
import styles from "../_styles/pages.module.css";
import { useTranslations } from "next-intl";

const ToursListSection = ({ tours }: { tours: ITour[] }) => {
  const t = useTranslations("Home");

  return (
    <section className={styles.home__tours} id="tours">
      <h1>{t("popular_tours")}</h1>
      <TourList tours={tours} />
    </section>
  );
};

export default ToursListSection;
