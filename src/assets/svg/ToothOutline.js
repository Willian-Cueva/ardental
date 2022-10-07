import useOdontogram from "../../hooks/useOdontogram";

export default function ToothOutline({
  color = 0,
  className = "",
  possition = 0,
  number,
}) {
  const cod = color === 0 ? "white" : color === 1 ? "#2196F3" : "red";
  const {clickOnColorSelect} = useOdontogram();
  return (
    <div className={className} onClick={() => {
      clickOnColorSelect(number,possition);
    }}>
      <svg
        width="36"
        height="9.5"
        viewBox="0 0 104 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M102 25.5H2L27.5 1H77.5L102 25.5Z" fill={cod} stroke="black" />
      </svg>
    </div>
  );
}
