import React, { useEffect } from "react";
import ClinicalSigns from "../components/ClinicalSigns";
import Main from "../components/Main";
import Odontogram from "../components/Odontogram";
import OdontogramContext from "../contexts/OdontogramContext";
import OralSymp from "../components/OralSymp";
import PersonalData from "../components/PersonalData";
import PersonalHistory from "../components/PersonalHistory";
import ReasonConsult from "../components/ReasonConsult";
import TablePay from "../components/TablePay";
import TableTreatment from "../components/TableTreatment";
import { useOdontogramModel } from "../hooks/useOdontogram";

export default function Landing() {
  function autosize(e) {
    const el = e.target;
    if (el.tagName === "INPUT") return;
    setTimeout(function () {
      el.style.cssText = "height:" + el.scrollHeight + "px";
    }, 0);
  }
  useEffect(() => {
    let textarea = document;
    textarea.addEventListener("keydown", autosize);
    return () => {
      textarea.removeEventListener("keydown", autosize);
    };
  }, []);
  const value = useOdontogramModel();
  return (
    <Main title="Registro de Pacientes">
      <PersonalData />
      <div className="mb-4" />
      <PersonalHistory />
      <div className="mb-4" />
      <OralSymp />
      <div className="mb-4" />
      <ReasonConsult />
      <div className="mb-4" />
      <Main title="Odontograma" subtitle={true}>
        <OdontogramContext.Provider value={value}>
          <Odontogram />
        </OdontogramContext.Provider>
      </Main>
      <div className="mb-4" />
      <ClinicalSigns />
      <div className="mb-4" />
      <Main title="Plan y Seguimiento de tratamiento" subtitle={true}>
        <TableTreatment />
      </Main>
      <div className="mb-4" />
      <Main title="Forma de Pago" subtitle={true}>
        <TablePay />
      </Main>
    </Main>
  );
}
