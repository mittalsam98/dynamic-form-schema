const dummyResposne = {
  name: "Create User",
  properties: {
    firstName: {
      type: "string",
      label:'First Name'
    },
    lastName: {
      type: "string",
      label:'Last Name'
    },
    age: {
      type: "number",
      label:'Age'
    },
    contact: {
      type: "object",
      name:'Contact',
      properties: {
        email: {
          type: "string",
          label:'Email'
        },
        phone: {
          type: "number",
          label:'Phone Number'
        },
      },
      required: ["email"]
    },
  },
  required: ["firstName", "contact"]
};

export const fetchFormDataAPI =()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(dummyResposne)
        },100)
    })
}