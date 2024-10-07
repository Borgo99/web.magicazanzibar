"use client";
import { useLocale, useTranslations } from "next-intl";
import styles from "../_styles/components.module.css";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import data from "../../data/tours.json";
import { ITour } from "@/app/_components/interfaces";

const tours: Record<string, ITour[]> = data as Record<string, ITour[]>;

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as "en" | "it";
    const tourId = params["tour_id"];
    if (tourId) {
      router.replace(
        `/${tourId}/${
          tours[newLocale].find((tour) => tour.id == Number(tourId))!.slug
        }`,
        { locale: newLocale }
      );
      return;
    }
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <select
      defaultValue={locale}
      onChange={onLocaleChange}
      className={styles.localeSwitcher}
    >
      {["en", "it"].map((lang) => (
        <option key={lang} value={lang}>
          {t("locale", { locale: lang })}
        </option>
      ))}
    </select>
  );
}
