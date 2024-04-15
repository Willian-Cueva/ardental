import React, { useEffect, useRef, useState } from "react";
import Main from "./Main";
import Input from "./Input";
import { FaPlusCircle, FaSave } from "react-icons/fa";
import Modal from "./Modal";
import cx from "clsx";
import swal from "sweetalert";
import { TREATMENT_AND_PAY } from "../helpers/constants";
import useGlobalState from "../hooks/useGlobalState";

export default function AddTreatmentAndPay({
  cancelAddTreatment = () => {},
  dniPatient,
}) {
  const { getAhutorization } = useGlobalState();

  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState([]);
  const [total, setTotal] = useState(0);

  const dateInitDetailRef = useRef();
  const nameDetailRef = useRef();
  const observationsRef = useRef();
  const priceDetailRef = useRef();

  const dateInitTreatmentRef = useRef();
  const nameTreatmentRef = useRef();

  useEffect(() => {
    let total = 0;
    values.forEach((value) => {
      total += Number(value.value);
    });
    setTotal(total);
  }, [values]);

  const addDetailTreatment = () => {
    if (
      nameDetailRef.current.value === "" ||
      dateInitDetailRef.current.value === "" ||
      priceDetailRef.current.value === ""
    ) {
      swal("Error", "Todos los campos son obligatorios", "error");
      return;
    }
    setValues([
      ...values,
      {
        name: nameDetailRef.current.value,
        date: dateInitDetailRef.current.value,
        observations: observationsRef.current.value,
        value: priceDetailRef.current.value,
      },
    ]);
    closeModal();
  };

  const deleteDetailTreatment = (index) => {
    values.splice(index, 1);
    setValues([...values]);
  };

  const addTreatment = () => {
    const treatmentAndPay = {
      dateInit: dateInitTreatmentRef.current.value,
      treatment: nameTreatmentRef.current.value,
      dniPatient,
      values,
    };

    if (treatmentAndPay.dateInit === "" || treatmentAndPay.treatment === "") {
      swal(
        "Error",
        "Por favor rellene la fecha y el nombre del tratamiento",
        "error"
      );
      return;
    }

    fetch(TREATMENT_AND_PAY, {
      method: "POST",
      headers: {
        Authorization: getAhutorization(),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ treatmentAndPay }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "ok") {
          swal("Exito", "Tratamiento creado exitosamente", "success").then(
            () => {
              cancelAddTreatment();
            }
          );
          cancelAddTreatment();
        } else {
          swal("Error", res.status, "error");
        }
      });
  };
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    nameDetailRef.current.value = "";
    dateInitDetailRef.current.value = "";
    observationsRef.current.value = "";
    priceDetailRef.current.value = "";
    setShowModal(false);
  };
  return (
    <Main title="Crear un nuevo tratamiento">
      <Modal show={showModal}>
        <Main title="Añadir detalle de tratamiento">
          <div className="grid grid-cols-8 gap-4">
            <Input
              type="date"
              label="Fecha de Creación"
              className="col-span-2"
              reference={dateInitDetailRef}
            />
            <Input
              label="Nombre del Detalle del Tratamiento"
              placeholder="20 paquetes de ligas de ortodoncia"
              className="col-span-6"
              reference={nameDetailRef}
            />
            <Input
              label="Observaciones"
              placeholder=""
              className="col-span-5"
              reference={observationsRef}
            />
            <Input
              type="number"
              label="Valor del detalle del tratamiento"
              placeholder="50.00"
              className="col-span-3"
              reference={priceDetailRef}
            />
            <div className={`col-span-8 w-full flex justify-between mt-4`}>
              <button
                onClick={closeModal}
                className={`bg-[#F44336] hover:bg-[#C62828] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
              >
                <div className="font-semibold text-lg">Cancelar</div>
              </button>
              <button
                onClick={addDetailTreatment}
                className={`bg-[#00C853] hover:bg-[#69F0AE] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
              >
                <div className="font-semibold text-lg">Anadir</div>
                <FaSave size={"22px"} />
              </button>
            </div>
          </div>
        </Main>
      </Modal>
      <div className="w-[1200px] grid grid-cols-12 gap-4">
        <Input
          type="date"
          label="Fecha Inicio"
          className="col-span-2"
          reference={dateInitTreatmentRef}
        />
        <Input
          label="Nombre del Tratamiento"
          placeholder="Ortodoncia"
          className="col-span-7"
          reference={nameTreatmentRef}
        />
        <div className="col-span-3 flex flex-col gap-1">
          <div>Valor Total del tratamiento</div>
          <span className="text-3xl font-bold">${total.toFixed(2)}</span>
        </div>

        <span className="col-span-12 font-semibold">
          Especificaciones del Tratamiento
        </span>
        <div className="col-span-12 flex justify-end">
          <button
            onClick={openModal}
            className={`bg-[#2196F3] hover:bg-[#008bfd] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
          >
            <div className="font-semibold text-lg">Añadir</div>
            <FaPlusCircle size={"22px"} />
          </button>
        </div>
        <div className="col-span-12 rounded-xl overflow-hidden textArea">
          <div className="grid grid-cols-12">
            <div className="col-span-12 grid grid-cols-12 bg-[#673AB7] text-white p-4 font-semibold">
              <span className="col-span-2">Fecha de Creación</span>
              <span className="col-span-4">Detalle de Tratamiento</span>
              <span className="col-span-4">Observaciones</span>
              <span className="col-span-1">Valor</span>
              <span className="col-span-1">Eliminar</span>
            </div>
            {values.length > 0 &&
              values.map((value, index) => (
                <div
                  key={index}
                  className={cx(
                    "col-span-12 grid grid-cols-12 p-4 hover:bg-purple-200",
                    {
                      "bg-purple-100": index % 2 === 0,
                      "bg-purple-100/50": index % 2 !== 0,
                    }
                  )}
                >
                  <div className="col-span-2">{value.date}</div>
                  <div className="col-span-4">{value.name}</div>
                  <div className="col-span-4">{value.observations}</div>
                  <div className="col-span-1">${value.value}</div>
                  <button
                    onClick={() => deleteDetailTreatment(index)}
                    className="col-span-1"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            {values.length === 0 && (
              <div className="col-span-12 p-4 text-[#9E9E9E] text-center">
                No hay detalles del tratamiento
              </div>
            )}
          </div>
        </div>
        <div className={`col-span-12 w-full flex justify-between mt-4`}>
          <button
            onClick={cancelAddTreatment}
            className={`bg-[#F44336] hover:bg-[#C62828] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
          >
            <div className="font-semibold text-lg">Cancelar</div>
          </button>
          <button
            onClick={addTreatment}
            className={`bg-[#00C853] hover:bg-[#69F0AE] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
          >
            <div className="font-semibold text-lg">Crear Tratamiento</div>
            <FaSave size={"22px"} />
          </button>
        </div>
      </div>
    </Main>
  );
}
