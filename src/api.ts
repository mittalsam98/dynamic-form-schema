const dummyResposne = {
  name: "Create User",
  properties: {
    firstName: {
      type: "string",
      label: 'First Name',
      validation: {
        required: true,
        minLength: 2,
        maxLength: 50
      }
    },
    lastName: {
      type: "string",
      label: 'Last Name',
      validation: {
        required: false,
        minLength: 2,
        maxLength: 50
      }
    },
    age: {
      type: "number",
      label: 'Age',
      validation: {
        required: false,
        min: 0,
        max: 120
      }
    },
    email: {
      type: "string",
      label: 'Email',
      validation: {
        required: true,
        pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
      }
    },
    birthDate: {
      type: "date",
      label: 'Date of birth',
      validation: {
        required: false
      }
    },
    gender: {
      type: "select",
      label: 'Gender',
      options: [
        { value: "", label: "Select Gender" },
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" }
      ],
      validation: {
        required: false
      }
    },
    newsletter: {
      type: "checkbox",
      label: 'Subscribe to the newsletter',
      validation: {
        required: false
      }
    },
    contact: {
      type: "object",
      name: 'Contact',
      properties: {
        phone: {
          type: "number",
          label: 'Phone Number',
          validation: {
            required: false,
            min: 1000000000,
            max: 9999999999
          }
        },
        address: {
          type: "string",
          label: 'Address',
          validation: {
            required: false,
            maxLength: 200
          }
        }
      },
      required: ["phone"]
    },
    showAdvanced: {
      type: "checkbox",
      label: 'Show Advanced Options',
      validation: {
        required: false
      }
    },
    advancedField: {
      type: "string",
      label: 'Advanced Field',
      validation: {
        required: false
      },
      showIf: {
        field: "showAdvanced",
        value: true
      }
    }
  },
  required: ["firstName", "email"]
};

export const fetchFormDataAPI =()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(dummyResposne)
        },100)
    })
}