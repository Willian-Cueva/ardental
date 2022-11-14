import img from "../assets/imgs/logo.png";
import loaderImg from "../assets/imgs/loading.png";
import styles from "./styles/Loader.module.css";
export default function Loader({
  logo = true,
  width = "4rem",
  height = "4rem",
  text
}) {
  return (
    <div>
      <img
      width={width} height={height}
        src={logo ? img : loaderImg}
        alt="Cargando..."
        className={`${
          logo ? styles.loader : styles.loading
        } object-cover`}
      />
      <p className="text-white">{text}</p>
    </div>
  );
}
