import React from "react";
import styles from "./styles/RadioButtonsGroup.module.css"

export default function RadioButtonsGroup({
  label = "label",
  className = "",
  values = [],
}) {
  return (
    <div className={className}>
      <div className={`flex flex-col gap-1`}>
        <div>{label}</div>
        <div className="h-[46px] flex justify-around items-center">
          {values.map((el, index) => (
            <label className={`${styles.mycheckbox}`} htmlFor={`${label}${index}`}>
              <input type="checkbox" className={`border border-[#9E9E9E] focus:border-[#1E88E5] focus:border-2 bg-[#F5F5F5] rounded-xl p-2.5`} id={`${label}${index}`} />
              <span>{el}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
