import React from "react";

export default function OdontogramComplete({color="blue"}) {
    const backgroundColor = color!=="red"?"#2196F3":"#F44336";
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 11L2 2H38L29 11H11Z" fill={backgroundColor} stroke="black" />
        <path
          d="M29 29L38 38L2 38L11 29L29 29Z"
          fill={backgroundColor}
          stroke="black"
        />
        <path d="M11 29L2 38L2 2L11 11L11 29Z" fill={backgroundColor} stroke="black" />
        <path
          d="M29 11L38 2L38 38L29 29L29 11Z"
          fill={backgroundColor}
          stroke="black"
        />
        <path d="M11 11H29V29H11V11Z" fill={backgroundColor} stroke="black" />
      </svg>
    </div>
  );
}
