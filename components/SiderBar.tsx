import Image from "next/image";
import Link from "next/link";
import logo from "./../public/logo.svg";
import acc from "./../public/acc.svg";
import favorite from "./../public/favorite.svg";
import home from "./../public/home.svg";
import movie from "./../public/movie.svg";
import src from "./../public/src.svg";
import tv from "./../public/tv.svg";

const siderStyle: React.CSSProperties = {
  position: "relative",
  flex: "0 0 215px",
  padding: "40px 55px",
};

const logoStyle: React.CSSProperties = {
  display: "block",
  margin: "0 0 110px 0",
};

const itemStyle: React.CSSProperties = {
  margin: "0 0 38px 0",
};

const sidebarWrapper: React.CSSProperties = {
  position: "fixed",
  textAlign: "center",
  transform: "translateX(38%)",
};

function SiderBar() {
  return (
    <aside style={siderStyle}>
      <div style={sidebarWrapper}>
        <Link href={"/"} style={logoStyle}>
          <Image src={logo} alt="logo TvoЁ" />
        </Link>
        <nav>
          <ul>
            <li style={itemStyle}>
              <Link href={"/"}>
                <Image src={src} alt="icon search" />
              </Link>
            </li>
            <li style={itemStyle}>
              <Link href={"/"}>
                <Image src={home} alt="icon home" />
              </Link>
            </li>
            <li style={itemStyle}>
              <Link href={"/"}>
                <Image src={movie} alt="icon movie" />
              </Link>
            </li>
            <li style={itemStyle}>
              <Link href={"/"}>
                <Image src={tv} alt="icon tv" />
              </Link>
            </li>
            <li style={itemStyle}>
              <Link href={"/"}>
                <Image src={favorite} alt="icon favorite" />
              </Link>
            </li>
            <li>
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
