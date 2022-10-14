import ButtonLink from "./ButtonLink";
import styles from "./styles/Links.module.css";
import SubTitleLink from "./SubTitleLink";
import {FaUserFriends, FaUsersCog} from "react-icons/fa"
import useGlobalState from "../hooks/useGlobalState";

export default function Links() {
  const {isSuperAdministrer} = useGlobalState();
  const per = isSuperAdministrer();
  return (
    <div className={`w-[260px] px-4 ${styles.navbar}`}>
      <SubTitleLink title="Dashboard" />
      <ButtonLink title="Registro de Pacientes" to="/register-patient" />
      <ButtonLink title="Pacientes" to="/patients" icon={<FaUserFriends/>}/>
      {per && <ButtonLink title="Usuarios" to="/gestion-users" icon={<FaUsersCog/>} />}
    </div>
  );
}
