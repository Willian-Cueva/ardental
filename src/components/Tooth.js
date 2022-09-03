import ToothOutline from "../assets/svg/ToothOutline";
// import styles from "./styles/Tooth.module.css";
export default function Tooth() {
  return (
    <div className="">
     <div className="w-[36px] h-[36px] relative">
      <ToothOutline className="rotate-180 absolute top-0 left-0"/>
      <ToothOutline className="-rotate-90 absolute -right-[13px] top-[13px]"/>
      <ToothOutline className="absolute bottom-[0.5px]"/>
      <ToothOutline className="rotate-90 absolute -left-[12.5px] top-[13px]"/>
     </div>
     <div></div>
      
    </div>
  );
}
