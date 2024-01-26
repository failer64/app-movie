import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import logo from "@/public/logo.svg";
import acc from "@/public/acc.svg";
import favorite from "@/public/favorite.svg";
import home from "@/public/home.svg";
import movie from "@/public/movie.svg";
import src from "@/public/src.svg";
import tv from "@/public/tv.svg";

function SiderBar() {
  return (
    <aside className={styles.sider}>
      <div className={styles.wrapper}>
        <Link href={"/"} className={styles.logo}>
          <Image src={logo} alt="logo TvoЁ" />
        </Link>
        <nav>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href={"/"}>
                <Image src={src} alt="icon search" />
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={"/"}>
                <Image src={home} alt="icon home" />
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={"/"}>
                <Image src={movie} alt="icon movie" />
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={"/"}>
                <Image src={tv} alt="icon tv" />
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={"/"}>
                <Image src={favorite} alt="icon favorite" />
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={"/"}>
                <Image src={acc} alt="icon account" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default SiderBar;
