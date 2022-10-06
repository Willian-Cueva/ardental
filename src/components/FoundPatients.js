import React from "react";
import styles from "./styles/FoundPatiensCard.module.css";
import { FaRegMehRollingEyes } from "react-icons/fa";
import FoundPatienCard from "./FoundPatienCard";

export default function FoundPatients({ patients = [] }) {
  if (patients.length === 0) {
    return (
      <div className={`${styles.panelEmpy}`}>
        <span>No encontramos ningún paciente</span>
        <FaRegMehRollingEyes color="#616161" size={"40px"} />
      </div>
    );
  }
  return (
    <div className="rounded-xl overflow-hidden textArea">
      <table>
        <thead>
          <tr>
            <th>Nro.</th>
            <th>Nombre</th>
            <th>Cédula</th>
            <th>Edad</th>
            <th>Teléfono</th>
            <th>Genero</th>
            <th>Administrar</th>
          </tr>
        </thead>
        {patients.map((patient,index)=><FoundPatienCard patient={patient} index={index}/>)}
      </table>
    </div>
  );
}
