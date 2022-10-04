import InputPassLogin from "../components/InputPassLogin";
import InputValidateEmail from "../components/InputValidateEmail";
import Logo from "../components/Logo";
import styles from "./styles/Login.module.css";

export default function Login() {
  return (
    <main className={` w-full bg-[#E3F2FD] ${styles.main} p-8`}>
      <section className="max-w-[473px] bg-white rounded-xl border border-[#90caf983] ml-auto mr-auto p-[24px] flex flex-col items-center justify-center">
        <Logo className={`mb-10`} />
        <div className={`${styles.title} mb-[8px]`}>Hola, Bienvenid@</div>
        <div className={`${styles.subtitle} mb-2`}>
          Ingresa tus credenciales para ingresar
        </div>
        <InputValidateEmail />
        <InputPassLogin />
      </section>
    </main>
  );
}
