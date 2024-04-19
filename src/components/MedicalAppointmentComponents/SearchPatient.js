import React, { useEffect, useRef, useState } from "react";
import Input from "../Input";
import { ALL_PATIENTS } from "../../helpers/constants";
import cx from "clsx";
import useGlobalState from "../../hooks/useGlobalState";

export default function SearchPatient({ className }) {
  const [listPatients, setListPatients] = useState([]);
  const [listFilter, setListFilter] = useState([]);
  const [filter, setFilter] = useState("");
  const [showPatients, setShowPatients] = useState(false);
  const { setSearchedPatientDNI,setSearchedPatientNames } = useGlobalState();

  const searchRef = useRef();

  useEffect(() => {
    fetch(ALL_PATIENTS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "ok") setListPatients(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (filter) {
      const filtered = listPatients.filter((patient) => {
        return (
          patient.names.toLowerCase().includes(filter.toLowerCase()) ||
          patient.dni.includes(filter) ||
          patient.phone.includes(filter)
        );
      });
      setListFilter(filtered);
    } else {
      setListFilter(listPatients);
    }
  }, [filter, listPatients]);

  const onChange = (e) => {
    setFilter(e.target.value);
  };

  const selectPatient = (dni,names) => {
    console.log("Hola putas", dni, names);
    setSearchedPatientDNI(dni);
    setSearchedPatientNames(names);
    searchRef.current.value = names;
  };

  return (
    <div className={`${className} relative`}>
      <Input
        type="text"
        label="Buscar paciente"
        placeholder="Buscar por nombre, teléfono o cédula"
        reference={searchRef}
        onChange={onChange}
        onFocus={() => setShowPatients(true)}
        onBlur={() => setShowPatients(false)}
        autoComplete="off"
      />
      <div
        className={cx(
          "absolute top-20 bg-slate-50 p-4 max-h-[300px] rounded-xl overflow-hidden overflow-y-scroll flex flex-col",
          { hidden: !showPatients }
        )}
      >
        {listFilter.map((patient) => (
          <button
            key={patient._id}
            onMouseDown={() => {
              selectPatient(patient.dni, patient.names);
            }}
            className={`cursor-pointer p-2 rounded-xl hover:bg-slate-300`}
          >
            {patient.names}, {patient.dni}, {patient.phone}
          </button>
        ))}
      </div>
    </div>
  );
}
