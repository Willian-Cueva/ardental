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
  FaImages,
} from "react-icons/fa";
import Modal from "../components/Modal";
import PersonalHistory from "../components/PersonalHistory";
import OralSymp from "../components/OralSymp";
import Odontogram from "../components/Odontogram";
import ClinicalSigns from "../components/ClinicalSigns";
import TableTreatment from "../components/TableTreatment";
import OdontogramContext from "../contexts/odontogramContext";
import { useOdontogramModel } from "../hooks/useOdontogram";
import {
  onePatient,
  updateClinicalSygnsPatient,
  updateOdontogramPatient,
  updateOralSympPatient,
  updatePatient,
  updatePersonalHystoryPatient,
  updateTreatmentsPatient,
  updateWayPayPatient,
} from "../services/RegisterPatient.service";
import Loader from "../components/Loader";
import { yearsPatient } from "../helpers/constants";
import swal from "sweetalert";
import WayPay from "../components/WayPay";
import useGlobalState from "../hooks/useGlobalState";
import Galery from "../components/Galery";

export default function GestionPatient() {
  const [component, setComponent] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [patient, setPatient] = useState({});
  const [ready, setReady] = useState(false);

  const paramans = useParams();

  const loadPatient = () => {
    onePatient(paramans.dni).then((data) => {
      setPatient(data.data);
    });
    setReady(true);
  };

  useEffect(() => {
    loadPatient();
  }, []);

  const selectComponentForShow = (num) => {
    setComponent(num);
    setShowModal(true);
  };
  const {getAhutorization} = useGlobalState()

  const saveChanges = () => {
    setShowModalUpdate(true);
    const d = document;
    switch (component) {
      case 0:
        let PersonaData = {};
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

        setShowModal(false);

        updatePatient(PersonaData,getAhutorization)
          .then((data) => {
            if (data.status === "ok") {
              loadPatient();
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
            console.error(err);
            swal({
              title: "Error",
              text: "Ha ocurrido un inconveniente, notifica a tu servicio técnico",
              icon: "error",
              timer: "6000",
            });
          });

        break;
      case 1:
        let PersonalHistory = {};
        PersonalHistory._id = patient._id;
        PersonalHistory.disorders = d.getElementById("id-inp-disorders").value;
        PersonalHistory.bloodPressure =
          d.getElementById("id-inp-bloodPressure").value * 1;
        PersonalHistory.heartDiseases =
          d.getElementById("id-swt-heartDiseases").value === "true";
        PersonalHistory.medication =
          d.getElementById("id-inp-medication").value;
        PersonalHistory.otherDiseases = d.getElementById(
          "id-inp-otherDiseases"
        ).value;

        updatePersonalHystoryPatient(PersonalHistory,getAhutorization)
          .then((res) => {
            if (res.status === "ok") {
              swal({
                title: "Actualización Exitosa",
                text: "Se han actualizado los antecedentes personales del paciente satisfactoriamente",
                icon: "success",
                timer: "6000",
              });
            } else {
              swal({
                title: "Error",
                text: res.status,
                icon: "error",
                timer: "6000",
              });
            }
          })
          .catch((err) => {
            console.error(err);
            swal({
              title: "Error",
              text: "Ha ocurrido un inconveniente, notifica a tu servicio técnico",
              icon: "error",
              timer: "6000",
            });
          });

        break;
      case 2:
        let OralSymp = {};
        OralSymp._id = patient._id;
        OralSymp.halitosis =
          d.getElementById("id-swt-halitosis").value === "true";
        OralSymp.BleedingGums =
          d.getElementById("id-swt-BleedingGums").value === "true";
        OralSymp.xerostomia =
          d.getElementById("id-swt-xerostomia").value === "true";
        OralSymp.bruxismo =
          d.getElementById("id-swt-bruxismo").value === "true";

        OralSymp.hypersensitivity = {
          cool: false,
          hot: false,
          sweet: false,
          acid: false,
          touch: false,
        };

        OralSymp.hypersensitivity.cool =
          d.getElementById("id-rdb-hypersensitivity-1").value === "true";
        OralSymp.hypersensitivity.hot =
          d.getElementById("id-rdb-hypersensitivity-2").value === "true";
        OralSymp.hypersensitivity.sweet =
          d.getElementById("id-rdb-hypersensitivity-3").value === "true";
        OralSymp.hypersensitivity.acid =
          d.getElementById("id-rdb-hypersensitivity-4").value === "true";
        OralSymp.hypersensitivity.touch =
          d.getElementById("id-rdb-hypersensitivity-5").value === "true";
        updateOralSympPatient(OralSymp,getAhutorization)
          .then((res) => {
            if (res.status === "ok") {
              swal({
                title: "Actualización Exitosa",
                text: "Se ha actualizado la sintomatología oral del paciente satisfactoriamente",
                icon: "success",
                timer: "6000",
              });
            } else {
              swal({
                title: "Error",
                text: res.status,
                icon: "error",
                timer: "6000",
              });
            }
          })
          .catch((err) => {
            console.error(err);
            swal({
              title: "Error",
              text: "Ha ocurrido un inconveniente, notifica a tu servicio técnico",
              icon: "error",
              timer: "6000",
            });
          });
        break;
      case 4:
        let Odontogram = {};
        Odontogram._id = patient._id;
        Odontogram.data = JSON.parse(
          d.getElementById("id-div-odontogram-data").textContent
        );
        updateOdontogramPatient(Odontogram,getAhutorization)
          .then((res) => {
            if (res.status === "ok") {
              swal({
                title: "Actualización Exitosa",
                text: "Se ha actualizado el odontograma del paciente satisfactoriamente",
                icon: "success",
                timer: "6000",
              });
            } else {
              swal({
                title: "Error",
                text: res.status,
                icon: "error",
                timer: "6000",
              });
            }
          })
          .catch((err) => {
            console.error(err);
            swal({
              title: "Error",
              text: "Ha ocurrido un inconveniente, notifica a tu servicio técnico",
              icon: "error",
              timer: "6000",
            });
          });
        break;
      case 5:
        let ClinicalSygns = {};
        ClinicalSygns._id = patient._id;
        ClinicalSygns.lips = { clinicalSigns: "", observations: "" };
        ClinicalSygns.lips.clinicalSigns =
          d.getElementById("id-txta-lips-cli").value;
        ClinicalSygns.lips.observations =
          d.getElementById("id-txta-lips-obs").value;
        ClinicalSygns.cheeks = { clinicalSigns: "", observations: "" };
        ClinicalSygns.cheeks.clinicalSigns =
          d.getElementById("id-txta-cheeks-cli").value;
        ClinicalSygns.cheeks.observations =
          d.getElementById("id-txta-cheeks-obs").value;
        ClinicalSygns.floorMouth = { clinicalSigns: "", observations: "" };
        ClinicalSygns.floorMouth.clinicalSigns = d.getElementById(
          "id-txta-floorMouth-cli"
        ).value;
        ClinicalSygns.floorMouth.observations = d.getElementById(
          "id-txta-floorMouth-obs"
        ).value;
        ClinicalSygns.tongue = { clinicalSigns: "", observations: "" };
        ClinicalSygns.tongue.clinicalSigns =
          d.getElementById("id-txta-tongue-cli").value;
        ClinicalSygns.tongue.observations =
          d.getElementById("id-txta-tongue-obs").value;
        ClinicalSygns.saliva = { clinicalSigns: "", observations: "" };
        ClinicalSygns.saliva.clinicalSigns =
          d.getElementById("id-txta-saliva-cli").value;
        ClinicalSygns.saliva.observations =
          d.getElementById("id-txta-saliva-obs").value;
        ClinicalSygns.gums = { clinicalSigns: "", observations: "" };
        ClinicalSygns.gums.clinicalSigns =
          d.getElementById("id-txta-gums-cli").value;
        ClinicalSygns.gums.observations =
          d.getElementById("id-txta-gums-obs").value;
        ClinicalSygns.tonsils = { clinicalSigns: "", observations: "" };
        ClinicalSygns.tonsils.clinicalSigns = d.getElementById(
          "id-txta-tonsils-cli"
        ).value;
        ClinicalSygns.tonsils.observations = d.getElementById(
          "id-txta-tonsils-obs"
        ).value;
        ClinicalSygns.ATM = { clinicalSigns: "", observations: "" };
        ClinicalSygns.ATM.clinicalSigns =
          d.getElementById("id-txta-ATM-cli").value;
        ClinicalSygns.ATM.observations =
          d.getElementById("id-txta-ATM-obs").value;
        ClinicalSygns.nodes = { clinicalSigns: "", observations: "" };
        ClinicalSygns.nodes.clinicalSigns =
          d.getElementById("id-txta-nodes-cli").value;
        ClinicalSygns.nodes.observations =
          d.getElementById("id-txta-nodes-obs").value;
        ClinicalSygns.salivaryGlands = { clinicalSigns: "", observations: "" };
        ClinicalSygns.salivaryGlands.clinicalSigns = d.getElementById(
          "id-txta-salivaryGlands-cli"
        ).value;
        ClinicalSygns.salivaryGlands.observations = d.getElementById(
          "id-txta-salivaryGlands-obs"
        ).value;

        updateClinicalSygnsPatient(ClinicalSygns,getAhutorization)
          .then((res) => {
            if (res.status === "ok") {
              swal({
                title: "Actualización Exitosa",
                text: "Se ha actualizado los signos clínicos del paciente satisfactoriamente",
                icon: "success",
                timer: "6000",
              });
            } else {
              swal({
                title: "Error",
                text: res.status,
                icon: "error",
                timer: "6000",
              });
            }
          })
          .catch((err) => {
            console.error(err);
            swal({
              title: "Error",
              text: "Ha ocurrido un inconveniente, notifica a tu servicio técnico",
              icon: "error",
              timer: "6000",
            });
          });

        break;
      case 6:
        let Treatments = {}
        Treatments._id=patient._id
        Treatments.data = JSON.parse(
          d.getElementById("id-div-treatments").textContent
        );
        updateTreatmentsPatient(Treatments,getAhutorization).then((res) => {
          if (res.status === "ok") {
            swal({
              title: "Actualización Exitosa",
              text: "Se ha actualizado el plan y seguimiento de tratamiento del paciente satisfactoriamente",
              icon: "success",
              timer: "6000",
            });
          } else {
            swal({
              title: "Error",
              text: res.status,
              icon: "error",
              timer: "6000",
            });
          }
        })
        .catch((err) => {
          console.error(err);
          swal({
            title: "Error",
            text: "Ha ocurrido un inconveniente, notifica a tu servicio técnico",
            icon: "error",
            timer: "6000",
          });
        });
        break;
      case 7:
        let WayPay = {}
        WayPay._id=patient._id;
        WayPay.data = JSON.parse(
          d.getElementById("id-div-pays").textContent
        );
        updateWayPayPatient(WayPay,getAhutorization).then((res) => {
          if (res.status === "ok") {
            swal({
              title: "Actualización Exitosa",
              text: "Se ha actualizado la forma de pago del paciente satisfactoriamente",
              icon: "success",
              timer: "6000",
            });
          } else {
            swal({
              title: "Error",
              text: res.status,
              icon: "error",
              timer: "6000",
            });
          }
        })
        .catch((err) => {
          console.error(err);
          swal({
            title: "Error",
            text: "Ha ocurrido un inconveniente, notifica a tu servicio técnico",
            icon: "error",
            timer: "6000",
          });
        });
        break;

      default:
        break;
    }
    setShowModalUpdate(false);
    setShowModal(false);
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
        <div className="flex flex-col w-full justify-between mb-4 md:flex-row">
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <img
              src={avatar}
              alt=""
              className="w-[125px] h-[125px] object-cover rounded-full"
            />
            <div className={`${styles.general}`}>
              <p className={`${styles.name}`}>
                {patient.names}
              </p>
              <p className={`${styles.title}`}>{patient.profession}</p>
              <p className={`${styles.info}`}>
                {patient.phone} - {patient.dni}
              <p>{years} años de edad</p>
              </p>
            </div>
          </div>
          <div className="w-[220px]">
            <ButtonIcon
              text="Datos Personales"
              num={0}
              onclick={selectComponentForShow}
              color="bg-[#90CAF9] hover:bg-[#2196F3]"
              icon={<FaEdit size={"27px"} id="holi" />}
            />
          </div>
        </div>
        <section className="grid grid-cols-5 md:grid-cols-10 gap-4">
          <ButtonIcon
            text="Antecedentes Personales"
            num={1}
            onclick={selectComponentForShow}
            className="col-span-5"
            color="bg-[#FFAB91] hover:bg-[#D84315]"
            icon={<FaRegIdCard size={"27px"} />}
          />
          <ButtonIcon
            text="Sintomatologia Oral"
            num={2}
            onclick={selectComponentForShow}
            className="col-span-5"
            color="bg-[#B39DDB] hover:bg-[#4527A0]"
            icon={<FaTeethOpen size={"27px"} />}
            />
          <ButtonIcon
            text="Odontograma"
            num={4}
            onclick={selectComponentForShow}
            color="bg-[#90CAF9] hover:bg-[#2196F3]"
            className="col-span-5"
            icon={<FaTooth size={"27px"} />}
          />
          <ButtonIcon
            text="Signos Clínicos"
            num={5}
            onclick={selectComponentForShow}
            className="col-span-5"
            color="bg-[#FFE57F] hover:bg-[#FFC107]  "
            icon={<FaBriefcaseMedical size={"27px"} />}
          />
          <ButtonIcon
            text="Plan y Seguimiento de Tratamiento"
            num={6}
            onclick={selectComponentForShow}
            className="col-span-5"
            color="bg-[#B39DDB] hover:bg-[#673AB7]"
            icon={<FaTeeth size={"27px"} />}
          />
          <ButtonIcon
            text="Forma de Pago"
            num={7}
            onclick={selectComponentForShow}
            className="col-span-5"
            color="bg-[#69F0AE] hover:bg-[#00C853]"
            icon={<FaHandHoldingUsd size={"27px"} />}
          />
          <ButtonIcon
            text="Galería de Sonrisas"
            num={8}
            onclick={selectComponentForShow}
            className="col-span-5"
            color="bg-[#FFAB91] hover:bg-[#D84315]"
            icon={<FaImages size={"27px"} />}
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
              <PersonalHistory editMode={true} search={patient._id} />
            ) : component === 2 ? (
              <OralSymp editMode={true} search={patient._id} />
            ) : component === 4 ? (
              <Main title="Odontograma" subtitle={true}>
                <OdontogramContext.Provider value={value}>
                  <Odontogram editMode={true} search={patient._id} />
                </OdontogramContext.Provider>
              </Main>
            ) : component === 5 ? (
              <ClinicalSigns editMode={true} search={patient._id}/>
            ) : component === 6 ? (
              <Main title="Plan y Seguimiento de tratamiento" subtitle={true}>
                <TableTreatment editMode={true} search={patient._id}/>
              </Main>
            ) : component === 7 ? (
              <Main title="Forma de Pago" subtitle={true}>
                <WayPay editMode={true} search={patient._id}/>
              </Main>
            ) : component === 8 ?
            <Galery dni={paramans.dni}/> : "" 
          }
          </div>
          <div className={`w-full flex justify-between mt-4 ${component===8 && "hidden"}`}>
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
