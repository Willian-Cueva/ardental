import { useEffect } from "react";
import { useState } from "react";
import { FaPlusCircle, FaUndoAlt, FaWindowClose } from "react-icons/fa";
import swal from "sweetalert";
import Input from "./Input";
import Loader from "./Loader";
import Main from "./Main";
import Modal from "./Modal";
import RowTablePay from "./RowTablePay";
import scrollBarStyles from "./styles/ScrollBar.module.css";

export default function TablePay({ editMode = false }) {
  const names = [
    "Fecha",
    "Abono",
    "Saldo",
    "Observaciones",
    "Editar",
    "Eliminar",
  ];
  const [ready, setReady] = useState(false);
  const [pays, setPays] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editOnePay, setEditOnePay] = useState(false);
  const [indexEdit, setIndexEdit] = useState(-1);

  useEffect(() => {
    const datos = [];
    setPays(datos);
    setReady(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setEditOnePay(false);
    cleanPanel();
  };

  const cleanPanel = () => {
    const d = document,
      $date = d.getElementById("id-inp-pay-date"),
      $pass = d.getElementById("id-inp-pay-pass"),
      $balance = d.getElementById("id-inp-pay-balance"),
      $observations = d.getElementById("id-inp-pay-observations");
    $date.value = "";
    $pass.value = "";
    $balance.value = "";
    $observations.value = "";
  };

  const newPay = () => {
    const d = document,
      $date = d.getElementById("id-inp-pay-date"),
      $pass = d.getElementById("id-inp-pay-pass"),
      $balance = d.getElementById("id-inp-pay-balance"),
      $observations = d.getElementById("id-inp-pay-observations");
    if (editOnePay) {
      setPays(
        pays.map((el, id) => {
          if (id === indexEdit) {
            setEditOnePay(false);
            return {
              date: $date.value,
              pass: $pass.value,
              balance: $balance.value,
              observations: $observations.value,
            };
          } else {
            return el;
          }
        })
      );
    } else {
      setPays([
        {
          date: $date.value,
          pass: $pass.value,
          balance: $balance.value,
          observations: $observations.value,
        },
        ...pays,
      ]);
    }

    closeModal();
  };

  const deletedPay = (index) => {
    swal({
      title: "Eliminar",
      text: "¿Estas segur@ que deseas eliminar este elemento?",
      icon: "warning",
      buttons: ["No", "Sí"],
    }).then((res) => {
      if (res) {
        setPays(pays.filter((el, id) => id !== index));
      }
    });
  };
  const editPay = (index) => {
    const d = document,
      $date = d.getElementById("id-inp-pay-date"),
      $pass = d.getElementById("id-inp-pay-pass"),
      $balance = d.getElementById("id-inp-pay-balance"),
      $observations = d.getElementById("id-inp-pay-observations");

    $date.value = pays[index].date;
    $pass.textContent = pays[index].part;
    $balance.textContent = pays[index].diagnostic;
    $observations.textContent = pays[index].treatment;

    console.log(index,pays);

    setEditOnePay(true);
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
                Añadir una Forma de Pago
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
            <div className="grid grid-cols-10 gap-4">
              <Input
                id={"id-inp-pay-date"}
                label="Fecha"
                type="date"
                className="col-span-2"
              />
              <Input
                id={"id-inp-pay-pass"}
                label="Abono"
                type="number"
                className="col-span-3"
                placeholder="00.0"
              />
              <Input
                id={"id-inp-pay-balance"}
                label="Saldo"
                type="number"
                className="col-span-3"
                placeholder="00.0"
              />
              <Input
                id={"id-inp-pay-observations"}
                label="Observaciones"
                type="textArea"
                className="col-span-5"
              />
            </div>
          </div>
          <div className="w-full flex justify-between mt-4">
            <div
              className={`cursor-pointer bg-[#F44336] hover:bg-[#C62828] px-2 min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1`}
              onClick={() => {
                setShowModal(false);
              }}
            >
              <div className="font-semibold text-lg">Cancelar</div>
            </div>
            <div
              className={`cursor-pointer bg-[#00C853] hover:bg-[#69F0AE] px-2 min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1`}
              onClick={() => {
                newPay(false);
              }}
            >
              <div className="font-semibold text-lg">{editMode?"Actualizar":"Guardar"}</div>
              {editOnePay ? (
                <FaUndoAlt size={"22px"} />
              ) : (
                <FaPlusCircle size={"22px"} />
              )}
            </div>
          </div>
        </Main>
      </Modal>
      <div className="w-full flex justify-end">
        <div id="id-div-pays" className="">
          {JSON.stringify(pays)}
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
            pays.map((pay, index) => (
              <RowTablePay
              key={`pay-${index}`}
                pay={pay}
                index={index}
                edit={editPay}
                deleted={deletedPay}
              />
            ))
          ) : (
            <Loader />
          )}
        </table>
        {pays.length === 0 && (
          <div className="h-[50px] w-full flex justify-center items-center bg-[#b39ddb] font-semibold text-[#212121]">
            <div>No hay elementos</div>
          </div>
        )}
      </div>
    </>
  );
}
