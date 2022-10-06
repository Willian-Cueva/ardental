import React from 'react'
import Input from './Input'
import Main from './Main'
import Switch from './Switch'

export default function PersonalHistory() {
  return (
    <Main title="Antecedentes Personales" subtitle={true}>
        <div className="grid grid-cols-10 gap-2">
          <Input
            label="Transtornos sanguineos, coagulación y transfusiones"
            className="col-span-5"
          />
          <Input
            label="Presión Aterial"
            className="col-span-2"
            type="select"
            values={["Alta", "Normal", "Baja"]}
          />
          <Switch label="Enfermedades Cardiacas" className="col-span-3" />
          <Input label="Medicación actual y crónica" className="col-span-6" />
          <Input
            label="Otras enfermedades"
            placeholder="Diabetes, Epilepcia, Cancer..."
            className="col-span-6"
          />
        </div>
      </Main>
  )
}
