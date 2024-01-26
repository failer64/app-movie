"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { Carousel } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

type PropsType = {
  films: any[];
};

const settings = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  //autoplay: true,
  pauseOnHover: true,
  //lazyLoad: true,
  arrows: false,
  dots: false,
  infinite: false,
  //nextArrow: <ArrowNext />,
  //prevArrow: <ArrowPrev />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Slider: React.FC<PropsType> = ({ films }) => {
  const router = useRouter();
  return (
    <>
      {!!films.length && (
        <Carousel {...settings} draggable>
          {films.map((film) => (
            <div
              onDoubleClick={() => router.push(`film/${film.id}`)}
              key={film.id}
              className={styles.slide}
            >
              <div className={styles.poster}>
                <Image src={film.poster} alt={`${film.name} poster`} />
                <div className={styles.rating}>{film.rating}</div>
              </div>
              <h4 className={styles.label}>{film.name}</h4>
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};
export default Slider;
