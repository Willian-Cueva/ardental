import Links from "./components/Links";
import MyNavbar from "./components/MyNavbar";
import Landing from "./pages/Landing";
import styles from "./App.module.css"
import { useState } from "react";
function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const switchShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }
  
  return (
    <>
      <MyNavbar swichShowNavbar={switchShowNavbar}/>
      <div className={`${styles.contain}`}>
        <div className={`duration-300 ease-in-out ${styles.links} w-${showNavbar?'15':'0'}`}>
          <Links />
        </div>
        <div className={`duration-300 ease-in-out ${styles.pages} bg-[#E3F2FD] rounded-xl p-5 mr-5`}>
          <Landing />
        </div>
      </div>
    </>
  );
}

export default App;
