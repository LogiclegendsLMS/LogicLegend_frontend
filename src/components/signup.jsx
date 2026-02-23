import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate(); // ⭐ navigation

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers in phone
    if (name === "phone" && !/^\d*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z ]+$/.test(formData.name)) {
      newErrors.name = "Only letters allowed";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email with @";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number required";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.password) {
      newErrors.password = "Password required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Must contain 1 uppercase letter";
    } else if (!/[0-9]/.test(formData.password)) {
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
      const res = await fetch("http://localhost:3000/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }

      alert("Signup Successful 🚀");

      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
      });

    } catch (error) {
      console.error("Signup error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#062B5B] to-blue-800 p-4">

      {/* MAIN CONTAINER */}
      <div className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl flex overflow-hidden">

        {/* ⭐ BACK / CROSS BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* LEFT IMAGE */}
        <div className="w-1/2 bg-gradient-to-r from-[#062B5B] to-blue-600 text-white flex-col justify-center items-center p-10 hidden md:flex">
          <img
            src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
            alt="signup illustration"
            className="w-96 mb-6"
          />
          <h1 className="text-4xl font-bold mb-3">Eduvion</h1>
          <p className="text-center opacity-90">
            Your Smart Learning Management System
          </p>
        </div>

        {/* FORM */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-semibold text-center text-[#062B5B] mb-2">
            Join Eduvion
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-600">Phone Number</label>
              <input
                type="text"
                name="phone"
                maxLength={10}
                placeholder="Enter 10 digit number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-xl font-medium hover:bg-yellow-400 hover:text-[#062B5B] transition"
            >
              Sign Up
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}