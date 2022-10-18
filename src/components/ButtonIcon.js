import React from "react";
import Button from "./Button";

export default function ButtonIcon({
  text = "Text",
  icon,
  className,
  color = "bg-[#2196F3] hover:bg-[#008bfd]",
  textColor = "white",
  num = 0,
  onclick,
}) {
  return (
    <div
      className={`${className}`}
      onClick={() => {
        onclick(num);
      }}
    >
      <Button
        className={`${color} w-full min-h-[46px] rounded-xl hover:text-white text-[#212121] flex flex-wrap justify-center items-center gap-2 py-1 px-2`}
      >
        <div className="font-semibold text-lg">{text}</div>
        {icon}
      </Button>
    </div>
  );
}
