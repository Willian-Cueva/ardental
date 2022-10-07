import useOdontogram from "../../hooks/useOdontogram";

export default function ToothCenter({ color = 0, className = "", number }) {
  const cod = color === 0 ? "white" : color === 1 ? "#2196F3" : "red";
  const {clickOnColorSelect} = useOdontogram();
  return (
    <div className={className} onClick={()=>{
      clickOnColorSelect(number,4);
    }}>
      <svg
        width="19"
        height="18"
        viewBox="0 0 53 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M51 50H1V0.5H51V50Z" stroke="black" fill={cod} />
      </svg>
    </div>
  );
}
