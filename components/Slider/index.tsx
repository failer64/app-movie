import styles from "./style.module.scss";
import Slider from "./Slider";
import poster from "@/public/Card.jpg";

async function getData(year: number, month: string) {
  //   const response = await fetch(
  //     `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${month}`,
  //     {
  //       headers: { "X-API-KEY": "a16e5ea3-7e40-47b8-a8dd-0a3e2a36e67d" },
  //       next: {
  //         revalidate: 60,
  //       },
  //     }
  //   );
  //   const data = await response.json();
  const data = await Promise.resolve([
    {
      name: "Синий жук",
      id: 1,
      poster,
      rating: 10,
    },
    {
      name: "Домашняя игра",
      id: 2,
      poster,
      rating: 6.9,
    },
    {
      name: "Салют 7",
      id: 3,
      poster,
      rating: 5.8,
    },
    {
      name: "Поймай меня, если сможешь",
      id: 4,
      poster,
      rating: 7,
    },
    {
      name: "Зеленая миля",
      id: 5,
      poster,
      rating: 10,
    },
  ]);
  return data;
}

export default async function FilmsRow() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];

  const films = await getData(year, month);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Новинки</h2>
      <Slider films={films} />
    </div>
  );
}
