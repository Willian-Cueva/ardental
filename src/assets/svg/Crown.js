import React from "react";

export default function Crown({color="blue",width="29",height="29",viewBox="0 0 52 52"}) {
    const backgroundColor = color!=="red"?"#2196F3":"#F44336";
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_124_95" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26 0C11.6406 0 0 11.6406 0 26C0 40.3594 11.6406 52 26 52C40.3594 52 52 40.3594 52 26C52 11.6406 40.3594 0 26 0ZM26 8C16.0589 8 8 16.0589 8 26C8 35.9411 16.0589 44 26 44C35.9411 44 44 35.9411 44 26C44 16.0589 35.9411 8 26 8Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26 0C11.6406 0 0 11.6406 0 26C0 40.3594 11.6406 52 26 52C40.3594 52 52 40.3594 52 26C52 11.6406 40.3594 0 26 0ZM26 8C16.0589 8 8 16.0589 8 26C8 35.9411 16.0589 44 26 44C35.9411 44 44 35.9411 44 26C44 16.0589 35.9411 8 26 8Z"
          fill={backgroundColor}
        />
        <path
          d="M1 26C1 12.1929 12.1929 1 26 1V-1C11.0883 -1 -1 11.0883 -1 26H1ZM26 51C12.1929 51 1 39.8071 1 26H-1C-1 40.9117 11.0883 53 26 53V51ZM51 26C51 39.8071 39.8071 51 26 51V53C40.9117 53 53 40.9117 53 26H51ZM26 1C39.8071 1 51 12.1929 51 26H53C53 11.0883 40.9117 -1 26 -1V1ZM9 26C9 16.6112 16.6112 9 26 9V7C15.5066 7 7 15.5066 7 26H9ZM26 43C16.6112 43 9 35.3888 9 26H7C7 36.4934 15.5066 45 26 45V43ZM43 26C43 35.3888 35.3888 43 26 43V45C36.4934 45 45 36.4934 45 26H43ZM26 9C35.3888 9 43 16.6112 43 26H45C45 15.5066 36.4934 7 26 7V9Z"
          fill="black"
          mask="url(#path-1-inside-1_124_95)"
        />
      </svg>
    </div>
  );
}
