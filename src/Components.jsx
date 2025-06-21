export const InputField = ({ keyName, value, onChange, required, label }) => {
  return (
    <div style={{ margin: "8px 0" }}>
      <label htmlFor={keyName} className="min-w-[100px]">
        {label??keyName} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <input
        id={keyName}
        name={keyName}
        value={value || ""}
        onChange={onChange}
        required={required}
        className="border ml-2 rounded-sm px-1"
      />
    </div>
  );
};

export const NumberField = ({ keyName, value, onChange, required, label }) => {
  return (
    <div style={{ margin: "8px 0" }}>
      <label htmlFor={keyName} className="min-w-[100px]">
        {label??keyName} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <input
        id={keyName}
        name={keyName}
        type="number"
        value={value || ""}
        onChange={onChange}
        required={required}
        className="border ml-2 rounded-sm px-1"
      />
    </div>
  );
};