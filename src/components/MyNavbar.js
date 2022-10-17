import React from "react";
import ButtonLogo from "./ButtonLogo";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import Logo from "./Logo";
import useGlobalState from "../hooks/useGlobalState";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { BG_DARK, TEXT_DARK } from "../helpers/constants";
import ToogleTheme from "./ToogleTheme";

export default function MyNavbar({ swichShowNavbar }) {
  const navigate = useNavigate();
  const { session, logout,themeColor } = useGlobalState();
  const closeSession = () => {
    swal({
      title: "Salir",
      text: "¿Está seguro que desea salir del sistema?",
      icon: "info",
      buttons: ["No", "Sí"],
    }).then((res) => {
      if (res) {
        logout();
        navigate("/");
      }
    });
  };
  return (
    <header className={`p-6 font-semibold ${themeColor.theme==="dark"&&`${BG_DARK} ${TEXT_DARK}`}`}>
      <div className="flex h-[34px] justify-between">
        <div className="flex">
          <Logo className={`mr-[70px]`} />
          <ButtonLogo onClick={swichShowNavbar}>
            <FaBars />
          </ButtonLogo>
        </div>
        <div className="flex justify-center items-center">
          <div><ToogleTheme/></div>
          <div>Bienvenido, {session.fullname}</div>
          <ButtonLogo
            className="ml-4"
            onClick={closeSession}
            title="Cerrar Sesion"
          >
            <FaSignOutAlt />
          </ButtonLogo>
        </div>
      </div>
    </header>
  );
}
