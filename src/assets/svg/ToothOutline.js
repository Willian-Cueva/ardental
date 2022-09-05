
export default function ToothOutline({color="white",className=""}) {
  return (
    <div className={className}>
      <svg
        width="36"
        height="9.5"
        viewBox="0 0 104 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M102 25.5H2L27.5 1H77.5L102 25.5Z"
          fill={color}
          stroke="black"
        />
      </svg>
    </div>
  );
}
