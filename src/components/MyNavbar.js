import React from "react";
import ButtonLogo from "./ButtonLogo";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import Logo from "./Logo";
import useGlobalState from "../hooks/useGlobalState";
import { useNavigate } from "react-router-dom";

export default function MyNavbar({ swichShowNavbar }) {
  const navigate = useNavigate();
  const { session, logout } = useGlobalState();
  const closeSession = () => {
    logout();
    navigate("/");
  };
  return (
    <header className="p-6 font-semibold">
      <div className="flex h-[34px] justify-between">
        <div className="flex">
          <Logo className={`mr-[70px]`} />
          <ButtonLogo onClick={swichShowNavbar}>
            <FaBars />
          </ButtonLogo>
        </div>
        <div className="flex items-center">
          <div>Switch|</div>
          <div>Bienvenido, {session.fullname}</div>
          <ButtonLogo className="ml-4" onClick={closeSession} title="Cerrar Sesion">
            <FaSignOutAlt/>
          </ButtonLogo>
        </div>
      </div>
    </header>
  );
}
