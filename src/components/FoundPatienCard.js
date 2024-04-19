import { Link } from "react-router-dom";
import { FaTeethOpen, FaVenus, FaMars, FaQuestion } from "react-icons/fa";
import { yearsPatient } from "../helpers/constants";

export default function FoundPatienCard({ patient, index }) {
  const { names, dni, dateBorn, phone, sex } = patient;

  const years = yearsPatient(dateBorn);
  return (
    <tbody>
      <tr className={`${index % 2 === 0? "bg-[#ede7f6]" : "bg-[#3b39ddb]"} font-semibold`}>
        <td>{index}</td>
        <td>{names}</td>
        <td>{dni}</td>
        <td>{years}</td>
        <td>{phone}</td>
        <td>
          {sex === "Masculino" ? (
            <FaMars size={"27px"} color="#1E88E5" />
          ) : sex === "Femenino" ? (
            <FaVenus size={"27px"} color="#5E35B1" />
          ) : (
            <FaQuestion size={"24px"} color="#616161" />
          )}
        </td>
        <td>
          <Link to={`/gestion-patient/${dni}`}>
            <div className="bg-[#00C853] p-2 rounded-xl w-12 flex justify-center">
              <FaTeethOpen size={"22px"} color="white" />
            </div>
          </Link>
        </td>
      </tr>
    </tbody>
  );
}
