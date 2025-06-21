// App.jsx
import React, { useState } from "react";
import { FormProvider } from "./ContextProvider";
import Form from "./Form";
import { fetchFormDataAPI } from "./api";

const formJson = [
  {
    name: "subscribe",
    label: "Subscribe to newsletter?",
    type: "select",
    options: ["Yes", "No"],
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "text",
    required: true,
    condition: {
      field: "subscribe",
      value: "Yes",
    },
  },
  {
    name: "dob",
    label: "Date of Birth",
    type: "date",
    required: false,
  },
  {
    name: "bio",
    label: "Short Bio",
    type: "textarea",
    required: false,
  },
];

export default function App() {
  const [initialFormData, setInitialFormData] = useState(null);
  useState(() => {
    fetchFormDataAPI().then((res) => {
      setInitialFormData(res);
    });
  }, []);

  console.log({initialFormData})
  return (
    // <FormProvider>
    // <div className="p-6 max-w-xl mx-auto">
    //   <h1 className="text-2xl font-bold mb-4">Dynamicdd Form</h1>
    // </div>
    <div className="h-[100vh] ">

    <Form formDataProps={initialFormData} />
    </div>

    // </FormProvider>
  );
}
