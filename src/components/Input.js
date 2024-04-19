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
  reference,
  isDisabled = false,
  rows = "5",
  onFocus = () => {},
  onBlur = () => {},
  autoComplete = "on",
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
            ref={reference}
            disabled={isDisabled}
          >
            {values.map((el, index) => (
              <option key={index} value={el} selected={index === 0} >{el}</option>
            ))}
          </select>
        ) : type === "textArea" ? (
          <textarea
            onChange={(e) => {
              onChange(e);
            }}
            className={`${STYLES} overflow-y-auto`}
            rows={rows}
            id={id}
            value={value}
            ref={reference}
            disabled={isDisabled}
          ></textarea>
        ) : (
          <input
            onChange={(e) => {
              onChange(e);
            }}
            onFocus={(e) => {
              onFocus(e);
            }}
            onBlur={(e) => {
              onBlur(e);
            }}
            id={id}
            name="inputComponent"
            value={value}
            type={type}
            className={STYLES}
            placeholder={placeholder}
            ref={reference}
            disabled={isDisabled}
            autoComplete={autoComplete}
          />
        )}
      </div>
    </div>
  );
}
