import { useEffect, useState } from "react";
import { InputField, NumberField } from "./Components";

function Form({ formDataProps }) {
  const [formData, setFormData] = useState({});
  const [schema, setSchema] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    console.log({ formDataProps });
    setSchema(formDataProps);
  }, [formDataProps]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e, field, type) => {
    const { value } = e.target;

    let formattedValue = value;
    if (type === "number" && value !== "") {
      formattedValue = Number(value);
    }

    setFormData((prev) => ({
      ...prev,
      [field]: formattedValue,
    }));
  };

  const renderField = (key, prop, required = []) => {
    console.log({ prop });
    const isRequired = required.includes(key);

    if (prop.type === "string") {
      return (
        <InputField
          key={key}
          keyName={key}
          label={prop.label}
          value={formData[key] || ""}
          onChange={(e) => handleChange(e, key, "string")}
          required={isRequired}
        />
      );
    } else if (prop.type === "number") {
      return (
        <NumberField
          key={key}
          keyName={key}
          label={prop.label}
          value={formData[key] || ""}
          onChange={(e) => handleChange(e, key, "number")}
          required={isRequired}
        />
      );
    } else if (prop.type === "object") {
      return (
        <div key={key} className="mt-5">
          <div className="bg-slate-200 px-2 text-md">{prop.name}</div>
          {Object.entries(prop.properties).map(([childKey, childProp]) => {
            const isChildRequired = prop.required?.includes(childKey);

            return renderField(childKey, childProp, prop.required || [])
          })}
        </div>
      );
    }

    return null;
  };

  if (!schema) return <p>Loading schema...</p>;

  return (
    <div className="h-full flex justify-center my-4 mx-auto">
      <div className="p-4 border-1 border-[#eee] w-[500px]">
        <div className="bg-slate-200 px-2 text-md">{schema.name}</div>
        <form onSubmit={handleSubmit}>
          {Object.entries(schema.properties).map(([key, prop]) =>
            renderField(key, prop, schema.required || [])
          )}

          <button
            type="submit"
            className="mt-4 bg-green-600 text-white px-2 py-1 rounded-sm"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <div className="mt-3">
            <h3>Form Submitted</h3>
            <pre>{JSON.stringify(formData, null, 3)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
