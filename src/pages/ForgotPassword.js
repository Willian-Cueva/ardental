import Button from "../components/Button";
import InputValidateEmail from "../components/InputValidateEmail";
import Logo from "../components/Logo";
import styles from "./styles/Login.module.css";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import { sendEmailUser } from "../services/Users.service";
import swal from "sweetalert";
import { useState } from "react";
import Loader from "../components/Loader";
import { emailValidate } from "../helpers/constants";

export default function ForgotPassword() {
  const [showModal, setShowModal] = useState(false);

  const sendLink = () => {
    setShowModal(true);
    const d = document,
      $email = d.getElementById("id-inp-res-login");
    if (emailValidate($email.value)) {
      const user = { email: $email.value };
      sendEmailUser(user)
        .then(async (data) => {
          if (data.status !== "ok") {
            await swal({
              text: data.status,
              icon: "info",
              timer: "6000",
            });
            setShowModal(false);
          } else {
            swal({
              title: "Email Enviado Correctamente",
              text: "Revisa tu correo, para recuperar tu contraseña",
              icon: "success",
              timer: "6000",
            });
            setShowModal(false);
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
          setShowModal(false);
        });
    } else {
      swal({
        title: "Debe ingresar un email válido",
        icon: "info",
        timer: "6000",
      });
      setShowModal(false);
    }

    
  };

  return (
    <main className={` w-full bg-[#E3F2FD] ${styles.main} p-8`}>
      <Modal show={showModal}>
        <Loader logo={false}></Loader>
      </Modal>
      <section className="max-w-[473px] bg-white rounded-xl border border-[#90caf983] ml-auto mr-auto p-[24px] flex flex-col items-center justify-center">
        <Logo className={`mb-10 font-bold uppercase`} />
        <div className={`${styles.title} mb-4`}>Recuperar Contraseña</div>
        <div className={`${styles.subtitle} mb-4`}>
          Ingresa tu email, te enviaremos un correo
        </div>
        <InputValidateEmail id={"id-inp-res-login"} />

        <Button
          onclick={sendLink}
          className={`w-full bg-[#673AB7] py-2 px-5 rounded text-white font-semibold ${styles.styleButtonLogin} mb-4 hover:bg-[#5E35B1]`}
        >
          Enviar enlace de recuperación
        </Button>
        <div className={`${styles.hr} mb-4`}></div>
        <Link to={"/register"} className={`${styles.dontHaveAccount}`}>
          ¿No tienes una cuenta?, Registrate.
        </Link>
      </section>
    </main>
  );
}
