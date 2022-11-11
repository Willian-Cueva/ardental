import { Routes, Route, HashRouter } from "react-router-dom";
import Links from "./components/Links";
import MyNavbar from "./components/MyNavbar";
import RegisterPatients from "./pages/RegisterPatients";
import Register from "./pages/Register";
import Login from "./pages/Login";
import styles from "./App.module.css";
import { useEffect } from "react";
import GlobalStateContext from "./contexts/globalStateContext";
import { useGlobalStateModel } from "./hooks/useGlobalState";
import Patients from "./pages/Patients";
import GestionPatient from "./pages/GestionPatient";
import swal from "sweetalert";
import GestionUsers from "./pages/GestionUsers";
import ForgotPassword from "./pages/ForgotPassword";
import ResqPassword from "./pages/ResqPassword";
import MyProfile from "./pages/MyProfile";
import { BG_DARK, dateToday } from "./helpers/constants";

function App() {


  const switchShowNavbar = () => {
    value.setShowNavbar(!value.showNavbar);

  };

  function inputLimit(e) {
    const el = e.target;
    const validate =
      el.tagName === "INPUT" &&
      el.type === "date" &&
      el.name === "inputComponent";
    if (!validate) return;
    const maxDate = dateToday();
    el.max = maxDate;
  }

  function autosize(e) {
    const el = e.target;
    if (el.tagName === "INPUT") return;
    if (el.name !== "name-txta") return;
    el.style.cssText = "height:" + (el.scrollHeight * 1 + 4) + "px";
  }
  const value = useGlobalStateModel();

  const heigthContainer = () => {
    const d = document,
      $container = d.getElementById("id-container"),
      $content = d.getElementById("id-content");
    if ($content.clientHeight > window.screen.height) {
      $container.style.height = `${$content.clientHeight}px`;
    } else {
      $container.style.height = `91vh`;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      heigthContainer();
    }, 200);
    if (value.isSessionActive()) {
      if (!value.havePermision()) {
        swal({
          title: "Debe solicitar permiso para ingresar al sistema",
          text: "Hasta no obtener el debido permiso usted no podrá acceder al sistema",
          icon: "info",
          timer: "6000",
        }).then((res) => {
          value.logout();
        });
      }
    }
  });

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
          <div className="">
            <MyNavbar swichShowNavbar={switchShowNavbar} />
            <div
              id="id-container"
              className={`flex ${value.themeColor.theme === "dark" && `${BG_DARK}`
                }`}
            >
              <div
                onClick={() => {
                  setTimeout(() => {
                    heigthContainer();
                  }, [100]);
                }}
                className={`absolute duration-700 ease-in-out ${value.themeColor.theme === "dark" && `${BG_DARK}`
                  } ${value.showNavbar ? "left-[0px]" : "left-[-260px]"}`}
              >
                <Links />
              </div>
              <div
                id="id-content"
                className={`${(value.smartphone & value.showNavbar) && "hidden"} absolute duration-700 ease-in-out ${value.showNavbar ? !value.smartphone && (styles.main) : "ml-5 w-[calc(100vw-57px)]"
                  } bg-[#E3F2FD] rounded-xl p-5 ${value.showNavbar ? "ml-[260px]" : ""
                  } left-[${value.showNavbar ? "260px" : "0px"}]`}
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
                  <Route path="/my-profile" element={<MyProfile />} />
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/gestion-patient/:dni"
                    element={<GestionPatient />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/resq/:email" element={<ResqPassword />} />
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
