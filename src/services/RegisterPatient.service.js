import { ALL_PATIENTS, CLINICAL_SIGNS, NEW_PATIENT, ODONTOGRAM, ONE_PATIENT, ORAL_SYMP, PERSONAL_HISTORY, TREATMENTS, UPDATE_CLINICAL_SIGNS, UPDATE_ODONTOGRAM, UPDATE_ORAL_SYMP, UPDATE_PATIENT, UPDATE_PERSONAL_HISTORY, UPDATE_TREATMENTS, UPDATE_WAY_PAY, WAY_PAY } from "../helpers/constants";

export function updateWayPayPatient(data,autorization){
  return new Promise((resolve) => {
    try {
      fetch(UPDATE_WAY_PAY, {
        method: "PUT",
        headers: {
          Authorization: autorization(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data),
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

export function wayPayPatient(_id){
  return new Promise((resolve) => {
    try {
      fetch(`${WAY_PAY}${_id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => resolve(data.data.data))
        .catch((err) => resolve(err));
    } catch (error) {
      Promise.reject(error);
    }
  });
}
export function updateTreatmentsPatient(data,autorization){
  return new Promise((resolve) => {
    try {
      fetch(UPDATE_TREATMENTS, {
        method: "PUT",
        headers: {
          Authorization: autorization(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data),
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

export function treatmentsPatient(_id){
  return new Promise((resolve) => {
    try {
      fetch(`${TREATMENTS}${_id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => resolve(data.data))
        .catch((err) => resolve(err));
    } catch (error) {
      Promise.reject(error);
    }
  });
}

export function updateClinicalSygnsPatient(data,autorization){
  return new Promise((resolve) => {
    try {
      fetch(UPDATE_CLINICAL_SIGNS, {
        method: "PUT",
        headers: {
          Authorization: autorization(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data),
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

export function clinicalSygnsPatient(_id){
  return new Promise((resolve) => {
    try {
      fetch(`${CLINICAL_SIGNS}${_id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => resolve(data.data))
        .catch((err) => resolve(err));
    } catch (error) {
      Promise.reject(error);
    }
  });
}

export function updateOdontogramPatient(data,autorization){
  return new Promise((resolve) => {
    try {
      fetch(UPDATE_ODONTOGRAM, {
        method: "PUT",
        headers: {
          Authorization: autorization(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data),
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

export function odontogramPatient(_id){
  return new Promise((resolve) => {
    try {
      fetch(`${ODONTOGRAM}${_id}`, {
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

export function updateOralSympPatient(data,autorization){
  return new Promise((resolve) => {
    try {
      fetch(UPDATE_ORAL_SYMP, {
        method: "PUT",
        headers: {
          Authorization: autorization(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data),
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

export function oralSympPatient(_id){
  return new Promise((resolve) => {
    try {
      fetch(`${ORAL_SYMP}${_id}`, {
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

export function updatePersonalHystoryPatient(data,autorization){
  return new Promise((resolve) => {
    try {
      fetch(UPDATE_PERSONAL_HISTORY, {
        method: "PUT",
        headers: {
          Authorization: autorization(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data),
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

export function personalHistoryPatient(_id){
  return new Promise((resolve) => {
    try {
      fetch(`${PERSONAL_HISTORY}${_id}`, {
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

export function updatePatient(patient,autorization){
  return new Promise((resolve) => {
    try {
      fetch(UPDATE_PATIENT, {
        method: "PUT",
        headers: {
          Authorization: autorization(),
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

export function newPatient(patient,autorization) {
  return new Promise((resolve) => {
    try {
      fetch(NEW_PATIENT, {
        method: "POST",
        headers: {
          Authorization: autorization(),
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
