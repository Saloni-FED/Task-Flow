import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Auth = () => {
  const [isSignUp, setIsSignup] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleSwitch = () => {
    setIsSignup((prevState) => !prevState);
  };

  const onSubmit = (formData) => {
    console.log("form submited");
    console.log(formData);
  };
  return (
    <div className=" flex flex-col items-center max-sm:mt-56">
      <div className="border w-fit  p-10 mt-10 bg-custom_white rounded shadow-xl">
        <h1 className="text-center text-3xl text-d_green">
          {isSignUp ? "Register" : "Sign in"}
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 mt-6 w-full items-center justify-center"
          noValidate
        >
          {isSignUp && (
            <div className="w-full">
              <input
                type="text"
                className="block border  w-full p-3 rounded mb-4"
                placeholder="Full Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                })}
              />
              <p className="text-xs text-red-500 mt-2">{errors.name?.message}</p>
            </div>
          )}
          <div className="w-full">
            <input
              type="email"
              className="input"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter your email",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="email"
            />{" "}
            <p className="text-xs text-red-500 mt-2">{errors.email?.message}</p>
          </div>
          <div className="w-full">
            <input
              type="password"
              className="input"
              {...register("password", {
                required: {
                  value: true,
                  message: "Please enter your password",
                },
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters",
                },
              })}
              placeholder="password"
            />{" "}
            <p className="text-xs text-red-500 mt-2">{errors.password?.message}</p>{" "}
          </div>

          <button className="border border-l_green w-72 px-2 py-1 text-bold text-2xl mt-5 rounded cursor-pointer">
            Submit
          </button>
        </form>
      </div>
      <h2 className="mt-5 ">
        Do you have an account?
        <span
          className="text-d_green ml-2 underline cursor-pointer"
          onClick={handleSwitch}
        >
          {isSignUp ? "Register" : "Sign in "}
        </span>
      </h2>
    </div>
  );
};

export default Auth;

// import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
// import toast from "react-hot-toast";
// import { signup, signin } from "../../api";

// const Auth = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors, isSubmitting },
//   } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = ()=>{

//   }
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col">
//       <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
//         <div className="bg-red-100 px-6 py-8 rounded shadow-md text-black w-full">
//           <h1 className="mb-8 text-3xl text-center">
//             {isSignup ? "Sign Up" : "Sign in"}
//           </h1>
//           <form onSubmit={handleSubmit(onSubmit)} noValidate>
//             {isSignup && (
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   className="block border  w-full p-3 rounded mb-4"
//                   placeholder="Full Name"
//                   {...register("name", {
//                     required: {
//                       value: true,
//                       message: "Please enter your name",
//                     },
//                   })}
//                 />
//                 <p className="text-xs text-red-500">{errors.name?.message}</p>
//               </div>
//             )}
//             <div className="mb-4">
//               <input
//                 type="text"
//                 className="block border w-full p-3 rounded mb-4"
//                 {...register("email", {
//                   required: {
//                     value: true,
//                     message: "Please enter your email",
//                   },
//                  yh
//                 })}
//                 placeholder="Email"
//               />
//               <p className="text-xs text-red-500">{errors.email?.message}</p>
//             </div>
//             <div className="mb-4">
//               <input
//                 type="password"
//                 className="block border w-full p-3 rounded mb-4"
//                 {...register("password", {
//                   required: {
//                     value: true,
//                     message: "Please enter your password",
//                   },
//                   minLength: {
//                     value: 6,
//                     message: "Password must have at least 6 characters",
//                   },
//                 })}
//                 placeholder="Password"
//               />
//               <p className="text-xs text-red-500">{errors.password?.message}</p>
//             </div>
//             <button
//               type="submit"
//               className="bg-red-300 hover:bg-red-400 w-full text-center py-3 rounded bg-green text-white text-2xl font-semibold hover:bg-green-dark focus:outline-none my-1"
//               disabled={isSubmitting}
//             >
//               {isSubmitting
//                 ? "Submitting..."
//                 : isSignup
//                 ? "Create Account"
//                 : "Sign in"}
//             </button>
//           </form>
//         </div>
//         <div className=" mt-6">
//           {isSignup ? "Already have an account?" : "Don't have an account?"}
//           <button
//             className="text-coral-red font-bold ml-2"
//           >
//             {isSignup ? "Sign in" : "Sign Up"}
//           </button>
//         </div>
//       </div>
//       <DevTool control={control} />
//     </div>
//   );
// };
