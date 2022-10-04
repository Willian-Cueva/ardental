import { useState } from "react";
import { EMAIL_REGEX } from "../helpers/regex";
import styles from "./styles/InputValidateEmail.module.css";

export default function InputValidateEmail() {
  const [isFocus, setIsFocus] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const validarEmail = (valor) => {
    setIsValid(EMAIL_REGEX.test(valor));
  };

  return (
    <div className="w-full mb-4 select-none">
      <div
        className={`w-full rounded-[12px] px-3 py-2 ${
          isFocus
            ? isValid
              ? "border-[#1E88E5] border-2"
              : "border-[#F44336] border-2"
            : "border-[#9E9E9E] border"
        }`}
      >
        <p
          id="parraf"
          className={`${styles.parraf} ${
            isFocus
              ? isValid
                ? "text-[#1E88E5]"
                : "text-[#F44336]"
              : "text-[#9E9E9E]"
          }`}
        >
          Correo
        </p>
        <input
          type="email"
          className={`${styles.input}`}
          placeholder="example@gmail.com"
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          onKeyUp={(e) => {
            const value = e.target.value;
            console.log(value);
            validarEmail(value);
          }}
        />
      </div>
      {isFocus && (
        <div
          className={`text-left ml-3 ${styles.alert} ${
            isValid ? "text-[#1E88E5]" : "text-[#F44336]"
          }`}
        >
          {isValid ? "Correcto ✓" : "Debe ingresar un correo válido"}
        </div>
      )}
    </div>
  );
}
