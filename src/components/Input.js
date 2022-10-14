import styles from "./styles/Input.module.css";
export default function Input({
  id,
  label = "label",
  type = "text",
  placeholder = "placeholder",
  className = "",
  values = [],
  value,
  onChange = () => {},
}) {
  const STYLES = `border border-[#9E9E9E] bg-transparent focus:border-2 focus:border-[#1E88E5] rounded-xl p-2.5`;
  return (
    <div className={className}>
      <div className="flex flex-col gap-1">
        <label htmlFor={`${label}`}>{label}</label>
        {type === "select" ? (
          <select
            id={id}
            name="select"
            className={`${STYLES} ${styles.select}`}
            onChange={(e) => {
              onChange(e);
            }}
          >
            {values.map((el, index) => (
              <option key={index} value={index + 1}>
                {el}
              </option>
            ))}
          </select>
        ) : type === "textArea" ? (
          <textarea
            onChange={(e) => {
              onChange(e);
            }}
            className={STYLES}
            rows="5"
            id={id}
            value={value}
          ></textarea>
        ) : (
          <input
            onChange={(e) => {
              onChange(e);
            }}
            id={id}
            name = "inputComponent"
            value={value}
            defaultValue={type==="date"? `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`:""}
            type={type}
            className={STYLES}
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
}
