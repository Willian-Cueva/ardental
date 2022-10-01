import { useEffect } from "react";
import styles from "./styles/Table.module.css";
import TextArea from "./TextArea";
export default function TableClinicalSigns() {

  

  const names = ["Nombre", "Signos Clínicos", "Observaciones"];

  function autosize(e) {
    const el = e.target;
    setTimeout(function () {
      el.style.cssText = "height:auto; padding:0";
      // for box-sizing other than "content-box" use:
      // el.style.cssText = '-moz-box-sizing:content-box';
      el.style.cssText = "height:" + el.scrollHeight + "px";
    }, 0);
  }
    useEffect(() => {
    let textarea = document.querySelector(".textArea");
    textarea.addEventListener("keydown", autosize);
    return () => {
      textarea.removeEventListener("keydown", autosize);
    };
  }, []);
  return (
    <div className="rounded-xl overflow-hidden textArea">
      <table>
        <thead>
          <tr>
            {names.map((el) => (
              <th>{el}</th>
            ))}
          </tr>
        </thead>
        <tr>
          <td>Labios</td>
          <td><TextArea /></td>
          <td><TextArea /></td>
        </tr>
        <tr>
          <td>Carrillos</td>
          <td><TextArea /></td>
          <td><TextArea /></td>
        </tr>
        <tr>
          <td>Piso de la Boca</td>
          <td><TextArea /></td>
          <td><TextArea /></td>
        </tr>
        <tr>
          <td>Lengua</td>
          <td><TextArea /></td>
          <td><TextArea /></td>
        </tr>
        <tr>
          <td>Encias</td>
          <td><TextArea /></td>
          <td><TextArea /></td>
        </tr>
        <tr>
          <td>Saliba</td>
          <td><TextArea /></td>
          <td><TextArea /></td>
        </tr>
        <tr>
          <td>Amigdalas</td>
          <td><TextArea /></td>
          <td><TextArea /></td>
        </tr>
        <tr>
          <td>ATM</td>
          <td><TextArea /></td>
          <td><TextArea /></td>
        </tr>
        <tr>
          <td>Ganglios</td>
          <td><TextArea /></td>
          <td><TextArea /></td>
        </tr>
        <tr>
          <td>Glandulas salivales</td>
          <td><TextArea /></td>
          <td><TextArea /></td>
        </tr>
      </table>
    </div>
  );
}
