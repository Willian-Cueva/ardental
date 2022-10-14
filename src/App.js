import { Routes, Route, HashRouter } from "react-router-dom";
import Links from "./components/Links";
import MyNavbar from "./components/MyNavbar";
import RegisterPatients from "./pages/RegisterPatients";
import Register from "./pages/Register";
import Login from "./pages/Login";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import GlobalStateContext from "./contexts/GlobalStateContext";
import { useGlobalStateModel } from "./hooks/useGlobalState";
import Patients from "./pages/Patients";
import GestionPatient from "./pages/GestionPatient";
import swal from "sweetalert";
import GestionUsers from "./pages/GestionUsers";
function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const switchShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  function inputLimit(e) {
    const el = e.target;
    const validate = el.tagName === "INPUT" && el.type === "date" && el.name ==="inputComponent";
    if (!validate) return;
    const toDay = new Date(),year = toDay.getFullYear(),month = toDay.getMonth(),day= toDay.getDate(),maxDate = `${year}-${month+1}-${day}`;
    // if(el.value === "") el.value = maxDate;
    el.max = maxDate;
  }

  function autosize(e) {
    const el = e.target;
    if (el.tagName === "INPUT") return;
    if (el.name !== "name-txta") return;
    // setTimeout(function () {
    el.style.cssText = "height:" + (el.scrollHeight * 1 + 4) + "px";
    // }, 0);
  }
  const value = useGlobalStateModel();

  useEffect(() => {
    if(value.isSessionActive()){
      if(!value.havePermision()){
       swal({
          title: "Debe solicitar permiso para ingresar al sistema",
          text: "Hasta no obtener el debido permiso usted no podrá acceder al sistema",
          icon: "info",
          timer: "6000"
        }).then(res=>{
          value.logout();
        })

      }
    }
  }, )
  

  useEffect(() => {
    let textarea = document;
    textarea.addEventListener("keydown", autosize);
    textarea.addEventListener("click", autosize);
    textarea.addEventListener("click", inputLimit);
    
    return () => {
      textarea.removeEventListener("keydown", autosize);
      textarea.removeEventListener("click", autosize);
      textarea.removeEventListener("click", inputLimit);
    };
  }, []);




  return (
    <GlobalStateContext.Provider value={value}>
      <HashRouter>
        {value.isSessionActive() ? (
          <>
            <MyNavbar swichShowNavbar={switchShowNavbar} />
            <div className={`flex relative`}>
              <div
                className={`absolute duration-700 ease-in-out ${
                  showNavbar ? "left-[0px]" : "left-[-260px]"
                }`}
              >
                <Links />
              </div>
              <div
                className={`absolute duration-700 ease-in-out ${
                  showNavbar ? styles.main : "ml-5 w-[calc(100vw-57px)]"
                } bg-[#E3F2FD] rounded-xl p-5 ${
                  showNavbar ? "ml-[260px]" : ""
                } left-[${showNavbar ? "260px" : "0px"}]`}
              >
                <Routes>
                  {/* <Route exact path="/" */}

                  <Route exact path="/" element={<RegisterPatients />} />
                  <Route
                    path="/register-patient"
                    element={<RegisterPatients />}
                  />
                  <Route path="/patients" element={<Patients />} />
                  <Route path="/gestion-users" element={<GestionUsers />} />

                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/gestion-patient/:dni"
                    element={<GestionPatient />}
                  />
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
          </Routes>
        )}
      </HashRouter>
    </GlobalStateContext.Provider>
  );
}

export default App;
