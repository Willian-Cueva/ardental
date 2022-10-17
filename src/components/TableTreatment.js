import { useEffect } from "react";
import { useState } from "react";
import { FaPlusCircle, FaUndoAlt, FaWindowClose } from "react-icons/fa";
import swal from "sweetalert";
import { treatmentsPatient } from "../services/RegisterPatient.service";
import ButtonIcon from "./ButtonIcon";
import Input from "./Input";
import Loader from "./Loader";
import Main from "./Main";
import Modal from "./Modal";
import RowTableTreatment from "./RowTableTreatment";
import scrollBarStyles from "./styles/ScrollBar.module.css";

export default function TableTreatment({ editMode = false,search }) {
  const names = [
    "Fecha",
    "Pieza",
    "Diagnóstico",
    "Tratamiento",
    "Editar",
    "Eliminar",
  ];
  const [ready, setReady] = useState(false);
  const [treatments, setTreatments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editOneTreatment, setEditOneTreatment] = useState(false);
  const [indexEdit, setIndexEdit] = useState(-1);
  useEffect(() => {
    if(editMode)treatmentsPatient(search).then((patientsData)=>setTreatments(patientsData))
    setReady(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setEditOneTreatment(false);
    cleanPanel();
  };

  const cleanPanel = () => {
    const d = document,
      $date = d.getElementById("id-inp-treat-date"),
      $part = d.getElementById("id-inp-treat-part"),
      $diagnostic = d.getElementById("id-inp-treat-diagnostic"),
      $treatment = d.getElementById("id-inp-treat-treatment");
    $date.value = "";
    $part.value = "";
    $diagnostic.value = "";
    $treatment.value = "";
  };

  const newTreatment = () => {
    const d = document,
      $date = d.getElementById("id-inp-treat-date"),
      $part = d.getElementById("id-inp-treat-part"),
      $diagnostic = d.getElementById("id-inp-treat-diagnostic"),
      $treatment = d.getElementById("id-inp-treat-treatment");
    if (editOneTreatment) {
      setTreatments(
        treatments.map((el, id) => {
          if (id === indexEdit) {
            setEditOneTreatment(false);
            return {
              date: $date.value,
              part: $part.value,
              diagnostic: $diagnostic.value,
              treatment: $treatment.value,
            };
          } else {
            return el;
          }
        })
      );
    } else {
      setTreatments([
        {
          date: $date.value,
          part: $part.value,
          diagnostic: $diagnostic.value,
          treatment: $treatment.value,
        },
        ...treatments,
      ]);
    }

    closeModal();
  };

  const deleteTreatment = (index) => {
    swal({
      title: "Eliminar",
      text: "¿Estas segur@ que deseas eliminar este elemento?",
      icon: "warning",
      buttons: ["No", "Sí"],
    }).then((res) => {
      if (res) {
        setTreatments(treatments.filter((el, id) => id !== index));
      }
    });
  };
  const editTreatment = (index) => {
    const d = document,
      $date = d.getElementById("id-inp-treat-date"),
      $part = d.getElementById("id-inp-treat-part"),
      $diagnostic = d.getElementById("id-inp-treat-diagnostic"),
      $treatment = d.getElementById("id-inp-treat-treatment");

    $date.value = treatments[index].date;
    $part.value = treatments[index].part;
    $diagnostic.value = treatments[index].diagnostic;
    $treatment.value = treatments[index].treatment;

    setEditOneTreatment(true);
    setIndexEdit(index);
    setShowModal(true);
  };

  return (
    <>
      <Modal show={showModal}>
        <Main
          title={
            <div className="flex justify-between w-full">
              <div className="font-bold">
                Añadir un Plan y Seguimiento de Tratamiento
              </div>
              <div
                className="text-red-600 cursor-pointer"
                onClick={() => {
                  closeModal();
                }}
              >
                <FaWindowClose size={"35px"} />
              </div>
            </div>
          }
        >
          <div
            className={`${scrollBarStyles.scrollBar} ${scrollBarStyles.area}`}
          >
            <div className="md:grid md:grid-cols-10 md:gap-4">
              <Input
                id={"id-inp-treat-date"}
                label="Fecha"
                type="date"
                className="col-span-2"
              />
              <Input
                id={"id-inp-treat-part"}
                label="Pieza"
                type="text"
                className="col-span-4"
                placeholder="Pieza"
              />
              <Input
                id={"id-inp-treat-diagnostic"}
                label="Diagnóstico"
                type="textArea"
                className="col-span-5"
              />
              <Input
                id={"id-inp-treat-treatment"}
                label="Tratamiento"
                type="textArea"
                className="col-span-5"
              />
            </div>
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
            <div
              onClick={() => {
                newTreatment();
              }}
            >
              <ButtonIcon
                text={editOneTreatment ? "Actualizar" : "Añadir"}
                color={`bg-[#00C853] hover:bg-[#69F0AE] px-2`}
                icon={
                  editOneTreatment ? (
                    <FaUndoAlt size={"22px"} />
                  ) : (
                    <FaPlusCircle size={"22px"} />
                  )
                }
              />
            </div>
          </div>
        </Main>
      </Modal>
      <div className="w-full flex justify-end">
        <div id="id-div-treatments" className="hidden">
          {JSON.stringify(treatments)}
        </div>
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
        <table>
          <thead>
            <tr>
              {names.map((el) => (
                <th>{el}</th>
              ))}
            </tr>
          </thead>
          {ready ? (
            treatments.map((treatment, index) => (
              <RowTableTreatment
                key={`${index}-treatment`}
                treatment={treatment}
                edit={editTreatment}
                deleted={deleteTreatment}
                index={index}
              />
            ))
          ) : (
            <Loader />
          )}
        </table>
        {treatments.length === 0 && (
          <div className="h-[50px] w-full flex justify-center items-center bg-[#b39ddb] font-semibold text-[#212121]">
            <div>No hay elementos</div>
          </div>
        )}
      </div>
    </>
  );
}
