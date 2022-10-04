import Button from "../components/Button"
import Input from "../components/Input"
import Main from "../components/Main"
import {FaSearch} from "react-icons/fa"
import FoundPatients from "../components/FoundPatients"

export default function Patients() {
  return (
    <Main title="Todos los Pacientes">
        <div className="grid grid-cols-10 gap-2">
            <Input label="Buscar" type="search" placeholder="Busqueda" className="col-span-6"/>
            <Input label="Por:" type="select" values={["Nombre","Cédula","Teléfono"]} className="col-span-2"/>
            <div className="flex items-end w-full col-span-2"><Button className={`w-full h-[46px] rounded-xl bg-[#2196F3] text-white flex justify-center items-center gap-2`}><div className="font-semibold text-lg">Buscar</div> <FaSearch/></Button></div>
        </div>
        <FoundPatients/>
    </Main>
  )
}
