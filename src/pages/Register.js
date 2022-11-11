import React, { useState } from "react";
import styles from "./styles/Login.module.css";
import Logo from "../components/Logo";
import InputValidateEmail from "../components/InputValidateEmail";
import InputPassLogin from "../components/InputPassLogin";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import swal from "sweetalert";
import { registerUser } from "../services/Users.service";
import Modal from "../components/Modal";
import Loader from "../components/Loader";

export default function Register() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const sendUserRegister =async () => {
    setShowModal(true);
    const d = document,
      $name = d.getElementById("id-inp-name-register"),
      $lastname = d.getElementById("id-inp-lastname-register"),
      $dni = d.getElementById("id-inp-dni-register"),
      $sex = d.getElementById("id-inp-sex-register"),
      $dateBorn = d.getElementById("id-inp-dateBorn-register"),
      $phone = d.getElementById("id-inp-phone-register"),
      $email = d.getElementById("id-inp-email-register"),
      $password = d.getElementById("id-inp-password-register"),
      $repeatPassword = d.getElementById("id-inp-repeatPassword-register");

    const user = {
      name: $name.value,
      lastname: $lastname.value,
      dni: $dni.value,
      sex: $sex.value,
      dateBorn: $dateBorn.value,
      phone: $phone.value,
      email: $email.value,
      password: $password.value,
      repeatPassword: $repeatPassword.value,
    };
    
    
    await registerUser(user)
      .then(async (data) => {
        if (data.status === "ok") {
          await swal({
            title: "Registro Satisfactorio",
            text: "El usuario se ha registrado exitosamente",
            icon: "success",
            timer: "6000",
          });
          navigate("/login");
          // window.location.replace("/#/login")
        } else {
          swal({
            text: data.status,
            icon: "info",
            timer: "6000",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: "(front) Ha ocurrido un inconveniente",
          text: "(front) Comunícate con tu servicio técnico.",
          icon: "info",
          timer: "6000",
        });
      });
      setShowModal(false);
  };

  return (
    <main className={` w-full bg-[#E3F2FD] ${styles.main} p-8`}>
      <Modal show={showModal}>
        <Loader logo={false}/>
      </Modal>
      <section className="max-w-[473px] bg-white rounded-xl border border-[#90caf983] ml-auto mr-auto p-[24px] flex flex-col items-center justify-center">
        <Logo className={`mb-10 font-bold uppercase`} />
        <div className={`${styles.title} mb-4`}>Registro</div>
        <div className={`${styles.subtitle} mb-4`}>
          Ingresa tus credenciales para registrarte
        </div>
        <div className="grid grid-cols-10 gap-2 mb-4">
          <Input
            label="Nombre"
            placeholder="Nick"
            className="col-span-5"
            id={"id-inp-name-register"}
          />
          <Input
            label="Apellido"
            placeholder="Fernandez"
            className="col-span-5"
            id={"id-inp-lastname-register"}
          />
          <Input
            label="Cédula"
            placeholder="1150999999"
            className="col-span-5"
            id={"id-inp-dni-register"}
          />
          <Input
          id={"id-inp-sex-register"}
          label="Sexo"
          type="select"
          className="col-span-5"
          values={["Masculino", "Femenino", "Otro"]}
        />
          <Input
            label="Nacimiento"
            placeholder="1150999999"
            type="date"
            className="col-span-5"
            id={"id-inp-dateBorn-register"}
          />
          <Input
            label="Celular"
            placeholder="0992424242"
            className="col-span-5"
            id={"id-inp-phone-register"}
          />
        </div>
        <InputValidateEmail id={"id-inp-email-register"} />
        <InputPassLogin id={"id-inp-password-register"} />
        <InputPassLogin
          text="Repita la contraseña"
          id={"id-inp-repeatPassword-register"}
        />
        <Button
          onclick={sendUserRegister}
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
