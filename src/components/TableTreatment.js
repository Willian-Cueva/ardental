import { useEffect } from "react";
import { useState } from "react";
import Loader from "./Loader";
import RowTableTreatment from "./RowTableTreatment";
import styles from "./styles/Table.module.css";

export default function TableTreatment() {
  const names = ["Fecha", "Pieza", "Diagnóstico", "Tratamiento"];
  const [ready, setReady] = useState(false);
  const [treatments, setTreatments] = useState([]);
  useEffect(() => {
    const datos = [
      [
        "2022-10-03",
        "Braquet de inferior",
        "Esta con caries",
        "Debe lavarse los dientes 8 veces al día",
      ],
      [
        "2022-10-03",
        "Braquet de inferior",
        "Esta con caries",
        "Debe lavarse los dientes 8 veces al día",
      ],
    ];
    setTreatments(datos);
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
          treatments.map((treatment) => (
            <RowTableTreatment treatment={treatment} />
          ))
        ) : (
          <Loader />
        )}
      </table>
    </div>
  );
}
