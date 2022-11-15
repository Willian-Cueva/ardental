import img from "../assets/imgs/logo.png";
import loaderImg from "../assets/imgs/loading.png";
import styles from "./styles/Loader.module.css";
export default function Loader({
  logo = true,
  width = "300px",
  height = "300px",
  text,
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        width={width}
        height={height}
        src={logo ? img : loaderImg}
        alt="Cargando..."
        className={`${logo ? styles.loader : styles.loading} object-cover`}
      />
      {text&&<div className="py-2 px-3 rounded-xl mt-2">
        <p className="text-[#2196F3] font-semibold text-xl">{text}</p>
      </div>}
    </div>
  );
}
