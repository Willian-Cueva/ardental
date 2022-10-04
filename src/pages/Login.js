import Button from "../components/Button";
import InputPassLogin from "../components/InputPassLogin";
import InputValidateEmail from "../components/InputValidateEmail";
import Logo from "../components/Logo";
import styles from "./styles/Login.module.css";
import {Link} from "react-router-dom"

export default function Login() {
  return (
    <main className={` w-full bg-[#E3F2FD] ${styles.main} p-8`}>
      <section className="max-w-[473px] bg-white rounded-xl border border-[#90caf983] ml-auto mr-auto p-[24px] flex flex-col items-center justify-center">
        <Logo className={`mb-10 font-bold uppercase`} />
        <div className={`${styles.title} mb-4`}>Hola, Bienvenid@</div>
        <div className={`${styles.subtitle} mb-4`}>
          Ingresa tus credenciales para ingresar
        </div>
        <InputValidateEmail />
        <InputPassLogin />
        <div className="w-full flex justify-end">
          <div className={`${styles.forgotPassword} mb-4 hover:underline`}>
            ¿Olvidaste tu Contraseña?
          </div>
        </div>
        <Button
          className={`w-full bg-[#673AB7] py-2 px-5 rounded text-white font-medium ${styles.styleButtonLogin} mb-4 hover:bg-[#5E35B1]`}
        >
          {" "}
          Ingresar{" "}
        </Button>
        <div className={`${styles.hr} mb-4`}></div>
        <Link to={"/register"} className={`${styles.dontHaveAccount}`}>
          ¿No tienes una cuenta?, Registrate.
        </Link>
      </section>
    </main>
  );
}
