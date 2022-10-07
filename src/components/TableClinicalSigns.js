import TextArea from "./TextArea";
export default function TableClinicalSigns() {

  

  const names = ["Nombre", "Signos Clínicos", "Observaciones"];

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
