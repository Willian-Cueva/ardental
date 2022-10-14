import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./styles/Switch.module.css";

export default function Switch({id, label = "label", className = "" }) {
  const stylesLocal = `border border-[#9E9E9E] focus:border-[#1E88E5] focus:border-2 bg-[#F5F5F5] rounded-xl p-2.5`;
  const [check, setCheck] = useState(false)

  useEffect(() => {
    const d = document;
    setTimeout(() => {
      setCheck(d.getElementById(id).checked==="true")
    }, 900);
  }, [])
  
  
  return (
    <div className={`flex flex-col gap-1 ${className}`} onClick={()=>{
      setCheck(!check);
    }}>
      <div>{label}</div>
      <label
        className={`${styles.mycheckbox}`}
        htmlFor={`${label}`}
      >
        <input type="checkbox" className={stylesLocal} id={id} checked={check} value={check}/>
        <span></span>
      </label>
    </div>
  );
}