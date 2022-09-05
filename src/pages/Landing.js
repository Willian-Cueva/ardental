import React from "react";
import Input from "../components/Input";
import Main from "../components/Main";
import Odontogram from "../components/Odontogram";
import RadioButtonsGroup from "../components/RadioButtonsGroup";
import Switch from "../components/Switch";

export default function Landing() {
  return (
    <Main title="Registro de Pacientes">
      <Main title="Datos Personales" subtitle={true}>
        <div className="grid grid-cols-10 gap-2">
          <Input label="Nombre" placeholder="Fernando" className="col-span-4" />
          <Input
            label="Ocupación"
            placeholder="Abogado"
            className="col-span-2"
          />
          <Input label="Cédula" className="col-span-2" placeholder="1150******" />
          <Input label="Teléfono" className="col-span-2" placeholder="099*******" />
          <Input
            label="Dirección"
            placeholder="Época, Alemania entre Suiza y Holanda"
            className="col-span-4"
          />
          <Input label="Estado Civil" className="col-span-3" type="select" values={["Soltero/a","Casado/a","Divorciado/a","Viudo/a"]}/>
          <Input label="Sexo" type="select" className="col-span-2" values={["Masculino","Femenino","Otro"]}/>
          <Input label="Fecha de Nacimiento" type="date" className="col-span-3"/>
        </div>
      </Main>
      <div className="mb-4"/>
      <Main title="Antecedentes Personales" subtitle={true}>
        <div className="grid grid-cols-10 gap-2">
          <Input label="Transtornos sanguineos, coagulación y transfusiones" className="col-span-5"/>
          <Input label="Presión Aterial" className="col-span-2" type="select" values={["Alta","Normal","Baja"]}/>
          <Switch label="Enfermedades Cardiacas" className="col-span-3"/>
          <Input label="Medicación actual y crónica" className="col-span-6"/>
          <Input label="Otras enfermedades" placeholder="Diabetes, Epilepcia, Cancer..." className="col-span-6"/>
        </div>
      </Main>
      <div className="mb-4"/>
      <Main title="Sintomatología Oral" subtitle={true}>
        <div className="grid grid-cols-10 gap-2">
          <Switch label="Halitosis" className="col-span-2"/>
          <Switch label="Sangrado en las encias" className="col-span-2"/>
          <Switch label="Xerostomia" className="col-span-2"/>
          <Switch label="Bruxismo" className="col-span-2"/>
          <RadioButtonsGroup className="col-span-4" label="Hipersensibilidad" values={["Frío","Calor","Dulce","Ácido","Tacto"]}/>
        </div>
      </Main>
      <div className="mb-4"/>
      <Main title="Motivo de la consulta" subtitle={true}>
        <div className="grid grid-cols-10 gap-2">
        <Input label="Motivo de la consulta" placeholder="La razón por la que el paciente solicitó una consulta fue..." className="col-span-6"/>
        </div>
      </Main>
      <div className="mb-4"/>
      <Main title="Odontograma" subtitle={true}>
        <Odontogram/>
      </Main>
    </Main>
  );
}
