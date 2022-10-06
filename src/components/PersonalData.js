import React from 'react'
import Input from './Input'
import Main from './Main'

export default function PersonalData() {
  return (
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
  )
}
