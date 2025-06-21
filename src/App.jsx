import React, { useState } from "react";
import Form from "./Form";
import { fetchFormDataAPI } from "./api";

export default function App() {
  const [initialFormData, setInitialFormData] = useState(null);
  useState(() => {
    fetchFormDataAPI().then((res) => {
      setInitialFormData(res);
    });
  }, []);

  console.log({ initialFormData });
  return (
    <div className="h-[100vh] ">
      <Form formDataProps={initialFormData} />
    </div>
  );
}
