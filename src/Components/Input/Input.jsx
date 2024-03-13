import "./Input.css";



export default function Input({
  type,
  placeholder,
  value,
  label,
  name,
  onChange,
  ...props

}) {
  return (
    <div className="inpField">
      <label className="Label">
        <p>{label} </p>
      </label>
      <input
        {...props}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}