// components/InputField.jsx
import React from 'react';
import { useForm } from './ContextProvider';

export default function InputField({ field }) {
  const { formData, updateField } = useForm();

  const handleChange = (e) => {
    updateField(field.name, e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium">{field.label}</label>
      {field.type === 'select' ? (
        <select
          className="border p-2 rounded"
          value={formData[field.name] || ''}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {field.options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          type={field.type}
          className="border p-2 rounded"
          value={formData[field.name] || ''}
          onChange={handleChange}
        />
      )}
    </div>
  );
}
