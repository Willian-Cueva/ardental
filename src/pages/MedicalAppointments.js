import React from 'react'
import MenuMedicalAppointments from '../components/MedicalAppointmentComponents/MenuMedicalAppointments'
import Main from '../components/Main'
import ListAppointments from '../components/MedicalAppointmentComponents/ListAppointments'

export default function MedicalAppointments({type}) {
  
  return (
    <Main title={<MenuMedicalAppointments />}>
      <div className="flex gap-4">
        <ListAppointments type={type}/>
      </div>
    </Main>
  )
}
