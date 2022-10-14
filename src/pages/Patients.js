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
  const [patientsLocal, setPatientsLocal] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [select, setSelect] = useState(0);

  useEffect(() => {
    setReady(false);
    switch (select) {
      case 0:
        setPatientsLocal(patients.filter((pat)=>pat.names.includes(inputSearch)))
        break;
      case 1:
        setPatientsLocal(patients.filter((pat)=>pat.dni.includes(inputSearch)))
        break;
      case 2:
        setPatientsLocal(patients.filter((pat)=>pat.phone.includes(inputSearch)))
        break;
    
      default:
        break;
    }
    setReady(true);
  }, [inputSearch])
  

  const inputHandle = (e) => {
    setInputSearch(e.target.value);
  }

  const comboHandle = (e)=>{
    setSelect(e.target.selectedIndex);
  }

  useEffect(() => {
    allPatients().then(data=>{
      setPatients(data.data);
      setPatientsLocal(data.data)
    })
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
          value={inputSearch}
          onChange={inputHandle}
        />
        <Input
          label="Por:"
          type="select"
          values={["Nombre", "Cédula", "Teléfono"]}
          className="col-span-2"
          onChange={comboHandle}
        />
        <div className="flex items-end w-full col-span-2">
          <ButtonIcon text="Buscar" icon={<FaSearch size={"20px"}/>}/>
        </div>
      </div>
      {ready?<FoundPatients
        patients={patientsLocal}
      />:<Loader logo={false} width="150px" height="150px"/>}
    </Main>
  );
}
