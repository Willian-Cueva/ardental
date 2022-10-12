import { useEffect, useState } from "react";
import {
  FaEdit,
  FaPlusCircle,
  FaSave,
  FaTrash,
  FaUndo,
  FaWindowClose,
} from "react-icons/fa";
import scrollBarStyles from "./styles/ScrollBar.module.css";
import Loader from "./Loader";
import Main from "./Main";
import Modal from "./Modal";
import Input from "./Input";
import swal from "sweetalert";
import { INPUT_TABLE } from "../helpers/styles";

export default function WayPay() {
  const [pays, setPays] = useState([]);
  const [ready, setReady] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editPay, setEditPay] = useState(false);
  const [indexedit, setIndexedit] = useState(-1);

  const d = document,
    $date = d.getElementById("id-inp-pay-date"),
    $pass = d.getElementById("id-inp-pay-pass"),
    $balance = d.getElementById("id-inp-pay-balance"),
    $obs = d.getElementById("id-inp-pay-obs");

  useEffect(() => {
    const data = [];
    setPays(data);
    setReady(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const cleanPanel = () => {
    $date.value = "";
    $pass.value = "";
    $balance.value = "";
    $obs.value = "";
  };

  const saveEditPays = () => {
    const pay = {
      date: $date.value,
      pass: $pass.value,
      balance: $balance.value,
      observations: $obs.value,
    };
    if (!editPay) {
      setPays([pay, ...pays]);
    } else {
      setPays(
        pays.map((payT, id) => {
          if (id === indexedit) {
            return pay;
          } else {
            return payT;
          }
        })
      );
    }
    setEditPay(false);
    setIndexedit(-1);
    cleanPanel();
    setShowModal(false);
  };

  const editButtonPay = (index)=>{
    $date.value = pays[index].date;
    $pass.value = pays[index].pass;
    $balance.value = pays[index].balance;
    $obs.value = pays[index].observations;
    setIndexedit(index);
    setEditPay(true);
    setShowModal(true);
  }
  const deteledPay = (index) => {
    swal({
      title: "Eliminar",
      text: "¿Está segur@ de eliminar esta forma de pago?",
      buttons: ["No","Si"]
    }).then(res=>{
      if(res)setPays(pays.filter((value,id)=>index!==id))
    })
  }

  return (
    <>
      <div id="id-div-pays" className="hidden">{JSON.stringify(pays)}</div>
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
            className={`${scrollBarStyles.scrollbar} ${scrollBarStyles.area}`}
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
                className="col-span-2"
                placeholder="100.0"
              />
              <Input
                id={"id-inp-pay-balance"}
                label="Saldo"
                type="number"
                className="col-span-2"
                placeholder="100.0"
              />
              <Input
                id={"id-inp-pay-obs"}
                label="Observaciones"
                type="textArea"
                className="col-span-10"
              />
            </div>
            <div className="w-full flex justify-between mt-4">
              <button
                onClick={() => {
                  closeModal();
                }}
                className="bg-[#F44336] hover:bg-[#C62828] text-white py-1 px-2 flex items-center gap-2 min-h-[50px] rounded-xl font-bold"
              >
                Cancelar
              </button>
              <button onClick={()=>{
                saveEditPays();
              }} className="bg-[#00C853] hover:bg-[#69F0AE] text-white py-1 px-2 flex items-center gap-2 min-h-[50px] rounded-xl font-bold">
                {editPay ? (
                  <>
                    Actualizar
                    <FaUndo size={"22px"} />
                  </>
                ) : (
                  <>
                    Guardar
                    <FaSave size={"22px"} />
                  </>
                )}
              </button>
            </div>
          </div>
        </Main>
      </Modal>
      <div className="w-full flex justify-end">
        <button
          onClick={() => {setShowModal(true)}}
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
              <th>Fecha</th>
              <th>Abono$</th>
              <th>Saldo$</th>
              <th>Observaciones</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          {ready ? (
            pays.length > 0 &&
            pays.map((el, index) => (
              <tr key={`pays-${index}`}>
                <td>
                  <input disabled className={INPUT_TABLE} type="date" value={el.date}/>
                </td>
                <td>
                  <input disabled className={`${INPUT_TABLE} w-[70px]`} type="number" value={el.pass} />
                </td>
                <td>
                  <input disabled className={`${INPUT_TABLE} w-[70px]`} type="number" value={el.balance} />
                </td>
                <td>
                  <textarea name="name-txta" value={el.observations}></textarea>
                </td>
                <td>
                  <div
                    onClick={() => {
                      editButtonPay(index)
                    }}
                    className="bg-[#5E35B1] cursor-pointer p-2 rounded-xl w-12 flex justify-center"
                  >
                    <FaEdit color="white" />
                  </div>
                </td>
                <td>
                  <div
                    onClick={() => {
                      deteledPay(index);
                    }}
                    className="bg-[#F44336] cursor-pointer p-2 rounded-xl w-12 flex justify-center"
                  >
                    <FaTrash color="white" />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <Loader />
          )}
        </table>
        {pays.length === 0 && (
          <div className="w-full h-[50px] flex justify-center items-center bg-[#b39ddb] font-semibold text-[#212121]">
            <div>No hay Elementos</div>
          </div>
        )}
      </div>
    </>
  );
}
