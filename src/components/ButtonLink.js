import { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import useGlobalState from "../hooks/useGlobalState";
export default function ButtonLink({
  icon = <FaClipboardList />,
  title = "title",
  to = "/",
  selected=false,
  num=0,
  clicked = ()=>{}
}) {
  
  const {themeColor,setShowNavbar,smartphone} = useGlobalState();
  
  return (
    <>
      <Link
        to={to}
        onClick={()=>{
          clicked(num);
          if (smartphone) {
            setShowNavbar(false)
          }
        }}
        className={`transition ease-in-out delay-75 w-full pl-6 pr-4 py-[10px] mb-1 rounded-[12px] flex items-center ${themeColor.theme === "white"?"text-[#616161]":"text-[#9E9E9E]"} hover:bg-[#EDE7F6] hover:text-[#673AB7] ${selected&&"bg-[#EDE7F6] text-[#673AB7]"}`}
      >
        <div className="mr-3 my-1">{icon}</div>
        <p className="font-medium text-sm my-1">{title}</p>
      </Link>
      <div className="w-full h-[1px] bg-[#EEEEEE] mb-1" />
    </>
  );
}
