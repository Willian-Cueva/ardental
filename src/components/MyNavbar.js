import React from "react";
import ButtonLogo from "./ButtonLogo";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo";

export default function MyNavbar({ swichShowNavbar }) {
  return (
    <header className="p-6 font-semibold">
      <div className="flex h-[34px] justify-between">
        <div className="flex">
          <Logo className={`mr-[70px]`}/>
          <ButtonLogo onClick={swichShowNavbar}>
            <FaBars />
          </ButtonLogo>
        </div>
        <div className="flex items-center">
          <div>Switch|</div>
          <div>Bienvenido, Willian Cueva</div>
        </div>
      </div>
    </header>
  );
}
