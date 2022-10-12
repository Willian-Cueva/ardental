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
import Odontogram from "../components/Odontogram";
import ClinicalSigns from "../components/ClinicalSigns";
import TableTreatment from "../components/TableTreatment";
import OdontogramContext from "../contexts/OdontogramContext";
import { useOdontogramModel } from "../hooks/useOdontogram";
import { onePatient, updatePatient } from "../services/RegisterPatient.service";
import Loader from "../components/Loader";
import { yearsPatient } from "../helpers/constants";
import swal from "sweetalert";

export default function GestionPatient() {
  const [component, setComponent] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [patient, setPatient] = useState({});
  const [ready, setReady] = useState(false);

  const paramans = useParams();

  useEffect(() => {
    onePatient(paramans.dni).then((data) => setPatient(data.data));
    setReady(true);
  }, []);

  const selectComponentForShow = (num) => {
    setComponent(num);
    setShowModal(true);
  };

  const saveChanges = () => {
    setShowModalUpdate(true);
    switch (component) {
      case 0:
        let PersonaData = {},
          d = document;
        PersonaData._id = patient._id;
        PersonaData.names = d.getElementById("id-inp-name").value;
        PersonaData.direction = d.getElementById("id-inp-direction").value;
        PersonaData.profession = d.getElementById("id-inp-profession").value;
        PersonaData.dni = d.getElementById("id-inp-dni").value;
        PersonaData.phone = d.getElementById("id-inp-phone").value;
        PersonaData.maritalStatus =
          d.getElementById("id-inp-maritalState").value * 1;
        PersonaData.sex = d.getElementById("id-inp-sex").value * 1;
        PersonaData.dateBorn = d.getElementById("id-inp-dateBorn").value;
        PersonaData.reason = d.getElementById("id-inp-reason").value;

        console.log(PersonaData);

        setShowModal(false);

        updatePatient(PersonaData)
          .then((data) => {
            if (data.status === "ok") {
              swal({
                title: "Actualización Exitosa",
                text: "Se han actualizado los datos personales del paciente satisfactoriamente",
                icon: "success",
                timer: "6000",
              });
            } else {
              swal({
                title: "Error",
                text: data.status,
                icon: "error",
                timer: "6000",
              });
            }
          })
          .catch((err) => {
            console.log(err);
            swal({
              title: "Error",
              text: "Ha ocurrido un inconveniente, notifica a tu servicio técnico",
              icon: "error",
              timer: "6000",
            });
          });

        break;
      case 1:
        break;
      case 2:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      case 7:
        break;

      default:
        break;
    }
    setShowModalUpdate(false);
  };

  const value = useOdontogramModel();
  const years = yearsPatient(patient.dateBorn);
  return ready ? (
    <div id="page_gestion_patient" className={`${styles.mainTotal}`}>
      <Modal show={showModalUpdate}>
        <div>
          <Loader logo={false} />
        </div>
      </Modal>
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
                {patient.names} - {years} años
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
            num={7}
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
              <PersonalData editMode={true} patientData={patient} />
            ) : component === 1 ? (
              <PersonalHistory />
            ) : component === 2 ? (
              <OralSymp />
            ) : component === 4 ? (
              <Main title="Odontograma" subtitle={true}>
                <OdontogramContext.Provider value={value}>
                  <Odontogram />
                </OdontogramContext.Provider>
              </Main>
            ) : component === 5 ? (
              <ClinicalSigns />
            ) : component === 6 ? (
              <Main title="Plan y Seguimiento de tratamiento" subtitle={true}>
                <TableTreatment />
              </Main>
            ) : component === 7 ? (
              <Main title="Forma de Pago" subtitle={true}></Main>
            ) : (
              ""
            )}
          </div>
          <div className="w-full flex justify-between mt-4">
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className={`bg-[#F44336] hover:bg-[#C62828] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
            >
              <div className="font-semibold text-lg">Cancelar</div>
            </button>
            <button
              onClick={() => {
                saveChanges();
              }}
              className={`bg-[#00C853] hover:bg-[#69F0AE] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
            >
              <div className="font-semibold text-lg">Guardar</div>
              <FaSave size={"22px"} />
            </button>
          </div>
        </Main>
      </Modal>
    </div>
  ) : (
    <Loader />
  );
}
