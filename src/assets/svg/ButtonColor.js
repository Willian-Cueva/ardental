export default function ButtonColorBlue({color="blue"}) {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="47"
          height="47"
          rx="11.5"
          fill={`${color!=="red"?"#2196F3":"#F44336"}`}
          stroke="black"
        />
      </svg>
    </div>
  );
}
