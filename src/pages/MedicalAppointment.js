import React from "react";
import Main from "../components/Main";
import Calendar from "../components/MedicalAppointmentComponents/Calendar";
import ListAppointments from "../components/MedicalAppointmentComponents/ListAppointments";
import MenuMedicalAppointments from "../components/MedicalAppointmentComponents/MenuMedicalAppointments";

export default function MedicalAppointment() {
  return (
    <Main title={<MenuMedicalAppointments />}>
      <div className="flex gap-4">
        <Calendar />
        <ListAppointments />
      </div>
    </Main>
  );
}
