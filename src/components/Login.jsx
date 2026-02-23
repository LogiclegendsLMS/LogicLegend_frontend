
// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// export default function Login() {
//   const [form, setForm] = useState({
//     emailOrPhone: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "emailOrPhone") {
//       // If user typing numbers → treat as phone
//       if (/^\d*$/.test(value)) {
//         if (value.length > 10) return;
//       }
//     }

//     setForm({ ...form, [name]: value });
//   };

//   // Validation function
//   const validate = () => {
//     let newErrors = {};

//     if (!form.emailOrPhone) {
//       newErrors.emailOrPhone = "Email or phone is required";
//     } else {
//       const isNumber = /^\d+$/.test(form.emailOrPhone);

//       if (isNumber) {
//         if (form.emailOrPhone.length !== 10) {
//           newErrors.emailOrPhone = "Phone must be exactly 10 digits";
//         }
//       } else {
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.emailOrPhone)) {
//           newErrors.emailOrPhone = "Enter valid email address";
//         }
//       }
//     }

//     if (!form.password) {
//       newErrors.password = "Password is required";
//     } else if (form.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     } else if (!/[A-Z]/.test(form.password)) {
//       newErrors.password = "Must contain 1 uppercase letter";
//     } else if (!/[0-9]/.test(form.password)) {
//       newErrors.password = "Must contain 1 number";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validate()) return;

//     try {
//       const res = await fetch("http://localhost:3000/api/v1/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Login failed");
//       }

//       alert("Login Successful ✅");
//       console.log("LOGIN RESPONSE:", data);

//     } catch (error) {
//       console.error("Login error:", error);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#062B5B] to-blue-500 p-4">

//       {/* MAIN CONTAINER */}
//       <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

//         {/* LEFT SECTION → HIDDEN ON MOBILE */}
//         <div className="hidden md:flex md:w-1/2 bg-gradient-to-r from-[#062B5B] to-blue-600 text-white flex-col justify-center items-center p-10">
//           <img
//             src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
//             alt="learning animation"
//             className="w-72 mb-6"
//           />
//           <h1 className="text-4xl font-bold mb-3">Eduvion</h1>
//           <p className="text-center opacity-90">
//             Your Smart Learning Management System
//           </p>
//         </div>

//         {/* RIGHT SECTION → FULL WIDTH ON MOBILE */}
//         <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
//           <h2 className="text-2xl font-semibold text-[#062B5B] mb-6">
//             Login to your account
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-5">

//             {/* EMAIL OR PHONE */}
//             <div>
//               <input
//                 type="text"
//                 name="emailOrPhone"
//                 placeholder="Email or Phone Number"
//                 value={form.emailOrPhone}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
//               />
//               {errors.emailOrPhone && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.emailOrPhone}
//                 </p>
//               )}
//             </div>

//             {/* PASSWORD */}
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
//               />

//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-3 text-gray-500"
//               >
//                 {showPassword ? "🙈" : "👁️"}
//               </button>

//               {errors.password && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.password}
//                 </p>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-[#062B5B] transition"
//             >
//               Login
//             </button>
//           </form>

//           <p className="text-sm mt-5 text-center">
//             Don't have an account?
//             <NavLink to={"/Singup"}>
//               <button className="ml-2 py-1 text-black rounded-lg">
//                 Signup
//               </button>
//             </NavLink>
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate(); // ⭐ for back navigation

  const [form, setForm] = useState({
    emailOrPhone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "emailOrPhone") {
      if (/^\d*$/.test(value)) {
        if (value.length > 10) return;
      }
    }

    setForm({ ...form, [name]: value });
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!form.emailOrPhone) {
      newErrors.emailOrPhone = "Email or phone is required";
    } else {
      const isNumber = /^\d+$/.test(form.emailOrPhone);

      if (isNumber) {
        if (form.emailOrPhone.length !== 10) {
          newErrors.emailOrPhone = "Phone must be exactly 10 digits";
        }
      } else {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.emailOrPhone)) {
          newErrors.emailOrPhone = "Enter valid email address";
        }
      }
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (!/[A-Z]/.test(form.password)) {
      newErrors.password = "Must contain 1 uppercase letter";
    } else if (!/[0-9]/.test(form.password)) {
      newErrors.password = "Must contain 1 number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch("http://localhost:3000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      alert("Login Successful ✅");
      console.log("LOGIN RESPONSE:", data);

    } catch (error) {
      console.error("Login error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#062B5B] to-blue-500 p-4">

      {/* MAIN CONTAINER */}
      <div className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

        {/* ⭐ BACK / CROSS BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* LEFT SECTION → HIDDEN ON MOBILE */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-r from-[#062B5B] to-blue-600 text-white flex-col justify-center items-center p-10">
          <img
            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="learning animation"
            className="w-72 mb-6"
          />
          <h1 className="text-4xl font-bold mb-3">Eduvion</h1>
          <p className="text-center opacity-90">
            Your Smart Learning Management System
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-[#062B5B] mb-6">
            Login to your account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* EMAIL OR PHONE */}
            <div>
              <input
                type="text"
                name="emailOrPhone"
                placeholder="Email or Phone Number"
                value={form.emailOrPhone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.emailOrPhone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.emailOrPhone}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-[#062B5B] transition"
            >
              Login
            </button>
          </form>

          <p className="text-sm mt-5 text-center">
            Don't have an account?
            <NavLink to={"/Singup"}>
              <button className="ml-2 py-1 text-black rounded-lg">
                Signup
              </button>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}