import { Link } from "react-router-dom";
import { FaTeethOpen, FaVenus, FaMars, FaQuestion } from "react-icons/fa";

export default function FoundPatienCard({ patient, index }) {
  const { name, dni, years, phone, gener } = patient;
  return (
    <tr>
      <th>{index}</th>
      <th>{name}</th>
      <th>{dni}</th>
      <th>{years}</th>
      <th>{phone}</th>
      <th>
        {gener === 1 ? (
          <FaVenus size={"27px"} color="#5E35B1" />
        ) : gener === 2 ? (
          <FaMars size={"27px"} color="#1E88E5" />
        ) : (
          <FaQuestion size={"24px"} color="#616161" />
        )}
      </th>
      <th>
        <Link to={`/gestion-patient/${dni}`}>
          <div className="bg-[#00C853] border p-2 rounded-xl w-12 flex justify-center">
            <FaTeethOpen color="white" />
          </div>
        </Link>
      </th>
    </tr>
  );
}
