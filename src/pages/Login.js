import Button from "../components/Button";
import InputPassLogin from "../components/InputPassLogin";
import InputValidateEmail from "../components/InputValidateEmail";
import Logo from "../components/Logo";
import styles from "./styles/Login.module.css";
import {Link, useNavigate} from "react-router-dom"
import { loginUser } from "../services/Users.service";
import swal from "sweetalert";
import useGlobalState from "../hooks/useGlobalState";

export default function Login() {
  const {login} = useGlobalState();
  const navigate = useNavigate();

  const loginLocal = () => {
    const d = document, $email = d.getElementById("id-inp-email-login"),$password = d.getElementById("id-inp-password-login");
    const user = {email:$email.value,password: $password.value}
    loginUser(user).then(async (data) => {
      if (data.status !== "ok") {
        swal({
          text: data.status,
          icon: "info",
          timer: "6000",
        });
      }else{
        login(data.data);
        navigate("/register-patient");
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
  }

  return (
    <main className={` w-full bg-[#E3F2FD] ${styles.main} p-8`}>
      <section className="max-w-[473px] bg-white rounded-xl border border-[#90caf983] ml-auto mr-auto p-[24px] flex flex-col items-center justify-center">
        <Logo className={`mb-10 font-bold uppercase`} />
        <div className={`${styles.title} mb-4`}>Hola, Bienvenid@</div>
        <div className={`${styles.subtitle} mb-4`}>
          Ingresa tus credenciales para ingresar
        </div>
        <InputValidateEmail id={"id-inp-email-login"}/>
        <InputPassLogin id={"id-inp-password-login"}/>
        <div className="w-full flex justify-end">
          <div className={`${styles.forgotPassword} mb-4 hover:underline`}>
            ¿Olvidaste tu Contraseña?
          </div>
        </div>
        <Button onclick={loginLocal}
          className={`w-full bg-[#673AB7] py-2 px-5 rounded text-white font-medium ${styles.styleButtonLogin} mb-4 hover:bg-[#5E35B1]`}
        >Ingresar</Button>
        <div className={`${styles.hr} mb-4`}></div>
        <Link to={"/register"} className={`${styles.dontHaveAccount}`}>
          ¿No tienes una cuenta?, Registrate.
        </Link>
      </section>
    </main>
  );
}
