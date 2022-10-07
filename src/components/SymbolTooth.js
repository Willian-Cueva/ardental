import styles from "./styles/SymbolTooth.module.css";
import Absent from "../assets/svg/Absent";
import Crown from "../assets/svg/Crown";
import FilteredOut from "../assets/svg/FilteredOut";
import Fractured from "../assets/svg/Fractured";
import useOdontogram from "../hooks/useOdontogram";

export default function SymbolTooth({number, symbol }) {
  const {clickOnColorSelect} = useOdontogram();
  return (
    <div className={`${styles.symbol}`} onClick={()=>{
      clickOnColorSelect(number,0)
    }}>
      {symbol === 1 ? (
        <Absent width="40" height="40" />
      ) : symbol === 2 ? (
        <Crown width="40" height="40" />
      ) : symbol === 3 ? (
        <FilteredOut width="40" height="40" />
      ) : symbol === 4 ? (
        <Fractured width="40.5" height="40" />
      ) : symbol === 5 ? (
        <Absent width="40" height="40" color="red" />
      ) : symbol === 6 ? (
        <Crown width="40" height="40" color="red" />
      ) : (
        ""
      )}
    </div>
  );
}
