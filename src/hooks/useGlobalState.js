import globalStateContext from "../contexts/GlobalStateContext";

import { useContext } from "react";
import { useState } from "react";
import { SESSION_STORAGE, THEME_STORAGE } from "../helpers/constants";

export const useGlobalStateModel = () => {
  const [session, setSession] = useState(sessionStorage());
  const [themeColor, setThemeColor] = useState(themeMode());
  const [showNavbar, setShowNavbar] = useState(true);
  const [smartphone] = useState(window.screen.width<=640);

  const changeTheme = () => {
    const theme = JSON.parse(localStorage.getItem(THEME_STORAGE));
    if (theme.theme === "white") {
      localStorage.setItem(THEME_STORAGE, JSON.stringify({theme: "dark"}));
    } else{
      localStorage.setItem(THEME_STORAGE, JSON.stringify({theme: "white"}));
    }
    setThemeColor(JSON.parse(localStorage.getItem(THEME_STORAGE)));
  }

  const havePermision = () => {
   return session.rol !== "not-authorized"
  }

  const isSessionActive = () => {
    if(session===undefined || session===null)return false;
    let chis =session.rol !== "" &&
    session.fullname !== "" &&
    session.token !== "" &&
    session.email !== ""
    return chis
  };

  const isSuperAdministrer = () => {
    return session.rol === "super-administrer" 
  };

  const getAhutorization = () => {
    let ahorization = "Bearer ";
    ahorization += session.token;
    return ahorization;
  };

  const login = (data) => {
    let chis = true;
    if (data.token) {
      if (data.fullname) {
        if (data.email) {
          if (data.rol) {
            setSessionStorage(data);
            setSession(sessionStorage());
          } else {
            chis = false;
          }
        } else {
          chis = false;
        }
      } else {
        chis = false;
      }
    } else {
      chis = false;
    }
    return chis;
  };

  const logout = () => {
    resetStorage();
    setSession(sessionStorage());
  };

  return {
    session,
    themeColor,
    showNavbar,
    smartphone,
    setSession,
    isSessionActive,
    logout,
    login,
    getAhutorization,
    havePermision,
    isSuperAdministrer,
    changeTheme,
    setShowNavbar
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
    console.error("Error-->", error);
  }
}

function themeMode(){
  try {
    if (!JSON.parse(localStorage.getItem(THEME_STORAGE))) {
      localStorage.setItem(THEME_STORAGE, JSON.stringify({theme: "white"}));
    } 
    return JSON.parse(localStorage.getItem(THEME_STORAGE));
  } catch (error) {
    console.log(error);
    return false;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => useContext(globalStateContext);
