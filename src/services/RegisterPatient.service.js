import { METHOD_FETCH, NEW_PATIENT } from "../helpers/constants";

export function newPatient(patient) {
  return new Promise((resolve) => {
    fetch(NEW_PATIENT, METHOD_FETCH("POST",patient))
    .then(res=>res.json())
    .then(data => resolve(data))
    .catch(err=>Promise.reject(err))
  });
}
