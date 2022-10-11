import React from "react";
import RadioButtonSwitch from "./RadioButtonSwitch";


export default function RadioButtonsGroup({
  id,
  label = "label",
  className = "",
  values = [],
}) {
  return (
    <div className={className}>
      <div className={`flex flex-col gap-1`}>
        <div>{label}</div>
        <div className="h-[46px] flex justify-around items-center ">
          {values.map((el, index) => (
            <RadioButtonSwitch el={el} index={index} label={label} id={id}/>
          ))}
        </div>
      </div>
    </div>
  );
}
