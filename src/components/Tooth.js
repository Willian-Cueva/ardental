import ToothCenter from "../assets/svg/ToothCenter";
import ToothOutline from "../assets/svg/ToothOutline";
import useOdontogram from "../hooks/useOdontogram";
import SymbolTooth from "./SymbolTooth";
// import styles from "./styles/Tooth.module.css";
export default function Tooth({ number = 18, data }) {
  const { clickOnNotColorSelect } = useOdontogram();
  return (
    <div className="w-[35px]">
      <div className="text-center">{number}</div>
      <div
        className="max-h-[36px] "
        onClick={() => {
          // clickOnNotColorSelect(number);
        }}
      >
        <div className="w-[36px] h-[36px] relative">
          <ToothOutline
            number={number}
            possition={0}
            className="rotate-180 absolute top-0 left-0"
            color={data[0]}
          />
          <ToothOutline
            number={number}
            possition={1}
            className="-rotate-90 absolute -right-[13px] top-[13px]"
            color={data[1]}
          />
          <ToothOutline
            number={number}
            possition={2}
            className="absolute bottom-[0.5px]"
            color={data[2]}
          />
          <ToothOutline
            number={number}
            possition={3}
            className="rotate-90 absolute -left-[12.5px] top-[13px]"
            color={data[3]}
          />
          <ToothCenter
            number={number}
            className="absolute top-[8.6px] left-[9px]"
            color={data[4]}
          />
        </div>
        <SymbolTooth number={number} symbol={data[5]} />
      </div>
    </div>
  );
}
