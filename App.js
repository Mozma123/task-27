// import React from 'react';
// import { useForm, Controller, useController } from "react-hook-form";
// import Select from "react-select";
// import { TextField } from "@mui/material"; // Ensure you're using @mui/material for the latest version

// // Input Component with useController
// function InputWithController({ control, name }) {
//   const {
//     field,
//     fieldState: { invalid, isTouched, isDirty },
//     formState: { touchedFields, dirtyFields },
//   } = useController({
//     name,
//     control,
//     rules: { required: true },
//   });

//   return (
//     <TextField
//       onChange={field.onChange}
//       onBlur={field.onBlur}
//       value={field.value}
//       name={field.name}
//       inputRef={field.ref}
//     />
//   );
// }

// // Input Component Example
// const Input = ({ label, register, required }) => (
//   <>
//     <label>{label}</label>
//     <input {...register(label, { required })} />
//   </>
// );

// // Select Component Example
// const SelectInput = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
//   <>
//     <label>{label}</label>
//     <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
//       <option value="20">20</option>
//       <option value="30">30</option>
//     </select>
//   </>
// ));

// function App() {
//   const { register, handleSubmit, control, formState: { errors } } = useForm({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       iceCreamType: {},
//     },
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//     alert(JSON.stringify(data));
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input {...register("firstName", { required: true, maxLength: 20 })} />
//         <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
//         <input type="number" {...register("age", { min: 18, max: 99 })} />
//         <input type="submit" />
//       </form>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Input label="First Name" register={register} required />
//         <SelectInput label="Age" {...register("Age")} />
//         <input type="submit" />
//       </form>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Controller
//           name="firstName"
//           control={control}
//           render={({ field }) => <TextField {...field} />}
//         />
//         <Controller
//           name="iceCreamType"
//           control={control}
//           render={({ field }) => (
//             <Select
//               {...field}
//               options={[
//                 { value: "chocolate", label: "Chocolate" },
//                 { value: "strawberry", label: "Strawberry" },
//                 { value: "vanilla", label: "Vanilla" },
//               ]}
//             />
//           )}
//         />
//         <input type="submit" />
//       </form>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <InputWithController control={control} name="firstName" />
//         <InputWithController control={control} name="lastName" />
//         <input type="submit" />
//       </form>

//       {/* Validation with Error Messages */}
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           {...register("firstName", { required: true })}
//           aria-invalid={errors.firstName ? "true" : "false"}
//         />
//         {errors.firstName?.type === "required" && (
//           <p role="alert">First name is required</p>
//         )}

//         <input
//           {...register("mail", { required: "Email Address is required" })}
//           aria-invalid={errors.mail ? "true" : "false"}
//         />
//         {errors.mail && <p role="alert">{errors.mail.message}</p>}

//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default App;




// chat
import React from "react";
import Header from "./Header"; // Ensure the correct import path
import { useForm } from "react-hook-form";
import "./index";

let renderCount = 0;

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  renderCount++;

  const firstName = watch("firstName");

  return (
    <div>
      <Header
        renderCount={renderCount}
        description=" React Hook Form"
      />
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div>
          <input
            {...register("firstName", { required: "This is required." })}
            placeholder="First Name"
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div>
          <input
            {...register("lastName", {
              required: "This is required.",
              minLength: {
                value: 4,
                message: "Min length is 4",
              },
            })}
            placeholder="Last Name"
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
