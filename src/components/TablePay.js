import { useEffect, useState } from "react";
import Loader from "./Loader";
import RowTablePay from "./RowTablePay";
import styles from "./styles/Table.module.css";

export default function TablePay() {
  const names = ["Fecha", "Abono", "Saldo", "Observaciones"];
  const [ready, setReady] = useState(false);
  const [pays, setPays] = useState([]);
  useEffect(() => {
    const datos = [
      [
        "2022-10-03",
        12.30,
        300,
        "Debe lavarse los dientes 8 veces al día",
      ],
    ];
    setPays(datos);
    setReady(true);
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
        {ready ? (
          pays.map((pay) => (
            <RowTablePay pay={pay} />
          ))
        ) : (
          <Loader />
        )}
      </table>
    </div>
  );
}
