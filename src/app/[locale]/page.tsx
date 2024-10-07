"use client";

import { useTranslations } from "next-intl";
// import fs from "fs";
// import path from "path";
import Socials from "../_components/Socials";
import styles from "../_styles/pages.module.css";

type Props = {
  params: { locale: string };
};
export default function Home({ params: {} }: Readonly<Props>) {
  const t = useTranslations("Home");
  // const jsonData = fs.readFileSync(
  //   path.join(process.cwd(), "src/data", "tours.json"),
  //   "utf-8"
  // );
  // const tours: Record<string, ITour[]> = JSON.parse(jsonData);

  return (
    <main className={styles.home}>
      <section className={styles.home__header}>
        <div className={styles.home__header__logo}>
          <img src="./logo.png" alt="Magica Zanzibar Logo" />
          <h2>{t("subtitle")}</h2>
          <div className={styles.home__header__socials}>
            <Socials />
          </div>
        </div>
        <div className={styles.home__header__images}>
          <img src="./home1.webp" alt="Zanzibar Tour" loading={"lazy"} />
          <img src="./home2.webp" alt="Zanzibar Tour" loading={"lazy"} />
          <img src="./home3.webp" alt="Zanzibar Tour" loading={"lazy"} />
        </div>
      </section>
    </main>
  );
}
