//"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { Card, Carousel } from "antd";
import Link from "next/link";

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
  return (
    <>
      {!!films.length && (
        <Carousel {...settings}>
          {films.map((film) => (
            <Link key={film.id} href={`film/${film.id}`}>
              <div className={styles.poster}>
                <Image src={film.poster} alt={`${film.name} poster`} />
              </div>
              <h4 className={styles.label}>{film.name}</h4>
            </Link>
          ))}
        </Carousel>
      )}
    </>
  );
};
export default Slider;
