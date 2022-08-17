import Links from "./components/Links";
import MyNavbar from "./components/MyNavbar";
import Landing from "./pages/Landing";
import { useState } from "react";
function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const switchShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }
  
  return (
    <>
      <MyNavbar swichShowNavbar={switchShowNavbar}/>
      <div className={`flex relative`}>
        <div className={`absolute duration-700 ease-in-out ${showNavbar?"left-[0px]":"left-[-260px]"}`}>
          <Links />
        </div>
        <div className={`absolute duration-700 ease-in-out bg-[#E3F2FD] rounded-xl p-5 mr-5 ${!showNavbar&&"ml-5"} left-[${showNavbar?"260px":"0px"}]`}>
          <Landing />
        </div>
      </div>
    </>
  );
}

export default App;
