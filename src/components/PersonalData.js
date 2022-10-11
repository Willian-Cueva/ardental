import React from "react";
import Input from "./Input";
import Main from "./Main";

export default function PersonalData() {
  return (
    <Main title="Datos Personales" subtitle={true}>
      <div className="grid grid-cols-10 gap-2">
        <Input
          id={"id-inp-name"}
          label="Nombre"
          placeholder="Fernando"
          className="col-span-4"
        />
        <Input
          id={"id-inp-proffesion"}
          label="Ocupación"
          placeholder="Abogado"
          className="col-span-2"
        />
        <Input
          id={"id-inp-dni"}
          label="Cédula"
          className="col-span-2"
          placeholder="1150******"
        />
        <Input
          id={"id-inp-phone"}
          label="Teléfono"
          className="col-span-2"
          placeholder="099*******"
        />
        <Input
          id={"id-inp-direction"}
          label="Dirección"
          placeholder="Época, Alemania entre Suiza y Holanda"
          className="col-span-4"
        />
        <Input
          id={"id-inp-maritalState"}
          label="Estado Civil"
          className="col-span-3"
          type="select"
          values={["Soltero/a", "Casado/a", "Divorciado/a", "Viudo/a"]}
        />
        <Input
          id={"id-inp-sex"}
          label="Sexo"
          type="select"
          className="col-span-2"
          values={["Masculino", "Femenino", "Otro"]}
        />
        <Input id={"id-inp-dateBorn"} label="Fecha de Nacimiento" type="date" className="col-span-3" />
        <Input
            label="Motivo de la consulta"
            placeholder="La razón por la que el paciente solicitó una consulta fue..."
            className="col-span-10"
          />
      </div>
    </Main>
  );
}
