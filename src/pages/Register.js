import React from "react";
import styles from "./styles/Login.module.css";
import Logo from "../components/Logo";
import InputValidateEmail from "../components/InputValidateEmail";
import InputPassLogin from "../components/InputPassLogin";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Input from "../components/Input";

export default function Register() {
  return (
    <main className={` w-full bg-[#E3F2FD] ${styles.main} p-8`}>
      <section className="max-w-[473px] bg-white rounded-xl border border-[#90caf983] ml-auto mr-auto p-[24px] flex flex-col items-center justify-center">
        <Logo className={`mb-10 font-bold uppercase`} />
        <div className={`${styles.title} mb-4`}>Registro</div>
        <div className={`${styles.subtitle} mb-4`}>
          Ingresa tus credenciales para registrarte
        </div>
        <div className="grid grid-cols-10 gap-2 mb-4">
          <Input label="Nombre" placeholder="Nick" className="col-span-5" />
          <Input
            label="Apellido"
            placeholder="Fernandez"
            className="col-span-5"
          />
          <Input
            label="Cédula"
            placeholder="1150999999"
            className="col-span-5"
          />
          <Input
            label="Nacimiento"
            placeholder="1150999999"
            type="date"
            className="col-span-5"
          />
          <Input
            label="Celular"
            placeholder="0992424242"
            className="col-span-5"
          />
        </div>
        <InputValidateEmail />
        <InputPassLogin />
        <InputPassLogin text="Repita la contraseña"/>
        <Button
          className={`w-full bg-[#673AB7] py-2 px-5 rounded text-white font-medium ${styles.styleButtonLogin} mb-4 hover:bg-[#5E35B1]`}
        >
          Registrarse
        </Button>
        <div className={`${styles.hr} mb-4`}></div>
        <Link to={"/login"} className={`${styles.dontHaveAccount}`}>
          ¿Ya tienes cuenta?, Ingresa.
        </Link>
      </section>
    </main>
  );
}
