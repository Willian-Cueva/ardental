import React, { useEffect, useRef, useState } from "react";
import cx from "clsx";
import { MEDICAL_APPOINMENT } from "../../helpers/constants";
import Modal from "../Modal";
import Main from "../Main";
import Input from "../Input";
import SearchPatient from "./SearchPatient";
import { FaEdit, FaSave, FaTrash } from "react-icons/fa";
import useGlobalState from "../../hooks/useGlobalState";
import swal from "sweetalert";

export default function CardAppointments({ apponitment }) {
  const [isPending, setIsPending] = useState(false);
  const [isPresent, setIsPresent] = useState(false);
  const [isUnpresent, setIsUnpresent] = useState(false);

  const {
    searchedPatientNames,
    setSearchedPatientNames,
    searchedPatientDNI,
    setSearchedPatientDNI,
  } = useGlobalState();

  const [showModal, setShowModal] = useState(false);

  const dateRef = useRef();
  const timeRef = useRef();
  const observationsRef = useRef();

  useEffect(() => {
    setSearchedPatientDNI(apponitment.dniPatient);
    setSearchedPatientNames(apponitment.namesPatient);
    if (apponitment.state === "PENDIENTE") {
      setIsPending(true);
    } else if (apponitment.state === "SE PRESENTO") {
      setIsPresent(true);
    } else if (apponitment.state === "NO SE PRESENTO") {
      setIsUnpresent(true);
    }
  }, []);

  const editAppointment = () => {
    function formatSingleDigit(number) {
      return number < 10 ? `0${number}` : number.toString();
    }

    // Obtener los componentes de la fecha
    const yearFormatted = apponitment.date.year.toString().slice(-2); // Obtiene los últimos dos dígitos del año
    const monthFormatted = formatSingleDigit(apponitment.date.month);
    const dayFormatted = formatSingleDigit(apponitment.date.day);

    // Formatear la fecha completa
    const dateFormat = `20${yearFormatted}-${monthFormatted}-${dayFormatted}`;
    dateRef.current.value = dateFormat;

    timeRef.current.value = apponitment.timeStart;
    observationsRef.current.value = apponitment.observations;
    setSearchedPatientNames(apponitment.namesPatient);
    setSearchedPatientDNI(apponitment.dniPatient);
    openModal();
  };

  const deleteAppointment = () => {
    swal({
      title: "¿Estas segur@ que deseas eliminar este elemento?",
      icon: "warning",
      buttons: ["No", "Sí"],
    }).then((res) => {
      if (res) {
        fetch(MEDICAL_APPOINMENT, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: apponitment._id.toString(),
          }),
        })
          .then((data) => data.json())
          .then((data) => {
            if (data.status === "ok") {
              swal({
                title: "Cita eliminada exitosamente",
                text: "La cita fue eliminada satisfactoriamente",
                icon: "success",
                timer: "6000",
              }).then(() => {
                window.location.reload();
              });
            } else {
              swal({
                title: "No se pudo eliminar la cita",
                icon: "error",
                timer: "6000",
              });
            }
          });
      }
    });
  };

  const updateAppointment = () => {
    if (
      !dateRef.current.value ||
      !timeRef.current.value ||
      !observationsRef.current.value ||
      !searchedPatientDNI ||
      !searchedPatientNames
    ) {
      swal("Error", "Por favor introduce todos los campos", "error");
      return;
    }
    const updateMedicalAppointment = {
      _id: apponitment._id.toString(),
      dniPatient: searchedPatientDNI,
      namesPatient: searchedPatientNames,
      date: {
        year: dateRef.current.value.slice(0, 4),
        month: dateRef.current.value.slice(5, 7) * 1 - 1,
        day: dateRef.current.value.slice(8, 10),
      },
      timeStart: timeRef.current.value,
      observations: observationsRef.current.value,
    };

    fetch(MEDICAL_APPOINMENT, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updateMedicalAppointment }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          swal("Éxito", "Cita actualizada correctamente", "success").then(
            () => {
              closeModal();
              window.location.reload();
            }
          );
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
  };

  const closeModal = () => {
    dateRef.current.value = "";
    timeRef.current.value = "";
    observationsRef.current.value = "";
    setSearchedPatientNames("");
    setSearchedPatientDNI("");
    setShowModal(false);
  };

  const switchState = (state) => {
    fetch(MEDICAL_APPOINMENT, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: apponitment._id.toString(),
        state,
      }),
    });
  };

  const pressPending = () => {
    setIsPending(true);
    setIsPresent(false);
    setIsUnpresent(false);
    switchState("PENDIENTE");
  };

  const pressPresent = () => {
    setIsPresent(true);
    setIsPending(false);
    setIsUnpresent(false);
    switchState("SE PRESENTO");
  };

  const pressUnpresent = () => {
    setIsUnpresent(true);
    setIsPending(false);
    setIsPresent(false);
    switchState("NO SE PRESENTO");
  };

  return (
    <div className="w-full border p-4 rounded-xl flex gap-4">
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
                onClick={updateAppointment}
                className={`bg-[#00C853] hover:bg-[#69F0AE] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
              >
                <div className="font-semibold text-lg">Anadir</div>
                <FaSave size={"22px"} />
              </button>
            </div>
          </div>
        </Main>
      </Modal>
      <div className="flex-1 flex flex-col gap-1">
        <span className="font-bold">{apponitment.namesPatient}</span>
        <div>
          Hora: <span>{apponitment.timeStart}</span>
        </div>
        <div>
          Fecha:{" "}
          <span>
            {apponitment.date.day}/{apponitment.date.month}/
            {apponitment.date.year}
          </span>
        </div>
        <div>
          <span className="font-semibold">Observaciones: </span>{" "}
          <span>{apponitment.observations}</span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={pressPending}
            className={cx(
              "p-2 rounded-xl border border-slate-400 text-slate-400 hover:bg-slate-500 hover:text-white",
              {
                "bg-slate-500 text-white": isPending,
              }
            )}
          >
            Pendiente
          </button>
          <button
            onClick={pressUnpresent}
            className={cx(
              "p-2 rounded-xl border border-red-400 text-red-400 hover:bg-red-500 hover:text-white",
              {
                "bg-red-500 text-white": isUnpresent,
              }
            )}
          >
            No asistió
          </button>
          <button
            onClick={pressPresent}
            className={cx(
              "p-2 rounded-xl border border-green-400 text-green-400 hover:bg-green-500 hover:text-white",
              {
                "bg-green-500 text-white": isPresent,
              }
            )}
          >
            Se presentó
          </button>
        </div>
      </div>
      <div className="flex-none w-[175px] flex justify-end items-center gap-4">
        <button
          onClick={editAppointment}
          className="p-3 rounded-xl bg-blue-500 hover:bg-blue-400"
        >
          <FaEdit size={"24px"} color={"white"} />
        </button>
        <button
          onClick={deleteAppointment}
          className="p-3 rounded-xl bg-red-500 hover:bg-red-400"
        >
          <FaTrash size={"24px"} color={"white"} />
        </button>
      </div>
    </div>
  );
}
