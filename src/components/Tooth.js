import ToothCenter from "../assets/svg/ToothCenter";
import ToothOutline from "../assets/svg/ToothOutline";
// import styles from "./styles/Tooth.module.css";
export default function Tooth({ number = 18 }) {
  return (
    <div className="w-[35px]">
      <div className="text-center">{number}</div>
      <div className="w-[36px] h-[36px] relative">
        <ToothOutline className="rotate-180 absolute top-0 left-0" />
        <ToothOutline className="-rotate-90 absolute -right-[13px] top-[13px]" />
        <ToothOutline className="absolute bottom-[0.5px]" />
        <ToothOutline className="rotate-90 absolute -left-[12.5px] top-[13px]" />
        <ToothCenter className="absolute top-[8.6px] left-[9px]" />
      </div>
    </div>
  );
}
