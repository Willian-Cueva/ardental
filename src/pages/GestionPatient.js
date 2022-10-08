import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import avatar from "../assets/imgs/user.png";
import styles from "./styles/GestionPatient.module.css";
import Main from "../components/Main";
import ButtonIcon from "../components/ButtonIcon";
import PersonalData from "../components/PersonalData";
import scrollStyles from "../components/styles/ScrollBar.module.css";
import {
  FaEdit,
  FaTeeth,
  FaTooth,
  FaRegIdCard,
  FaBriefcaseMedical,
  FaHandHoldingUsd,
  FaTeethOpen,
  FaWindowClose,
  FaSave,
} from "react-icons/fa";
import Modal from "../components/Modal";
import PersonalHistory from "../components/PersonalHistory";
import OralSymp from "../components/OralSymp";
import ReasonConsult from "../components/ReasonConsult";
import Odontogram from "../components/Odontogram";
import ClinicalSigns from "../components/ClinicalSigns";
import TablePay from "../components/TablePay";
import TableTreatment from "../components/TableTreatment";

export default function GestionPatient() {
  const [component, setComponent] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  const test = (e) => {
    console.log(e.target);
  };

  useEffect(() => {
    const $page = document;
    $page.addEventListener("click", test);

    return () => {
      $page.removeEventListener("click", test);
    };
  }, []);

  const selectComponentForShow = (num) => {
    setComponent(num);
    setShowModal(true);
  };

  const paramans = useParams();
  const [patient, setPatient] = useState({
    name: "Willian Cueva",
    years: 20,
    dni: "1150579124",
    phone: "0995711578",
    profession: "Ingeniero en Computación",
    gener: 2,
  });
  return (
    <div id="page_gestion_patient" className={`${styles.mainTotal}`}>
      <Main title="Datos informativos">
        <div className="flex w-full justify-between">
          <div className="flex gap-3 mb-4">
            <img
              src={avatar}
              alt=""
              className="w-[125px] h-[125px] object-cover rounded-full"
            />
            <div className={`${styles.general}`}>
              <p className={`${styles.name}`}>
                {patient.name} - {patient.years} años
              </p>
              <p className={`${styles.title}`}>{patient.profession}</p>
              <p className={`${styles.info}`}>
                {patient.phone} - {patient.dni}
              </p>
            </div>
          </div>
          <div className="w-[220px]">
            <ButtonIcon
              text="Datos Personales"
              num={0}
              onclick={selectComponentForShow}
              icon={<FaEdit size={"22px"} id="holi" />}
            />
          </div>
        </div>
        <section className="grid grid-cols-5 md:grid-cols-10 gap-4">
          <ButtonIcon
            text="Antecedentes Personales"
            num={1}
            onclick={selectComponentForShow}
            className="col-span-5"
            color="bg-[#D84315] hover:bg-[#D84315]"
            icon={<FaRegIdCard size={"22px"} />}
          />
          <ButtonIcon
            text="Sintomatologia Oral"
            num={2}
            onclick={selectComponentForShow}
            className="col-span-5"
            color="bg-[#5E35B1] hover:bg-[#4527A0]"
            icon={<FaTeethOpen size={"22px"} />}
          />
          <ButtonIcon
            text="Motivo de la consulta"
            num={3}
            onclick={selectComponentForShow}
            className="col-span-5"
            color="bg-[#5E35B1] hover:bg-[#4527A0]"
            icon={<FaTeethOpen size={"22px"} />}
          />
          <ButtonIcon
            text="Odontograma"
            num={4}
            onclick={selectComponentForShow}
            className="col-span-5"
            icon={<FaTooth size={"22px"} />}
          />
          <ButtonIcon
            text="Signos Clínicos"
            num={5}
            onclick={selectComponentForShow}
            className="col-span-5"
            color="bg-[#FFC107] hover:bg-[#FFE57F]  hover:text-[#616161]"
            icon={<FaBriefcaseMedical size={"22px"} />}
          />
          <ButtonIcon
            text="Plan y Seguimiento de Tratamiento"
            num={6}
            onclick={selectComponentForShow}
            className="col-span-5"
            color="bg-[#B39DDB] hover:bg-[#673AB7]"
            icon={<FaTeeth size={"22px"} />}
          />
          <ButtonIcon
            text="Forma de Pago"
            num={6}
            onclick={selectComponentForShow}
            className="col-span-5"
            color="bg-[#00C853] hover:bg-[#69F0AE]"
            icon={<FaHandHoldingUsd size={"22px"} />}
          />
        </section>
      </Main>
      <Modal show={showModal}>
        <Main
          className={`${styles.main}`}
          title={
            <div className="flex justify-between w-full">
              <div className="font-bold">Configurar</div>
              <div
                className="text-red-600 cursor-pointer"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <FaWindowClose size={"35px"} />
              </div>
            </div>
          }
        >
          <div
            className={`${scrollStyles.scrollBar} ${styles.area} overflow-y-scroll`}
          >
            {component === 0 ? (
              <PersonalData />
            ) : component === 1 ? (
              <PersonalHistory />
            ) : component === 2 ? (
              <OralSymp />
            ) : component === 3 ? (
              <ReasonConsult />
            ) : component === 4 ? (
              <Main title="Odontograma" subtitle={true}>
                <Odontogram />
              </Main>
            ) : component === 5 ? (
              <ClinicalSigns />
            ) : component === 6 ? (
              <Main title="Plan y Seguimiento de tratamiento" subtitle={true}>
                <TableTreatment />
              </Main>
            ) : component === 6 ? (
              <Main title="Forma de Pago" subtitle={true}>
                <TablePay />
              </Main>
            ) : (
              ""
            )}
          </div>
          <div className="w-full flex justify-between mt-4">
            <div
              onClick={() => {
                setShowModal(false);
              }}
            >
              <ButtonIcon
                text="Cancelar"
                color={`bg-[#F44336] hover:bg-[#C62828] px-2`}
              />
            </div>
            <ButtonIcon
              text="Guardar"
              color={`bg-[#00C853] hover:bg-[#69F0AE] px-2`}
              icon={<FaSave size={"22px"} />}
            />
          </div>
        </Main>
      </Modal>
    </div>
  );
}
