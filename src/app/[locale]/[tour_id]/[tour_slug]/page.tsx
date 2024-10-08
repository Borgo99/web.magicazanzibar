import styles from "../../../_styles/pages.module.css";
import data from "../../../../data/tours.json";
import { ITour } from "@/app/_components/interfaces";
import BookButton from "@/app/_components/BookButton";
import Image from "next/image";
import { baseUrl } from "@/app/_components/baseUrl";
import classNames from "@/util/classNames";

const tours: Record<string, ITour[]> = data as Record<string, ITour[]>;

export async function generateStaticParams() {
  const staticParams: { locale: string; tour_id: string; tour_slug: string }[] =
    [];

  ["en", "it"].forEach((lang) =>
    tours[lang].forEach((tour) =>
      staticParams.push({
        locale: lang,
        tour_id: `${tour.id}`,
        tour_slug: tour.slug,
      })
    )
  );
  return staticParams;
}

interface Params {
  tour_slug: ITour["slug"];
  tour_id: ITour["id"];
  locale: string;
}
export default function TourPage({ params }: { params: Params }) {
  const { tour_id } = params;
  const tour = tours[params.locale].find(
    (tour) => tour.id === Number(tour_id)
  )!;

  return (
    <section className={styles.home}>
      <section className={classNames(styles.home__header, styles.tourpage)}>
        <div className={styles.tour}>
          <h1>{tour.title}</h1>
          <p>{tour.content}</p>
          <div className={styles.tour__list}>
            <h2>Highlights</h2>
            <ul>
              {tour.highlights.map((item) => (
                <li key={item.title}>
                  <b>{item.title}</b>: {item.description}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.tour__list}>
            <h2>What To Expect</h2>
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
            <BookButton text="Book with us" tour_name={tour.title} /> or{" "}
            <BookButton text="Contact us" />
          </p>
        </div>
        <div className={styles.home__header__images}>
          <img
            src={`${baseUrl}/${tour.imageFolder}/1.webp`}
            alt={`${tour.title} photo`}
            loading={"lazy"}
          />
          <img
            src={`${baseUrl}/${tour.imageFolder}/2.webp`}
            alt={`${tour.title} photo`}
            loading={"lazy"}
          />
          <img
            src={`${baseUrl}/${tour.imageFolder}/3.webp`}
            alt={`${tour.title} photo`}
            loading={"lazy"}
          />
        </div>
      </section>
    </section>
  );
}
