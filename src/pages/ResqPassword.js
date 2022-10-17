import Button from "../components/Button";
import InputPassLogin from "../components/InputPassLogin";
import InputValidateEmail from "../components/InputValidateEmail";
import Logo from "../components/Logo";
import styles from "./styles/Login.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { changePassword } from "../services/Users.service";
import swal from "sweetalert";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "../components/Modal";
import Loader from "../components/Loader";

export default function ResqPassword() {
    const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate();
  const { email } = useParams();
  useEffect(() => {
    const d = document,
      $email = d.getElementById("id-inp-email-res");
    $email.value = email;
  }, []);

  const changePass =async () => {
    setShowModal(true)
    
    const d = document,
      $email = d.getElementById("id-inp-email-res"),
      $password = d.getElementById("id-inp-password-res"),
      $repeatPass = d.getElementById("id-inp-repeatPassword-res");
    const user = {
      email: $email.value,
      password: $password.value,
      repeatPassword: $repeatPass.value,
    };
    await changePassword(user)
      .then(async (data) => {
        if (data.status !== "ok") {
          swal({
            text: data.status,
            icon: "info",
            timer: "6000",
          });
          setShowModal(false)
        } else {
          await swal({
            title: "Contraseña Reestablecida",
            text: "Su contraseña se ha reestablecido con exito",
            icon: "success",
            timer: "6000",
          });
          navigate("/login");
          setShowModal(false)
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
      setShowModal(false)
  };

  return (
    <main className={` w-full bg-[#E3F2FD] ${styles.main} p-8`}>
        <Modal show={showModal}><Loader logo={false}></Loader></Modal>
      <section className="max-w-[473px] bg-white rounded-xl border border-[#90caf983] ml-auto mr-auto p-[24px] flex flex-col items-center justify-center">
        <Logo className={`mb-10 font-bold uppercase`} />
        <div className={`${styles.title} mb-4`}>Restablecer Contraseña</div>
        <div className={`${styles.subtitle} mb-4`}>
          Ingresa tus credenciales para ingresar
        </div>
        <InputValidateEmail id={"id-inp-email-res"} />
        <InputPassLogin id={"id-inp-password-res"} />
        <InputPassLogin
          text="Repita la contraseña"
          id={"id-inp-repeatPassword-res"}
        />

        <Button
          onclick={changePass}
          className={`w-full bg-[#673AB7] py-2 px-5 rounded text-white font-medium ${styles.styleButtonLogin} mb-4 hover:bg-[#5E35B1]`}
        >
          Reestablecer Contraseña
        </Button>
        <div className={`${styles.hr} mb-4`}></div>
        <Link to={"/register"} className={`${styles.dontHaveAccount}`}>
          ¿No tienes una cuenta?, Registrate.
        </Link>
      </section>
    </main>
  );
}
