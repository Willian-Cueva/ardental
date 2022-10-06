import Input from "../components/Input";
import Main from "../components/Main";
import { FaSearch } from "react-icons/fa";
import FoundPatients from "../components/FoundPatients";
import ButtonIcon from "../components/ButtonIcon";

export default function Patients() {
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
          values={["name", "Cédula", "Teléfono"]}
          className="col-span-2"
        />
        <div className="flex items-end w-full col-span-2">
          <ButtonIcon text="Buscar" icon={<FaSearch size={"20px"}/>}/>
        </div>
      </div>
      <FoundPatients
        patients={[
          {
            name: "Willian Cueva",
            years: 20,
            dni: "1150579124",
            phone: "0995711578",
            gener: 2,
          },
          {
            name: "Katty Sanmartin",
            years: 21,
            dni: "1150754236",
            phone: "0996324875",
            gener: 1,
          },
          {
            name: "Boster Fernando",
            years: 5,
            dni: "115074284",
            phone: "0941753965",
            gener: 3,
          },
        ]}
      />
    </Main>
  );
}
