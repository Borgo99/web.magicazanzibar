"use client";

import React from "react";
import { ITour } from "./interfaces";
import Button from "./Button";
import { usePathname, useRouter } from "next/navigation";
import styles from "../_styles/components.module.css";

interface ITourList {
  tours: ITour[];
}
const TourList = ({ tours }: ITourList) => {
  const pathname = usePathname();
  const router = useRouter();
  const tourPageUrl = (tour: ITour) =>
    `${pathname.slice(0, 3)}/${tour.id}/${tour.slug}`;

  return (
    <ul className={styles.toursList}>
      {tours.map((tour) => (
        <li
          key={tour.slug}
          className={styles.toursList__card}
          onClick={() => {
            router.push(tourPageUrl(tour));
          }}
        >
          {/* <img src={`/${tour.imageFolder}/1.jpg`} alt={`${tour.title} photo`} /> */}
          <div
            className={styles.toursList__card__img}
            style={{ backgroundImage: `url(/${tour.imageFolder}/1.jpg)` }}
          ></div>
          <h2>{tour.title}</h2>
          <Button href={tourPageUrl(tour)}>Read more</Button>
        </li>
      ))}
    </ul>
  );
};

export default TourList;
