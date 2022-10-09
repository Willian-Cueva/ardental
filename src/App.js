import { Routes, Route, HashRouter } from "react-router-dom";
import Links from "./components/Links";
import MyNavbar from "./components/MyNavbar";
import RegisterPatients from "./pages/RegisterPatients";
import Register from "./pages/Register";
import Login from "./pages/Login";
import styles from "./App.module.css";
import { useState } from "react";
import GlobalStateContext from "./contexts/GlobalStateContext";
import { useGlobalStateModel } from "./hooks/useGlobalState";
import Patients from "./pages/Patients";
import GestionPatient from "./pages/GestionPatient";
function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const switchShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const value = useGlobalStateModel();

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
                <Route path="/register-patient" element={<RegisterPatients />} />
                <Route path="/patients" element={<Patients/>} />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/gestion-patient/:dni" element={<GestionPatient/>} />
              </Routes>
            </div>
          </div></>
        ) : (
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login/>} />
          </Routes>
        )}
      </HashRouter>
    </GlobalStateContext.Provider>
  );
}

export default App;
