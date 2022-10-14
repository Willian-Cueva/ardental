import ClinicalSigns from "../components/ClinicalSigns";
import Main from "../components/Main";
import OralSymp from "../components/OralSymp";
import PersonalData from "../components/PersonalData";
import PersonalHistory from "../components/PersonalHistory";
import OdontogramContext from "../contexts/OdontogramContext";
import { useOdontogramModel } from "../hooks/useOdontogram";
import { FaSave, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { PATIENT_MODEL } from "../helpers/constants";
import Odontogram from "../components/Odontogram";
import TableTreatment from "../components/TableTreatment";
import WayPay from "../components/WayPay";
import { newPatient } from "../services/RegisterPatient.service";
import swal from "sweetalert";
import Modal from "../components/Modal";
import Loader from "../components/Loader";

export default function RegisterPatients() {
  const [patient, setPatient] = useState(PATIENT_MODEL);
  const [showModal, setShowModal] = useState(false);

  const newPatientInputs = async () => {
    setShowModal(true);
    const getPatient = JSON.parse(JSON.stringify(patient)),
      d = document;
    getPatient.PersonaData.names = d.getElementById("id-inp-name").value;
    getPatient.PersonaData.direction = d.getElementById("id-inp-direction").value;
    getPatient.PersonaData.profession =
      d.getElementById("id-inp-profession").value;
    getPatient.PersonaData.dni = d.getElementById("id-inp-dni").value;
    getPatient.PersonaData.phone = d.getElementById("id-inp-phone").value;
    getPatient.PersonaData.maritalStatus =
      d.getElementById("id-inp-maritalState").value * 1;
    getPatient.PersonaData.sex = d.getElementById("id-inp-sex").value * 1;
    getPatient.PersonaData.dateBorn = d.getElementById("id-inp-dateBorn").value;
    getPatient.PersonaData.reason =
      d.getElementById("id-inp-reason").value;

    getPatient.PersonalHistory.disorders =
      d.getElementById("id-inp-disorders").value;
    getPatient.PersonalHistory.bloodPressure =
      d.getElementById("id-inp-bloodPressure").value * 1;
    getPatient.PersonalHistory.heartDiseases =
      d.getElementById("id-swt-heartDiseases").value === "true";
    getPatient.PersonalHistory.medication =
      d.getElementById("id-inp-medication").value;
    getPatient.PersonalHistory.otherDiseases = d.getElementById(
      "id-inp-otherDiseases"
    ).value;

    getPatient.OralSymp.halitosis =
      d.getElementById("id-swt-halitosis").value === "true";
    getPatient.OralSymp.BleedingGums =
      d.getElementById("id-swt-BleedingGums").value === "true";
    getPatient.OralSymp.xerostomia =
      d.getElementById("id-swt-xerostomia").value === "true";
    getPatient.OralSymp.bruxismo =
      d.getElementById("id-swt-bruxismo").value === "true";
    getPatient.OralSymp.hypersensitivity.cool =
      d.getElementById("id-rdb-hypersensitivity-1").value === "true";
    getPatient.OralSymp.hypersensitivity.hot =
      d.getElementById("id-rdb-hypersensitivity-2").value === "true";
    getPatient.OralSymp.hypersensitivity.sweet =
      d.getElementById("id-rdb-hypersensitivity-3").value === "true";
    getPatient.OralSymp.hypersensitivity.acid =
      d.getElementById("id-rdb-hypersensitivity-4").value === "true";
    getPatient.OralSymp.hypersensitivity.touch =
      d.getElementById("id-rdb-hypersensitivity-5").value === "true";

    getPatient.ClinicalSygns.lips.clinicalSigns =
      d.getElementById("id-txta-lips-cli").value;
    getPatient.ClinicalSygns.lips.observations =
      d.getElementById("id-txta-lips-obs").value;
    getPatient.ClinicalSygns.cheeks.clinicalSigns =
      d.getElementById("id-txta-cheeks-cli").value;
    getPatient.ClinicalSygns.cheeks.observations =
      d.getElementById("id-txta-cheeks-obs").value;
    getPatient.ClinicalSygns.floorMouth.clinicalSigns = d.getElementById(
      "id-txta-floorMouth-cli"
    ).value;
    getPatient.ClinicalSygns.floorMouth.observations = d.getElementById(
      "id-txta-floorMouth-obs"
    ).value;
    getPatient.ClinicalSygns.tongue.clinicalSigns =
      d.getElementById("id-txta-tongue-cli").value;
    getPatient.ClinicalSygns.tongue.observations =
      d.getElementById("id-txta-tongue-obs").value;
    getPatient.ClinicalSygns.saliva.clinicalSigns =
      d.getElementById("id-txta-saliva-cli").value;
    getPatient.ClinicalSygns.saliva.observations =
      d.getElementById("id-txta-saliva-obs").value;
    getPatient.ClinicalSygns.gums.clinicalSigns =
      d.getElementById("id-txta-gums-cli").value;
    getPatient.ClinicalSygns.gums.observations =
      d.getElementById("id-txta-gums-obs").value;
    getPatient.ClinicalSygns.tonsils.clinicalSigns = d.getElementById(
      "id-txta-tonsils-cli"
    ).value;
    getPatient.ClinicalSygns.tonsils.observations = d.getElementById(
      "id-txta-tonsils-obs"
    ).value;
    getPatient.ClinicalSygns.ATM.clinicalSigns =
      d.getElementById("id-txta-ATM-cli").value;
    getPatient.ClinicalSygns.ATM.observations =
      d.getElementById("id-txta-ATM-obs").value;
    getPatient.ClinicalSygns.nodes.clinicalSigns =
      d.getElementById("id-txta-nodes-cli").value;
    getPatient.ClinicalSygns.nodes.observations =
      d.getElementById("id-txta-nodes-obs").value;
    getPatient.ClinicalSygns.salivaryGlands.clinicalSigns = d.getElementById(
      "id-txta-salivaryGlands-cli"
    ).value;
    getPatient.ClinicalSygns.salivaryGlands.observations = d.getElementById(
      "id-txta-salivaryGlands-obs"
    ).value;

    getPatient.Odontogram.data = JSON.parse(
      d.getElementById("id-div-odontogram-data").textContent
    );

    getPatient.Treatments.data = JSON.parse(
      d.getElementById("id-div-treatments").textContent
    );

    getPatient.WayPay.data = JSON.parse(
      d.getElementById("id-div-pays").textContent
    );

    await newPatient(getPatient)
      .then((res) => {
        if (res.status === "ok") {
          swal({
            title: "Excelente",
            text: "Se ha guardado el paciente correctamente",
            icon: "success",
            timer: "6000",
          });
          window.location.replace("");
        } else {
          swal({
            title: "Parametros no válidos",
            text: res.status,
            icon: "info",
            timer: "6000",
          });
        }
      })
      .catch((err) => {
        swal({
          title: "Upps",
          text: "Ha ocurrido un error, contactate con tu servicio técnico",
          icon: "error",
          timer: "6000",
        });
      });
    setShowModal(false);
    
  };

  const value = useOdontogramModel();

  return (
    <Main title="Registro de Pacientes">
      <Modal show={showModal}>
        <div>
          <Loader logo={false} />
        </div>
      </Modal>
      <PersonalData />
      <div className="mb-4" />
      <PersonalHistory />
      <div className="mb-4" />
      <OralSymp />
      <div className="mb-4" />
      <ClinicalSigns />

      <div className="mb-4" />
      <Main title="Odontograma" subtitle={true}>
        <OdontogramContext.Provider value={value}>
          <Odontogram/>
        </OdontogramContext.Provider>
      </Main>
      <div className="mb-4" />
      <Main title="Plan y Seguimiento de tratamiento" subtitle={true}>
        <TableTreatment />
      </Main>
      <div className="mb-4" />
      <Main title="Forma de Pago" subtitle={true}>
        <WayPay />
      </Main>
      <div className="mt-4 w-full flex justify-between">
        <button
          onClick={() => {
            window.location.replace("");
          }}
          className={`bg-[#F44336] hover:bg-[#C62828] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
        >
          <div className="font-semibold text-lg">Borrar Todo</div>
          <FaTrashAlt size={"22px"} />
        </button>
        <button
          onClick={() => {
            newPatientInputs();
          }}
          className={`bg-[#00C853] hover:bg-[#69F0AE] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
        >
          <div className="font-semibold text-lg">Guardar</div>
          <FaSave size={"22px"} />
        </button>
      </div>
    </Main>
  );
}
