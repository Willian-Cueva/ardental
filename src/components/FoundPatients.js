import React from 'react'
import styles from "./styles/FoundPatiensCard.module.css"
import {FaRegMehRollingEyes} from "react-icons/fa"

export default function FoundPatients({patients = []}) {
    if (patients.length === 0) {
        return(
            <div className={`${styles.panelEmpy}`}>
                <span>No encontramos ningún paciente</span>
                <FaRegMehRollingEyes/>
            </div>
        )
    }
  return (
    <div>FoundPatients</div>
  )
}
