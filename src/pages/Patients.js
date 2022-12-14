import Input from "../components/Input";
import Main from "../components/Main";
import FoundPatients from "../components/FoundPatients";
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
    switch (select) {
      case 0:
        setPatientsLocal(patients.filter((pat)=>pat.names.toLowerCase().includes(inputSearch.toLowerCase())))
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
    }).finally(()=>setReady(true))
  }, [])
  
  return (
    <Main title="Todos los Pacientes">
      <div className="grid grid-cols-10 gap-2 mb-4">
        <Input
          label="Buscar"
          type="search"
          placeholder="Busqueda"
          className="col-span-8"
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
      </div>
      {ready?<FoundPatients
        patients={patientsLocal}
      />:<Loader text={"Cargando pacientes por favor espere...!"} logo={true} width="150px" height="150px"/>}
    </Main>
  );
}
