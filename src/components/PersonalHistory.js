import React from "react";
import { useEffect } from "react";
import { personalHistoryPatient } from "../services/RegisterPatient.service";
import Input from "./Input";
import Main from "./Main";
import Switch from "./Switch";

export default function PersonalHistory({ editMode = false, search }) {
  useEffect(() => {
    if (editMode) {
      personalHistoryPatient(search).then((personalHistory) => {
        const d = document;
        d.getElementById("id-inp-disorders").value = personalHistory.data.disorders;
        d.getElementById("id-inp-bloodPressure").value =
          personalHistory.data.bloodPressure;
        d.getElementById("id-swt-heartDiseases").value =
          personalHistory.data.heartDiseases;
        d.getElementById("id-swt-heartDiseases").checked =
          personalHistory.data.heartDiseases;
        d.getElementById("id-inp-medication").value =
          personalHistory.data.medication;
        d.getElementById("id-inp-otherDiseases").value =
          personalHistory.data.otherDiseases;
      });
    }
  }, []);

  return (
    <Main title="Antecedentes Personales" subtitle={true}>
      <div className="md:grid md:grid-cols-10 md:gap-2">
        <Input
          id={"id-inp-disorders"}
          label="Transtornos"
          placeholder="Sanguineos, coagulación y transfusiones"
          className="col-span-5"
        />
        <Input
          id={"id-inp-bloodPressure"}
          label="Presión Aterial"
          className="col-span-2"
          type="select"
          values={["Alta", "Normal", "Baja"]}
        />
        <Switch
          id={"id-swt-heartDiseases"}
          label="Enfermedades Cardiacas"
          className="col-span-3"
        />
        <Input
          id={"id-inp-medication"}
          label="Medicación"
          placeholder="Actual y crónica"
          className="col-span-6"
        />
        <Input
          id={"id-inp-otherDiseases"}
          label="Otras enfermedades"
          placeholder="Diabetes, Epilepcia, Cancer..."
          className="col-span-6"
        />
      </div>
    </Main>
  );
}
