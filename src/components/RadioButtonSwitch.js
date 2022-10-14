import { useEffect } from "react";
import { useState } from "react";
import styles from "./styles/RadioButtonsGroup.module.css";

export default function RadioButtonSwitch({index,label,id,el}) {
  const idC = `${id}-${index + 1}`
    const [check, setCheck] = useState(false)
    useEffect(() => {
      setTimeout(() => {
        const d = document;
        setCheck(d.getElementById(idC).checked==="true")
      }, 800);
    }, [])
    
  return (
    <label
              className={`${styles.mycheckbox}`}
              htmlFor={`${label}${index}`}
              onClick={()=>{
                setCheck(!check)
              }}
            >
              <input
                id={idC}
                checked={check} value={check}
                type="checkbox"
                className={`border border-[#9E9E9E] focus:border-[#1E88E5] focus:border-2 bg-[#F5F5F5] rounded-xl p-2.5`}
              />
              <span className="select-none">{el}</span>
            </label>
  )
}
