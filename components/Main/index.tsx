import Image from "next/image";
import poster from "@/public/poster.png";
import label from "@/public/label.svg";
import styles from "./style.module.scss";
import Link from "next/link";

async function getData() {
  //   const response = await fetch(
  //     "https://kinopoiskapiunofficial.tech/api/v2.2/films/468846",
  //     {
  //       headers: { "X-API-KEY": "a16e5ea3-7e40-47b8-a8dd-0a3e2a36e67d" },
  //       next: {
  //         revalidate: 60,
  //       },
  //     }
  //   );
  //   const data = await response.json();
  const data = await Promise.resolve({
    name: "Индиана Джонс и колесо судьбы",
    id: 4365427,
    poster,
    label,
    description:
      "Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле.",
  });
  return data;
}

export default async function Main() {
  const film = await getData();
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.label}>
          <Image src={film.label} alt={"Film label"} />
        </div>
        <div className={styles.description}>{film.description}</div>
        <Link href={`/film/${film.id}`} className="button button_blue">
          <span>Смотреть</span>
        </Link>
        <Link href={`/film/${film.id}`} className="button button_common">
          <span>О фильме</span>
        </Link>
      </div>
      <div className={styles.bg}>
        <Image
          src={film.poster}
          alt={"Film poster"}
          priority
          placeholder="empty"
        />
      </div>
    </div>
  );
}
