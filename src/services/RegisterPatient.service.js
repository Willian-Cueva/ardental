import { ALL_PATIENTS, NEW_PATIENT, ONE_PATIENT, UPDATE_PATIENT } from "../helpers/constants";

export function updatePatient(patient){
  return new Promise((resolve) => {
    try {
      fetch(UPDATE_PATIENT, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body:JSON.stringify(patient),
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => resolve(err));
    } catch (error) {
      Promise.reject(error);
    }
  });
}

export function onePatient(dni){
  return new Promise((resolve) => {
    try {
      fetch(`${ONE_PATIENT}${dni}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => resolve(err));
    } catch (error) {
      Promise.reject(error);
    }
  });
}

export function allPatients() {
  return new Promise((resolve) => {
    try {
      fetch(ALL_PATIENTS, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => resolve(err));
    } catch (error) {
      Promise.reject(error);
    }
  });
}

export function newPatient(patient) {
  return new Promise((resolve) => {
    try {
      fetch(NEW_PATIENT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(patient),
        body: JSON.stringify(patient),
        mode: "cors",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          Promise.reject(err);
        });
    } catch (error) {
      Promise.reject(error);
    }
  });
}
