import ButtonLink from "./ButtonLink";
import styles from "./styles/Links.module.css";
import SubTitleLink from "./SubTitleLink";
import {FaUserFriends} from "react-icons/fa"

export default function Links() {
  return (
    <div className={`w-[260px] px-4 ${styles.navbar}`}>
      <SubTitleLink title="Dashboard" />
      <ButtonLink title="Registro de Pacientes" to="/register-patient" />
      <ButtonLink title="Pacientes" to="/patients" icon={<FaUserFriends/>}/>
    </div>
  );
}
