import styles from "./styles/ButtonOdontogram.module.css";
import useOdontogram from "../hooks/useOdontogram";

export default function ButtonOdontogram({ num, children,title ="este es para"}) {
  const { optionSelect, handleOptionSelect } = useOdontogram();
  const equals = optionSelect === num;
  return (
    <div data-title={title}
      onClick={() => {
        handleOptionSelect(num);
      }}
      className={`cursor-pointer ${
        !equals && "hover:bg-[#EDE7F6]"
      } w-[46px] h-[46px] border-[2px] rounded-[15.33px] flex justify-center items-center ${
        !equals ? "border-[#212121]" : `border-[#4527A0] bg-[#673AB7] ${styles.shadow}`
      }`}
    >
      {children}
    </div>
  );
}
