import { useEffect, useState } from "react";
import { InputField, NumberField, DateField, SelectField, CheckboxField } from "./Components.jsx";

function Form({ formDataProps }) {
  const [formData, setFormData] = useState({});
  const [schema, setSchema] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log({ formDataProps });
    setSchema(formDataProps);
  }, [formDataProps]);

  const validateField = (value, validation) => {
    if (!validation) return "";
    if (validation.required && (!value || value === "")) {
      return "This field is required";
    }
    if (value) {
      if (validation.minLength && value.length < validation.minLength) {
        return `Minimum length req. is ${validation.minLength} characters`;
      }
      
      if (validation.maxLength && value.length > validation.maxLength) {
        return `Maximum length req. is ${validation.maxLength} characters`;
      }
      
      if (validation.min && Number(value) < validation.min) {
        return `Minimum value is ${validation.min}`;
      }
      
      if (validation.max && Number(value) > validation.max) {
        return `Maximum value is ${validation.max}`;
      }
      
      if (validation.pattern && !new RegExp(validation.pattern).test(value)) {
        return "Invalid format";
      }
    }
    return "";
  };

  const showField = (field, showIf) => {
    if (!showIf) return true;
    
    const formVal = formData[showIf.field];
    return formVal === showIf.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        const newErrors = {};
    Object.entries(schema.properties).forEach(([key, prop]) => {
      const error = validateField(formData[key], prop.validation);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log("Fddddd====", formData);
      setSubmitted(true);
    }
  };

  const handleChange = (e, field, type) => {
    const { value, checked } = e.target;
    let formattedValue = value;
    if (type === "number" && value !== "") {
      formattedValue = Number(value);
    } else if (type === "checkbox") {
      formattedValue = checked;
    }
    setFormData((prev) => ({
      ...prev,
      [field]: formattedValue,
    }));
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const renderField = (key, prop, required = []) => {
    console.log({ prop });
    const isRequired = required.includes(key) || prop.validation?.required;
    const error = errors[key];
    if (!showField(key, prop.showIf)) {
      return null;
    }
    if (prop.type === "string") {
      return (
        <div key={key}>
          <InputField
            keyName={key}
            label={prop.label}
            value={formData[key] || ""}
            onChange={(e) => handleChange(e, key, "string")}
            required={isRequired}
          />
          {error && <div style={{ color: "red", fontSize: "12px", marginLeft: "100px" }}>{error}</div>}
        </div>
      );
    } else if (prop.type === "number") {
      return (
        <div key={key}>
          <NumberField
            keyName={key}
            label={prop.label}
            value={formData[key] || ""}
            onChange={(e) => handleChange(e, key, "number")}
            required={isRequired}
          />
          {error && <div style={{ color: "red", fontSize: "12px", marginLeft: "100px" }}>{error}</div>}
        </div>
      );
    } else if (prop.type === "date") {
      return (
        <div key={key}>
          <DateField
            keyName={key}
            label={prop.label}
            value={formData[key] || ""}
            onChange={(e) => handleChange(e, key, "date")}
            required={isRequired}
          />
          {error && <div style={{ color: "red", fontSize: "12px", marginLeft: "100px" }}>{error}</div>}
        </div>
      );
    } else if (prop.type === "select") {
      return (
        <div key={key}>
          <SelectField
            keyName={key}
            label={prop.label}
            value={formData[key] || ""}
            onChange={(e) => handleChange(e, key, "select")}
            required={isRequired}
            options={prop.options}
          />
          {error && <div style={{ color: "red", fontSize: "12px", marginLeft: "100px" }}>{error}</div>}
        </div>
      );
    } else if (prop.type === "checkbox") {
      return (
        <div key={key}>
          <CheckboxField
            keyName={key}
            label={prop.label}
            value={formData[key] || false}
            onChange={(e) => handleChange(e, key, "checkbox")}
            required={isRequired}
          />
          {error && <div style={{ color: "red", fontSize: "12px", marginLeft: "100px" }}>{error}</div>}
        </div>
      );
    }  else if (prop.type === "object") {
      return (
        <div key={key} className="mt-5">
          <div className="bg-slate-200 px-2 text-md">{prop.name}</div>
          {Object.entries(prop.properties).map(([childKey, childProp]) => {
            const isChildRequired = prop.required?.includes(childKey) || childProp.validation?.required;
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
