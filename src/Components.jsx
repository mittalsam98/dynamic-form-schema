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

export const DateField = ({ keyName, value, onChange, required, label }) => {
  return (
    <div className='my-2 mx-0'>
      <label htmlFor={keyName} className="min-w-[100px]">
        {label??keyName} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <input
        id={keyName}
        name={keyName}
        type="date"
        value={value || ""}
        onChange={onChange}
        required={required}
        className="border ml-2 rounded-sm px-1"
      />
    </div>
  );
};

export const SelectField = ({ keyName, value, onChange, required, label, options }) => {
  return (
    <div className='my-2 mx-0'>
      <label htmlFor={keyName} className="min-w-[100px]">
        {label??keyName} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <select
        id={keyName}
        name={keyName}
        value={value || ""}
        onChange={onChange}
        required={required}
        className="border ml-2 rounded-sm px-1"
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export const CheckboxField = ({ keyName, value, onChange, required, label }) => {
  return (
    <div className='my-2 mx-0'>
      <label htmlFor={keyName} className="min-w-[100px]">
        <input
          id={keyName}
          name={keyName}
          type="checkbox"
          checked={value || false}
          onChange={onChange}
          required={required}
          className="mr-2"
        />
        {label??keyName} {required && <span style={{ color: "red" }}>*</span>}
      </label>
    </div>
  );
};
