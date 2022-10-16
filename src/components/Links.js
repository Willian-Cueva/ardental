import ButtonLink from "./ButtonLink";
import styles from "./styles/Links.module.css";
import SubTitleLink from "./SubTitleLink";
import {FaUserEdit, FaUserFriends, FaUsersCog} from "react-icons/fa"
import useGlobalState from "../hooks/useGlobalState";

export default function Links() {
  const {isSuperAdministrer} = useGlobalState();
  const per = isSuperAdministrer();
  return (
    <div className={`w-[260px] px-4 ${styles.navbar}`}>
      <SubTitleLink title="Panel de Administración" />
      <ButtonLink title="Registro de Pacientes" to="/register-patient" />
      <ButtonLink title="Pacientes" to="/patients" icon={<FaUserFriends/>}/>
      <ButtonLink title="Mi Perfil" to="/my-profile" icon={<FaUserEdit/>}/>
      {per && <ButtonLink title="Usuarios" to="/gestion-users" icon={<FaUsersCog/>} />}
    </div>
  );
}
