import useGlobalState from "../hooks/useGlobalState";
import styles from "./styles/ToggleTheme.module.css";

export default function ToogleTheme({ id, className = "" }) {
  const { themeColor, changeTheme } = useGlobalState();
  const stylesLocal = `border border-[#9E9E9E] focus:border-[#1E88E5] focus:border-2 bg-[#F5F5F5] rounded-xl p-2.5`;


  return (
    <div
      className={`flex flex-col gap-1 mr-2`}
      onClick={() => {
        changeTheme()
      }}
    >
      <label className={`${styles.mycheckbox}`} htmlFor="toggle-theme">
        <input
          type="checkbox"
          className={stylesLocal}
          id={id}
          checked={themeColor.theme!=="white"}
          value={themeColor.theme!=="white"}
        />
        <span></span>
      </label>
    </div>
  );
}
