import { Link } from "react-router-dom";
import { FaTeethOpen, FaVenus, FaMars, FaQuestion } from "react-icons/fa";
import { yearsPatient } from "../helpers/constants";

export default function FoundPatienCard({ patient, index }) {
  const { names, dni, dateBorn, phone, sex } = patient;
  
  const years = yearsPatient(dateBorn)
  return (
    <tr>
      <th>{index}</th>
      <th>{names}</th>
      <th>{dni}</th>
      <th>{years}</th>
      <th>{phone}</th>
      <th>
        {sex === 1 ? (
          <FaMars size={"27px"} color="#1E88E5" />
          
        ) : sex === 2 ? (
          <FaVenus size={"27px"} color="#5E35B1" />
        ) : (
          <FaQuestion size={"24px"} color="#616161" />
        )}
      </th>
      <th>
        <Link to={`/gestion-patient/${dni}`}>
          <div className="bg-[#00C853] border p-2 rounded-xl w-12 flex justify-center">
            <FaTeethOpen size={"22px"} color="white" />
          </div>
        </Link>
      </th>
    </tr>
  );
}
