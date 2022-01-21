// import React from "react";
// import Select from "react-select";
// import { useForm, Controller } from "react-hook-form";
// import Input from "@material-ui/core/Input";

// export const App = () => {
//   const { control, handleSubmit } = useForm({
//     defaultValues: {
//       firstName: '',
//       select: {}
//     }
//   });
//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Controller
//         name="firstName"
//         control={control}
//         render={({ field }) => <Input {...field} />}
//       />
//       <Controller
//         name="select"
//         control={control}
//         render={({ field }) => <Select 
//           {...field} 
//           options={[
//             { value: "chocolate", label: "Chocolate" },
//             { value: "strawberry", label: "Strawberry" },
//             { value: "vanilla", label: "Vanilla" }
//           ]} 
//         />}
//       />
//       <input type="submit" />
//     </form>
//   );
// };