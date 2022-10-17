import ButtonLink from "./ButtonLink";
import styles from "./styles/Links.module.css";
import SubTitleLink from "./SubTitleLink";
import {FaUserEdit, FaUserFriends, FaUsersCog} from "react-icons/fa"
import useGlobalState from "../hooks/useGlobalState";
import { BG_DARK, TEXT_DARK } from "../helpers/constants";

export default function Links() {
  const {isSuperAdministrer,themeColor} = useGlobalState();
  const per = isSuperAdministrer();
  return (
    <div className={`w-[260px] px-4 ${styles.navbar} ${themeColor.theme==="dark"&&`${BG_DARK} ${TEXT_DARK}`}`}>
      <SubTitleLink title="Panel de Administración" />
      <ButtonLink title="Registro de Pacientes" to="/register-patient" />
      <ButtonLink title="Pacientes" to="/patients" icon={<FaUserFriends/>}/>
      <ButtonLink title="Mi Perfil" to="/my-profile" icon={<FaUserEdit/>}/>
      {per && <ButtonLink title="Usuarios" to="/gestion-users" icon={<FaUsersCog/>} />}
    </div>
  );
}
