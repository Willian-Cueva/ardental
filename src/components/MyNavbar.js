import React from "react";
import logo from "../assets/imgs/logo.png";
import ButtonLogo from "./ButtonLogo";
import { FaBars } from "react-icons/fa";

export default function MyNavbar() {
  return (
    <header className="p-6 font-semibold">
      <div className="flex h-[34px] justify-between">
        <div className="flex">
          <span className="flex items-center mr-[70px]">
            <img src={logo} alt="logotipo" className="h-7 mr-2" />
            <label className="text-xl ">Ardental</label>
          </span>
          <ButtonLogo>
            <FaBars />
          </ButtonLogo>
        </div>
        <div className="flex items-center">
          <div>sitch</div>
          <div>Bienvenido, Willian Cueva</div>
        </div>
      </div>
    </header>
  );
}
