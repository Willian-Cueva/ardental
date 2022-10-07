import globalStateContext from "../contexts/GlobalStateContext";

import { useContext } from "react";
import { useState } from "react";
import { SESSION_STORAGE } from "../helpers/constants";

export const useGlobalStateModel = () => {
  const [session, setSession] = useState(sessionStorage());
  const isSessionActive = () =>{
    // return session.rol !== "" && session.fullname !== "" && session.token !== "" && session.email !== "";
    let chis = true;
    return chis;
  }

  return {
    session,
    
    setSession,
    isSessionActive
  };
};

const userModel = { token: "", fullname: "", rol: "", email: "" };
// const userModel = { token: "564654654644df4s4vdsvvcsvhj", fullname: "Willian Cueva", rol: "Administrador", email: "enriquewillian2@gmail.com" };

function resetStorage() {
  setSessionStorage(userModel);
}

function setSessionStorage(model) {
    localStorage.setItem(SESSION_STORAGE, JSON.stringify(model));
}

function sessionStorage() {
  try {
    if (!localStorage.getItem(SESSION_STORAGE)) {
      resetStorage();
    }
    return JSON.parse(localStorage.getItem(SESSION_STORAGE));
  } catch (error) {
    console.log("Error-->", error);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => useContext(globalStateContext);
