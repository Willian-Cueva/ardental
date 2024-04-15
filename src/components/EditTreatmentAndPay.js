import React, { useEffect, useRef, useState } from "react";
import Main from "./Main";
import Input from "./Input";
import { FaEdit, FaPlusCircle, FaSave, FaTrash } from "react-icons/fa";
import Modal from "./Modal";
import cx from "clsx";
import swal from "sweetalert";
import { TREATMENT_AND_PAY, WAY_PAYS_METHODS } from "../helpers/constants";
import useGlobalState from "../hooks/useGlobalState";

export default function EditTreatmentAndPay({
  cancelEditTreatment = () => {},
  treatmentAndPay = {},
}) {
  const { getAhutorization } = useGlobalState();

  const [showModal, setShowModal] = useState(false);
  const [showModalFollowUp, setShowModalFollowUp] = useState(false);
  const [values, setValues] = useState(treatmentAndPay.values || []);
  const [followUp, setFollowUp] = useState(treatmentAndPay.followUp || []);
  const [total, setTotal] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [indexToEdit, setIndexToEdit] = useState(-1);

  const dateInitDetailRef = useRef();
  const nameDetailRef = useRef();
  const observationsRef = useRef();
  const priceDetailRef = useRef();
  const dateEndDetailRef = useRef();

  const dateInitTreatmentRef = useRef();
  const dateEndTreatmentRef = useRef();
  const nameTreatmentRef = useRef();

  const dateFollowUpRef = useRef();
  const pieceFollowUpRef = useRef();
  const diagnosticFollowUpRef = useRef();
  const treatmentFollowUpRef = useRef();
  const paymentFollowUpRef = useRef();
  const waypayFollowUpRef = useRef();

  useEffect(() => {
    dateInitTreatmentRef.current.value = treatmentAndPay.dateInit;
    nameTreatmentRef.current.value = treatmentAndPay.treatment;
    dateEndTreatmentRef.current.value = treatmentAndPay.dateEnd;
  }, []);

  useEffect(() => {
    let total = 0;
    values.forEach((value) => {
      total += Number(value.value);
    });
    setTotal(total);
  }, [values]);

  useEffect(() => {
    let totalPayment = 0;
    followUp.forEach((value) => {
      totalPayment += Number(value.payment);
    });
    setTotalPayment(totalPayment);
  }, [followUp]);

  const openModelFollowUp = () => {
    setShowModalFollowUp(true);
  };

  const closeModalFollowUp = () => {
    dateFollowUpRef.current.value = "";
    pieceFollowUpRef.current.value = "";
    diagnosticFollowUpRef.current.value = "";
    treatmentFollowUpRef.current.value = "";
    paymentFollowUpRef.current.value = "";
    setShowModalFollowUp(false);
    setIndexToEdit(-1);
  };

  const addFollowUp = () => {
    if (
      dateFollowUpRef.current.value === "" ||
      pieceFollowUpRef.current.value === ""
    ) {
      swal("Error", "Todos los campos fecha y pieza son obligatorios", "error");
      return;
    }
    if (indexToEdit !== -1) {
      followUp[indexToEdit] = {
        date: dateFollowUpRef.current.value,
        part: pieceFollowUpRef.current.value,
        diagnostic: diagnosticFollowUpRef.current.value,
        treatment: treatmentFollowUpRef.current.value,
        payment: paymentFollowUpRef.current.value,
        wayPay: waypayFollowUpRef.current.value,
      };
      setFollowUp([...followUp]);
      closeModalFollowUp();
      setIndexToEdit(-1);
      return;
    }
    setFollowUp([
      ...followUp,
      {
        date: dateFollowUpRef.current.value,
        part: pieceFollowUpRef.current.value,
        diagnostic: diagnosticFollowUpRef.current.value,
        treatment: treatmentFollowUpRef.current.value,
        payment: paymentFollowUpRef.current.value,
        wayPay: waypayFollowUpRef.current.value,
      },
    ]);
    closeModalFollowUp();
    setIndexToEdit(-1);
  };

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

  const editTreatment = () => {
    const treatmentAndPayModel = {
      _id: treatmentAndPay._id.toString(),
      values,
      dateInit: dateInitTreatmentRef.current.value,
      dateEnd: dateEndTreatmentRef.current.value,
      dniPatient: treatmentAndPay.dniPatient,
      treatment: nameTreatmentRef.current.value,
      followUp,
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
      method: "PUT",
      headers: {
        Authorization: getAhutorization(),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: treatmentAndPayModel }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "ok") {
          swal("Exito", "Tratamiento actualizado exitosamente", "success").then(
            () => {
              window.location.reload();
            }
          );
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

  const editFollowUpIndex = (index) => {
    setIndexToEdit(index);
    dateFollowUpRef.current.value = followUp[index].date;
    pieceFollowUpRef.current.value = followUp[index].part;
    diagnosticFollowUpRef.current.value = followUp[index].diagnostic;
    treatmentFollowUpRef.current.value = followUp[index].treatment;
    paymentFollowUpRef.current.value = followUp[index].payment;
    waypayFollowUpRef.current.value = followUp[index].wayPay;
    setShowModalFollowUp(true);
  };

  const deleteFollowUpIndex = (index) => {
    swal({
      title: "¿Estas seguro de eliminar este seguimiento?",
      icon: "warning",
      buttons: ["No", "Sí"],
    })
      .then((res) => {
        if (res) {
          followUp.splice(index, 1);
          setFollowUp([...followUp]);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Main title="Seguimiento del tratamiento">
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
              type="date"
              label="Fecha de finalizacion del tratamiento"
              className="col-span-2"
              reference={dateEndDetailRef}
            />
            <Input
              label="Nombre del Detalle del Tratamiento"
              placeholder="20 paquetes de ligas de ortodoncia"
              className="col-span-8"
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

      {/* Modal follow up */}
      <Modal show={showModalFollowUp}>
        <Main title={`Añadir seguimiento de ${treatmentAndPay.treatment}`}>
          <div className="grid grid-cols-8 gap-4">
            <Input
              type="date"
              label="Fecha"
              className="col-span-2"
              reference={dateFollowUpRef}
            />
            <Input
              label="Pieza"
              placeholder=""
              className="col-span-6"
              reference={pieceFollowUpRef}
            />
            <Input
              label="Diagnóstico"
              type="textArea"
              rows="2"
              placeholder=""
              className="col-span-4"
              reference={diagnosticFollowUpRef}
            />
            <Input
              label="Tratamiento"
              placeholder=""
              type="textArea"
              rows="2"
              className="col-span-4"
              reference={treatmentFollowUpRef}
            />
            <Input
              type="number"
              label="Abono"
              placeholder="50.00"
              className="col-span-2"
              reference={paymentFollowUpRef}
            />
            <Input
              label="Método de Pago"
              type="select"
              placeholder="50.00"
              className="col-span-3"
              reference={waypayFollowUpRef}
              values={WAY_PAYS_METHODS}
            />
            <div className={`col-span-8 w-full flex justify-between mt-4`}>
              <button
                onClick={closeModalFollowUp}
                className={`bg-[#F44336] hover:bg-[#C62828] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
              >
                <div className="font-semibold text-lg">Cancelar</div>
              </button>
              <button
                onClick={addFollowUp}
                className={`bg-[#00C853] hover:bg-[#69F0AE] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
              >
                <div className="font-semibold text-lg">Anadir</div>
                <FaSave size={"22px"} />
              </button>
            </div>
          </div>
        </Main>
      </Modal>

      <div className="w-[1200px] grid grid-cols-12 gap-4 max-h-[500px] overflow-hidden overflow-y-scroll">
        <span className="col-span-12 font-semibold text-xl">
          Detalles del Tratamiento
        </span>
        <Input
          type="date"
          label="Fecha Inicio"
          className="col-span-3"
          reference={dateInitTreatmentRef}
        />
        <Input
          type="date"
          label="Fecha de Finalización del Tratamiento"
          className="col-span-3"
          reference={dateEndTreatmentRef}
        />
        <Input
          label="Nombre del Tratamiento"
          placeholder="Ortodoncia"
          className="col-span-4"
          reference={nameTreatmentRef}
        />
        <div className="sticky top-0 col-span-12 grid grid-cols-12 gap-4 pb-4 bg-white">
          <div className="col-span-3 flex flex-col gap-1">
            <div>Valor Total del tratamiento</div>
            <span className="text-3xl font-bold">${total.toFixed(2)}</span>
          </div>
          <div className="col-span-3 flex flex-col gap-1">
            <div>Valor Total Abonado</div>
            <span className="text-3xl font-bold text-green-500">
              ${totalPayment.toFixed(2)}
            </span>
          </div>
          <div className="col-span-3 flex flex-col gap-1">
            <div>Valor restante por cancelar</div>
            <span className="text-3xl font-bold text-red-500">
              ${(total - totalPayment).toFixed(2)}
            </span>
          </div>
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
                  <div className="col-span-1 w-full flex justify-center">
                    <button
                      onClick={() => deleteDetailTreatment(index)}
                      className="px-3 py-2 rounded-xl bg-red-500"
                    >
                      <FaTrash size={"22px"} color={"white"} />
                    </button>
                  </div>
                </div>
              ))}
            {values.length === 0 && (
              <div className="col-span-12 p-4 text-[#9E9E9E] text-center">
                No hay detalles del tratamiento
              </div>
            )}
          </div>
        </div>

        <hr className="col-span-12 mt-8" />
        <span className="col-span-12 font-semibold text-xl">
          Seguimiento de {treatmentAndPay.treatment}
        </span>

        <div className="col-span-12 flex justify-end">
          <button
            onClick={openModelFollowUp}
            className={`bg-[#2196F3] hover:bg-[#008bfd] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
          >
            <div className="font-semibold text-lg">Añadir</div>
            <FaPlusCircle size={"22px"} />
          </button>
        </div>

        <div className="col-span-12 rounded-xl overflow-hidden textArea">
          <div className="grid grid-cols-12">
            <div className="col-span-12 grid grid-cols-12 bg-lime-600 text-white p-4 font-semibold gap-2">
              <span className="col-span-1">Fecha</span>
              <span className="col-span-2">Pieza</span>
              <span className="col-span-2">Diagnóstico</span>
              <span className="col-span-2">Tratamiento</span>
              <span className="col-span-1">Abono</span>
              <span className="col-span-2">Tipo de pago</span>
              <span className="col-span-1">Editar</span>
              <span className="col-span-1">Eliminar</span>
            </div>
            {followUp.length > 0 &&
              followUp.map((value, index) => (
                <div
                  key={index}
                  className={cx(
                    "col-span-12 grid grid-cols-12 p-4 gap-2 hover:bg-lime-200",
                    {
                      "bg-lime-100": index % 2 === 0,
                      "bg-lime-100/50": index % 2 !== 0,
                    }
                  )}
                >
                  <div className="col-span-1">{value.date}</div>
                  <div className="col-span-2">{value.part}</div>
                  <div className="col-span-2">{value.diagnostic}</div>
                  <div className="col-span-2">{value.treatment}</div>
                  <div className="col-span-1">${value.payment}</div>
                  <div className="col-span-2">{value.wayPay}</div>
                  <div className="col-span-1 w-full flex justify-center">
                    <button
                      onClick={() => editFollowUpIndex(index)}
                      className="px-3 py-2 rounded-xl bg-blue-500"
                    >
                      <FaEdit size={"22px"} color={"white"} />
                    </button>
                  </div>
                  <div className="col-span-1 w-full flex justify-center">
                    <button
                      onClick={() => deleteFollowUpIndex(index)}
                      className="px-3 py-2 rounded-xl bg-red-500"
                    >
                      <FaTrash size={"22px"} color={"white"} />
                    </button>
                  </div>
                </div>
              ))}
            {followUp.length === 0 && (
              <div className="col-span-12 p-4 text-[#9E9E9E] text-center">
                No hay seguimientos de {treatmentAndPay.treatment} registrados
              </div>
            )}
          </div>
        </div>

        <div
          className={`sticky bottom-0 bg-white p-4 w-full col-span-12 flex justify-between mt-4`}
        >
          <button
            onClick={cancelEditTreatment}
            className={`bg-[#F44336] hover:bg-[#C62828] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
          >
            <div className="font-semibold text-lg">Cancelar</div>
          </button>
          <button
            onClick={editTreatment}
            className={`bg-[#00C853] hover:bg-[#69F0AE] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
          >
            <div className="font-semibold text-lg">Actualizar Tratamiento</div>
            <FaSave size={"22px"} />
          </button>
        </div>
      </div>
    </Main>
  );
}
