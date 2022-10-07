import React from "react";

export default function Fractured({width="46",height="5",viewBox="0 0 58 10"}) {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="57"
          height="9"
          rx="4.5"
          fill="#2196F3"
          stroke="black"
        />
      </svg>
    </div>
  );
}
