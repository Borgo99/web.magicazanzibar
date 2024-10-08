"use client";

import React from "react";
import styles from "../_styles/pages.module.css";
import { ITour } from "@/app/_components/interfaces";
import BookButton from "@/app/_components/BookButton";
import { useTranslations } from "next-intl";

const TourSection = ({ tour }: { tour: ITour }) => {
  const t = useTranslations("TourPage");

  return (
    <div className={styles.tour}>
      <h1>{tour.title}</h1>
      <p>{tour.content}</p>
      <div className={styles.tour__list}>
        <h2>{t("highlights")}</h2>
        <ul>
          {tour.highlights.map((item) => (
            <li key={item.title}>
              <b>{item.title}</b>: {item.description}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.tour__list}>
        <h2>{t("what_to_expect")}</h2>
        <ul>
          {tour.whatToExpect.map((item) => (
            <li key={item.title}>
              <b>{item.title}</b>: {item.description}
            </li>
          ))}
        </ul>
      </div>
      <p
        style={{ lineHeight: 1.8, textAlign: "center" }}
        className={styles.tourpage__bookBtns}
      >
        <BookButton text={t("book")} tour_name={tour.title} /> {t("or")}{" "}
        <BookButton text={t("contact_us")} />
      </p>
    </div>
  );
};

export default TourSection;
