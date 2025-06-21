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

// export default function InputComponents({ val, myFormInputs, setFormInputs }) {
//   const [keyName, value] = val;
//   // console.log({ key, value });

//   const hanldeChange = (e, keyName) => {
//     console.log("ddd", e.target.value, keyName);

//     setFormInputs((prev) => ({
//       ...prev,
//       [keyName]: e.target.value,
//     }));
//   };

//   // for()

//   switch (value.type) {
//     case "string":
//       return (
//         <InputField
//           keyName={keyName}
//           value={value.value}
//           onChange={hanldeChange}
//           required={value.required}
//         />
//       );

//     case "number":
//       return (
//         <NumberField
//           keyName={keyName}
//           value={value.value}
//           onChange={hanldeChange}
//           required={value.required}
//         />
//       );

//     case "array":
//       return (
//         <ArrayField
//           keyName={keyName}
//           values={value.items}
//           onChange={hanldeChange}
//           onAddItem={() => {}}
//           onRemoveItem={(index) => {}}
//           required={value.required}
//         />
//       );

//     default:
//       return null;
//   }
// }
