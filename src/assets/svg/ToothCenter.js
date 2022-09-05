export default function ToothCenter({ color = "white", className = "" }) {
  return (
    <div className={className}>
      <svg
        width="19"
        height="18"
        viewBox="0 0 53 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M51 50H1V0.5H51V50Z" stroke="black" fill={color}/>
      </svg>
    </div>
  );
}
