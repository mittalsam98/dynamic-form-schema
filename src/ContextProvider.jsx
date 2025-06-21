// context/FormContext.jsx
import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const updateField = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateField }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);



