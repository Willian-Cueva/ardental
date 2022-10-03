import img from "../assets/imgs/logo.png"
import styles from "./styles/Loader.module.css"
export default function Loader() {
  return (
    <img src={img} alt="Cargando..." className={`${styles.loader}`}/>
  )
}
