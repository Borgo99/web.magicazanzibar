import styles from "../../../_styles/pages.module.css";
import data from "../../../../data/tours.json";
import { ITour } from "@/app/_components/interfaces";
import BookButton from "@/app/_components/BookButton";

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
    <main className={styles.home}>
      <section className={styles.home__header}>
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
          <p>
            <BookButton text="Book with us" tour_name={tour.title} /> or{" "}
            <BookButton text="Contact us" /> for more info
          </p>
        </div>
        <div className={styles.home__header__images}>
          <img
            src={`/${tour.imageFolder}/1.jpg`}
            alt={`${tour.title} photo`}
            loading={"lazy"}
          />
          <img
            src={`/${tour.imageFolder}/2.jpg`}
            alt={`${tour.title} photo`}
            loading={"lazy"}
          />
          <img
            src={`/${tour.imageFolder}/3.jpg`}
            alt={`${tour.title} photo`}
            loading={"lazy"}
          />
        </div>
      </section>
    </main>
  );
}
