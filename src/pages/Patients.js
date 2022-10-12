import Input from "../components/Input";
import Main from "../components/Main";
import { FaSearch } from "react-icons/fa";
import FoundPatients from "../components/FoundPatients";
import ButtonIcon from "../components/ButtonIcon";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../components/Loader";
import { allPatients } from "../services/RegisterPatient.service";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    allPatients().then(data=>setPatients(data.data))
    setReady(true);
  }, [])
  
  return (
    <Main title="Todos los Pacientes">
      <div className="grid grid-cols-10 gap-2 mb-4">
        <Input
          label="Buscar"
          type="search"
          placeholder="Busqueda"
          className="col-span-6"
        />
        <Input
          label="Por:"
          type="select"
          values={["Nombre", "Cédula", "Teléfono"]}
          className="col-span-2"
        />
        <div className="flex items-end w-full col-span-2">
          <ButtonIcon text="Buscar" icon={<FaSearch size={"20px"}/>}/>
        </div>
      </div>
      {ready?<FoundPatients
        patients={patients}
      />:<Loader logo={false} width="150px" height="150px"/>}
    </Main>
  );
}
