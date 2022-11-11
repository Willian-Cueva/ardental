import ButtonLink from "./ButtonLink";
import styles from "./styles/Links.module.css";
import SubTitleLink from "./SubTitleLink";
import {FaUserEdit, FaUserFriends, FaUsersCog} from "react-icons/fa"
import useGlobalState from "../hooks/useGlobalState";
import { BG_DARK, TEXT_DARK } from "../helpers/constants";
import { useState } from "react";

export default function Links() {
  const {isSuperAdministrer,themeColor} = useGlobalState();
  const [control, setControl] = useState([false,false,false,false]);
  const per = isSuperAdministrer();
  const clicked = (num) =>{
    const getState = JSON.parse(JSON.stringify(control));
    for(let i=0;i<control.length;i++){
      getState[i]=num===i;      
    }
    setControl(getState);
  }
  return (
    <div className={`w-[260px] px-4 ${styles.navbar} ${themeColor.theme==="dark"&&`${BG_DARK} ${TEXT_DARK}`}`}>
      <SubTitleLink title="Panel de Administración" />
      <ButtonLink title="Registro de Pacientes" to="/register-patient" selected={control[0]} clicked={clicked} num={0}/>
      <ButtonLink title="Pacientes" to="/patients" icon={<FaUserFriends/>} selected={control[1]} clicked={clicked} num={1}/>
      <ButtonLink title="Mi Perfil" to="/my-profile" icon={<FaUserEdit/>} selected={control[2]} clicked={clicked} num={2}/>
      {per && <ButtonLink title="Usuarios" to="/gestion-users" icon={<FaUsersCog/>} selected={control[3]} clicked={clicked} num={3}/>}
    </div>
  );
}
