import Input from "./Input";
import Main from "./Main";

export default function ReasonConsult() {
  return (
    <Main title="Motivo de la consulta" subtitle={true}>
        <div className="grid grid-cols-10 gap-2">
          <Input
            label="Motivo de la consulta"
            placeholder="La razón por la que el paciente solicitó una consulta fue..."
            className="col-span-6"
          />
        </div>
      </Main>
  )
}
