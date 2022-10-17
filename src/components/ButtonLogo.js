import React from "react";
import useGlobalState from "../hooks/useGlobalState";

export default function ButtonLogo({
  onClick = () => {},
  children,
  title,
  className,
}) {
  const {themeColor} = useGlobalState()
  return (
    <div className={className} title={title}>
      <button
        className={`transition ease-in-out delay-75 h-[34px] w-[34px] rounded-lg bg-[#EDE7F6] text-[#673AB7] flex justify-center items-center ${themeColor.theme==="white"? "hover:bg-[#673AB7] hover:text-white":"hover:bg-[#B39DDB] hover:text-white"}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
