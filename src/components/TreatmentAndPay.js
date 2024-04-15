import { useEffect } from "react";
import { useState } from "react";
import { FaEdit, FaPlusCircle, FaTrash } from "react-icons/fa";
import Loader from "./Loader";
import Modal from "./Modal";
import useGlobalState from "../hooks/useGlobalState";
import { TREATMENT_AND_PAY } from "../helpers/constants";
import AddTreatmentAndPay from "./AddTreatmentAndPay";
import EditTreatmentAndPay from "./EditTreatmentAndPay";
import swal from "sweetalert";

export default function TreatmentAndPay({ dniPatient }) {
  const { getAhutorization } = useGlobalState();
  const [ready, setReady] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [treatmentsAndPays, setTreatmentsAndPays] = useState([]);
  const [indexEdit, setIndexEdit] = useState(-1);

  useEffect(() => {
    fetch(TREATMENT_AND_PAY + dniPatient, {
      headers: {
        Authorization: getAhutorization(),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((res) => {
        if (res.ok) {
          return res.json(); // Convertir la respuesta a JSON
        } else {
          throw new Error("Error en la solicitud"); // Lanzar un error si la solicitud no fue exitosa
        }
      })
      .then((data) => {
        if (data.status === "ok") {
          setReady(true);
          setTreatmentsAndPays(data.data); // Establecer los datos en el estado
        } // Marcar como listo para mostrar el componente
      })
      .catch((err) => console.log(err));
  }, [showModal]);

  const setIndexToEdit = (index) => {
    setIndexEdit(index);
    setShowModalEdit(true);
  };

  const cancelAddTreatment = () => {
    setShowModal(false);
  };

  const cancelEditTreatment = () => {
    setShowModalEdit(false);
  };

  const valueTotal = (values) => {
    let total = 0;
    values.forEach((value) => {
      total += value.value;
    });
    return total;
  };

  const totalPayment = (followUp) => {
    let total = 0;
    if (followUp.length === 0 || followUp === undefined) {
      return 0;
    }
    followUp.forEach((value) => {
      total += value.payment;
    });
    return total;
  };

  const deleteTreatmentAndPay = (index) => {
    swal({
      title: "Eliminar",
      text: "¿Estas segur@ que deseas eliminar este elemento?",
      type: "warning",
      buttons: ["No", "Sí"],
    }).then((isConfirm) => {
      if (isConfirm) {
        console.log("CONFIRMED");

        fetch(TREATMENT_AND_PAY + treatmentsAndPays[index]._id.toString(), {
          method: "DELETE",
          headers: {
            Authorization: getAhutorization(),
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          mode: "cors",
        })
          .then((res) => {
            if (res.ok) {
              return res.json(); // Convertir la respuesta a JSON
            } else {
              throw new Error("Error en la solicitud"); // Lanzar un error si la solicitud no fue exitosa
            }
          })
          .then((data) => {
            if (data.status === "ok") {
              swal({
                title: "Eliminado",
                text: "El elemento fue eliminado exitosamente",
                icon: "success",
                timer: "6000",
              });
            } // Marcar como listo para mostrar el componente
          })
          .catch((err) => console.log(err));
        const newTreatmentsAndPays = [...treatmentsAndPays];
        newTreatmentsAndPays.splice(index, 1);
        setTreatmentsAndPays(newTreatmentsAndPays);
      }
    });
  };

  if (!ready) {
    return <Loader />;
  }

  return (
    <>
      <Modal show={showModal}>
        <AddTreatmentAndPay
          cancelAddTreatment={cancelAddTreatment}
          dniPatient={dniPatient}
        />
      </Modal>
      {showModalEdit && (
        <Modal show={showModalEdit}>
          <EditTreatmentAndPay
            cancelEditTreatment={cancelEditTreatment}
            treatmentAndPay={treatmentsAndPays[indexEdit]}
          />
        </Modal>
      )}
      <div className="w-full flex justify-end">
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className={`bg-[#2196F3] hover:bg-[#008bfd] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3 mb-2`}
        >
          <div className="font-semibold text-lg">Añadir</div>
          <FaPlusCircle size={"22px"} />
        </button>
      </div>
      <div className="rounded-xl overflow-hidden textArea">
        <div className="grid grid-cols-12">
          <div className="col-span-12 grid grid-cols-12 bg-[#673AB7] text-white p-4 font-semibold">
            <span className="col-span-2">Fecha Inicio</span>
            <span className="col-span-4">Nombre del Tratamiento</span>
            <span className="col-span-2">Total</span>
            <span className="col-span-1">Abonado</span>
            <span className="col-span-2 whitespace-break-spaces">
              Seguimiento
            </span>
            <span className="col-span-1">Eliminar</span>
          </div>
          {treatmentsAndPays.map((treatmentAndPay, i) => (
            <div
              key={i}
              className="col-span-12 grid grid-cols-12 p-4 hover:bg-purple-200"
            >
              <div className="col-span-2">{treatmentAndPay.dateInit}</div>
              <div className="col-span-4">{treatmentAndPay.treatment}</div>
              <span className="col-span-2">
                ${valueTotal(treatmentAndPay.values)}
              </span>
              <span className="col-span-1">
                ${totalPayment(treatmentAndPay.followUp)}
              </span>
              <div className="col-span-2 w-full flex justify-center">
                <button
                  onClick={() => setIndexToEdit(i)}
                  className="px-3 py-2 rounded-xl bg-blue-500"
                >
                  <FaEdit size={"22px"} color={"white"} />
                </button>
              </div>
              <div className="col-span-1 w-full flex justify-center">
                <button
                  onClick={() => deleteTreatmentAndPay(i)}
                  className="px-3 py-2 rounded-xl bg-red-500"
                >
                  <FaTrash size={"22px"} color={"white"} />
                </button>
              </div>
            </div>
          ))}
          {treatmentsAndPays.length === 0 && (
            <div className="col-span-12 text-center py-4 text-[#757575]">
              No hay tratamientos o pagos registrados para este paciente
            </div>
          )}
        </div>
      </div>
    </>
  );
}
