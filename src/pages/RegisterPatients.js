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
import { FaSave, FaTrash, FaTrashAlt } from "react-icons/fa";

export default function RegisterPatients() {
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
      <div className="mt-4 w-full flex justify-between">
        <button
        onClick={()=>{
          window.location.replace('')
        }}
          className={`bg-[#F44336] hover:bg-[#C62828] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
        >
          <div className="font-semibold text-lg">Borrar Todo</div>
          <FaTrashAlt size={"22px"}/>
        </button>
        <button
          className={`bg-[#00C853] hover:bg-[#69F0AE] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
        >
          <div className="font-semibold text-lg">Guardar</div>
          <FaSave size={"22px"}/>
        </button>
      </div>
    </Main>
  );
}
