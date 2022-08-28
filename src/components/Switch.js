import React from "react";
import styles from "./styles/Switch.module.css";

export default function Switch({ label = "label", className = "" }) {
  const stylesLocal = `border border-[#9E9E9E] focus:border-[#1E88E5] focus:border-2 bg-[#F5F5F5] rounded-xl p-2.5`;
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div>{label}</div>
      <label
        className={`${styles.mycheckbox}`}
        htmlFor={`${label}`}
      >
        <input type="checkbox" className={stylesLocal} id={`${label}`} />
        <span></span>
      </label>
    </div>
  );
}