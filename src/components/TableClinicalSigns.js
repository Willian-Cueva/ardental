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
          <td><TextArea id="id-txta-lips-cli"/></td>
          <td><TextArea id="id-txta-lips-obs"/></td>
        </tr>
        <tr>
          <td>Carrillos</td>
          <td><TextArea id="id-txta-cheeks-cli"/></td>
          <td><TextArea id="id-txta-cheeks-obs"/></td>
        </tr>
        <tr>
          <td>Piso de la Boca</td>
          <td><TextArea id="id-txta-floorMouth-cli"/></td>
          <td><TextArea id="id-txta-floorMouth-obs"/></td>
        </tr>
        <tr>
          <td>Lengua</td>
          <td><TextArea id="id-txta-tongue-cli"/></td>
          <td><TextArea id="id-txta-tongue-obs"/></td>
        </tr>
        <tr>
          <td>Encias</td>
          <td><TextArea id="id-txta-gums-cli"/></td>
          <td><TextArea id="id-txta-gums-obs"/></td>
        </tr>
        <tr>
          <td>Saliba</td>
          <td><TextArea id="id-txta-saliva-cli"/></td>
          <td><TextArea id="id-txta-saliva-obs"/></td>
        </tr>
        <tr>
          <td>Amigdalas</td>
          <td><TextArea id="id-txta-tonsils-cli"/></td>
          <td><TextArea id="id-txta-tonsils-obs"/></td>
        </tr>
        <tr>
          <td>ATM</td>
          <td><TextArea id="id-txta-ATM-cli"/></td>
          <td><TextArea id="id-txta-ATM-obs"/></td>
        </tr>
        <tr>
          <td>Ganglios</td>
          <td><TextArea id="id-txta-nodes-cli"/></td>
          <td><TextArea id="id-txta-nodes-obs"/></td>
        </tr>
        <tr>
          <td>Glandulas salivales</td>
          <td><TextArea id="id-txta-salivaryGlands-cli"/></td>
          <td><TextArea id="id-txta-salivaryGlands-obs"/></td>
        </tr>
      </table>
    </div>
  );
}
