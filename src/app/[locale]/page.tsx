"use client";

import { useTranslations } from "next-intl";
import Socials from "../_components/Socials";
import styles from "../_styles/pages.module.css";
import { baseUrl } from "../_components/baseUrl";

type Props = {
  params: { locale: string };
};
export default function Home({ params: {} }: Readonly<Props>) {
  const t = useTranslations("Home");

  return (
    <section className={styles.home}>
      <section className={styles.home__header}>
        <div className={styles.home__header__logo}>
          <img
            src={`${baseUrl}/logo.png`}
            alt="Magica Zanzibar Logo"
            height={400}
            width={400}
          />
          <h2>{t("subtitle")}</h2>
        </div>
        <div className={styles.home__header__socials}>
          <Socials />
        </div>
        <div className={styles.home__header__images}>
          <img
            src={`${baseUrl}/home1.webp`}
            alt="Zanzibar Tour"
            loading={"lazy"}
            width={250}
            height={300}
          />
          <img
            src={`${baseUrl}/home2.webp`}
            alt="Zanzibar Tour"
            width={250}
            height={300}
          />
          <img
            src={`${baseUrl}/home3.webp`}
            alt="Zanzibar Tour"
            loading={"lazy"}
            width={250}
            height={300}
          />
        </div>
      </section>
    </section>
  );
}
