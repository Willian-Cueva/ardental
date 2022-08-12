import Links from "./components/Links";
import MyNavbar from "./components/MyNavbar";
import Landing from "./pages/Landing";
import styles from "./App.module.css"
function App() {
  return (
    <>
      <MyNavbar />
      <div className={`transition ease-in-out delay-75 ${styles.contain}`}>
        <div className={`${styles.links} w-15`}>
          <Links />
        </div>
        <div className={`${styles.pages} bg-[#E3F2FD] rounded-xl p-5 mr-5`}>
          <Landing />
        </div>
      </div>
    </>
  );
}

export default App;
