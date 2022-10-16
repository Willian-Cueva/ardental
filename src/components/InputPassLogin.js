import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import styles from "./styles/InputValidateEmail.module.css";

export default function InputPassLogin({ text = "Contraseña", id }) {
  const [isFocus, setIsFocus] = useState(false);
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="w-full select-none mb-4">
      <div
        className={`w-full rounded-[12px] px-3 py-2 flex justify-between items-center ${
          isFocus ? "border-[#1E88E5] border-2" : "border-[#9E9E9E] border"
        }`}
      >
        <div className="w-full pr-3">
          <p
            id="parraf"
            className={`${styles.parraf} ${
              isFocus ? "text-[#1E88E5]" : "text-[#9E9E9E]"
            }`}
          >
            {text}
          </p>
          <input
            id={id}
            type={showPass ? "text" : "password"}
            name="password"
            className={`${styles.input} w-full`}
            placeholder="*******************"
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={() => {
              setIsFocus(false);
            }}
          />
        </div>
        <div
          className="rounded-full hover:bg-[#EEEEEE] h-9 w-9 flex justify-center items-center cursor-pointer"
          onClick={() => {
            setShowPass(!showPass);
          }}
        >
          {showPass ? (
            <FaRegEye size={"25px"} />
          ) : (
            <FaRegEyeSlash size={"25px"} />
          )}
        </div>
      </div>
    </div>
  );
}
