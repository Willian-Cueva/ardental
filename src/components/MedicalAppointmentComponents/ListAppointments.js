import React, { useEffect, useRef, useState } from "react";
import { FaPlusCircle, FaSave } from "react-icons/fa";
import CardAppointments from "./CardAppointments";
import Modal from "../Modal";
import Main from "../Main";
import Input from "../Input";
import SearchPatient from "./SearchPatient";
import useGlobalState from "../../hooks/useGlobalState";
import swal from "sweetalert";
import { MEDICAL_APPOINMENT } from "../../helpers/constants";

export default function ListAppointments({ type = "days" }) {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const {
    searchedPatientDNI,
    searchedPatientNames,
    setSearchedPatientDNI,
    setSearchedPatientNames,
    monthSelected,
    yearSelected,
    daySelected,
  } = useGlobalState();

  useEffect(() => {
    let url = "";
    switch (type) {
      case "days":
        url =
          MEDICAL_APPOINMENT +
          yearSelected +
          "/" +
          monthSelected +
          "/" +
          daySelected;
        break;
      case "pendings":
        url = MEDICAL_APPOINMENT + "pendings";
        break;
      case "unpresented":
        url = MEDICAL_APPOINMENT + "unpresented";
        break;
      case "presented":
        url = MEDICAL_APPOINMENT + "presented";
        break;
      default:
        break;
    }
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache"
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          setAppointments(data.data);
          console.log(data.data);
        }
      })
      .catch((error) => {
        swal("Error", error.message, "error");
      });
  }, [daySelected, monthSelected, yearSelected, type]);

  const dateRef = useRef();
  const timeRef = useRef();
  const observationsRef = useRef();

  const pressAddAppointment = () => {
    if (
      !searchedPatientDNI ||
      !searchedPatientNames ||
      !dateRef.current.value ||
      !timeRef.current.value
    ) {
      swal("Error", "Por favor introduce todos los campos", "error");
      return;
    }
    const medicalAppointment = {
      dniPatient: searchedPatientDNI,
      namesPatient: searchedPatientNames,
      date: {
        year: dateRef.current.value.slice(0, 4),
        month: dateRef.current.value.slice(5, 7) * 1 - 1,
        day: dateRef.current.value.slice(8, 10),
      },
      timeStart: timeRef.current.value,
      observations: observationsRef.current.value,
      state: "PENDIENTE",
    };

    fetch(MEDICAL_APPOINMENT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ medicalAppointment }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          swal("Cita creada con éxito", "", "success").then(() => {
            closeModal();
            window.location.reload();
          });
        } else {
          swal("Error", data.message, "error").then(() => {
            closeModal();
          });
        }
      })
      .catch((error) => {
        swal("Error", error.message, "error").then(() => {
          closeModal();
        });
      });
  };

  const openModal = () => {
    setShowModal(true);
    setSearchedPatientDNI("");
    setSearchedPatientNames("");
    function formatSingleDigit(number) {
      return number < 10 ? `0${number}` : number.toString();
    }

    // Obtener los componentes de la fecha
    const yearFormatted = yearSelected.toString().slice(-2); // Obtiene los últimos dos dígitos del año
    const monthFormatted = formatSingleDigit(monthSelected * 1 + 1);
    const dayFormatted = formatSingleDigit(daySelected);

    // Formatear la fecha completa
    const dateFormat = `20${yearFormatted}-${monthFormatted}-${dayFormatted}`;
    dateRef.current.value = dateFormat;
  };

  const closeModal = () => {
    setSearchedPatientDNI("");
    setSearchedPatientNames("");
    timeRef.current.value = "";
    dateRef.current.value = "";
    observationsRef.current.value = "";
    setShowModal(false);
  };
  return (
    <div className="w-full">
      <Modal show={showModal}>
        <Main title="Añadir cita">
          <div className="grid grid-cols-8 gap-4">
            <Input
              type="date"
              label="Fecha de la cita"
              className="col-span-2"
              reference={dateRef}
            />
            <Input
              type="time"
              label="Hora de la cita"
              className="col-span-2"
              reference={timeRef}
            />
            <div className="col-span-4 flex flex-col gap-4">
              <span>Paciente seleccionado</span>

              {searchedPatientNames ? (
                <span className="text-[#00C853]">{searchedPatientNames}</span>
              ) : (
                <span className="text-[#F44336]">"Sin paciente"</span>
              )}
            </div>
            <SearchPatient className="col-span-8" />
            <Input
              label="Observaciones"
              type="textArea"
              placeholder=""
              rows="2"
              className="col-span-8"
              reference={observationsRef}
            />
            <div className={`col-span-8 w-full flex justify-between mt-4`}>
              <button
                onClick={closeModal}
                className={`bg-[#F44336] hover:bg-[#C62828] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
              >
                <div className="font-semibold text-lg">Cancelar</div>
              </button>
              <button
                onClick={pressAddAppointment}
                className={`bg-[#00C853] hover:bg-[#69F0AE] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
              >
                <div className="font-semibold text-lg">Anadir</div>
                <FaSave size={"22px"} />
              </button>
            </div>
          </div>
        </Main>
      </Modal>
      <div className="w-full flex justify-end">
        <button
          onClick={openModal}
          className={`bg-[#2196F3] hover:bg-[#008bfd] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
        >
          <div className="font-semibold text-lg">Añadir</div>
          <FaPlusCircle size={"22px"} />
        </button>
      </div>

      <div className="w-full flex flex-col gap-4 mt-4">
        {appointments.map((appointment, index) => (
          <CardAppointments
            key={index + Math.random()}
            apponitment={appointment}
            type={type}
          />
        ))}
        {appointments.length === 0 && (
          <div className="w-full flex justify-center items-center">
            <span className="font-semibold text-[#4d4d4d] text-2xl">
              Sin citas
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
