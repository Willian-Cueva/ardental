import React from 'react'
import Input from './Input'
import Main from './Main'
import Switch from './Switch'

export default function PersonalHistory() {
  return (
    <Main title="Antecedentes Personales" subtitle={true}>
        <div className="grid grid-cols-10 gap-2">
          <Input
            id={"id-inp-disorders"}
            label="Transtornos sanguineos, coagulación y transfusiones"
            className="col-span-5"
          />
          <Input
          id={"id-inp-bloodPressure"}
            label="Presión Aterial"
            className="col-span-2"
            type="select"
            values={["Alta", "Normal", "Baja"]}
          />
          <Switch id={"id-swt-heartDiseases"} label="Enfermedades Cardiacas" className="col-span-3" />
          <Input id={"id-inp-medication"} label="Medicación actual y crónica" className="col-span-6" />
          <Input
            id={"id-inp-otherDiseases"}
            label="Otras enfermedades"
            placeholder="Diabetes, Epilepcia, Cancer..."
            className="col-span-6"
          />
        </div>
      </Main>
  )
}
