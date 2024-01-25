import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import poster from "@/public/film/poster.png";
import label from "@/public/film/label.svg";

type Props = {
  params: {
    id: string;
  };
};

const item = {
  name: "Уэнсдэй ",
  id: 4365427,
  poster,
  label,
  rating: 10,
  slogan:
    "Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы остановить местного серийного убийцу и раскрыть тайну родителей.",
  description:
    "Детективная история, наполненная сверхъестественными силами. Главная героиня сериала — Уэнздей Аддамс, одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов, которая становится студенткой академии «Невермор». Она пытается овладеть своими проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра, что терроризирует местный городок Джерико, а также разгадать тайну, в которую были втянуты её родители 32 года назад, — и всё это на фоне её новых и очень запутанных отношений в академии.",
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const data = await Promise.resolve(item);
  return {
    title: data.name,
  };
}

async function getData(id: string) {
  //   const response = await fetch(
  //     `https://kinopoiskapiunofficial.tech/api/v2.2/films/` + id,
  //     {
  //       headers: { "X-API-KEY": "a16e5ea3-7e40-47b8-a8dd-0a3e2a36e67d" },
  //       next: {
  //         revalidate: 60,
  //       },
  //     }
  //   );
  //   const data = await response.json();
  const data = await Promise.resolve(item);
  return data;
}

export default async function Post({ params: { id } }: Props) {
  const film = await getData(id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.label}>
          <Image src={film.label} alt={"Film label"} />
        </div>
        <div className={styles.slogan}>{film.slogan}</div>
        <Link href={`/film/${film.id}`} className="button button_blue">
          <span>Смотреть</span>
        </Link>
        <Link href={`/film/${film.id}`} className="button button_common">
          <span>О фильме</span>
        </Link>
      </div>
      <div className={styles.bg}>
        <Image src={film.poster} alt={"Film poster"} />
      </div>
      <div className={styles.description}>
        <h2 className={styles.title}>Описание</h2>
        <p className={styles.text}>{film.description}</p>
      </div>
    </div>
  );
}
