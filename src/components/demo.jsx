import { useNavigate } from "react-router-dom";

export default function Demo() {
  const navigate = useNavigate(); // ⭐ navigation

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#062B5B] to-blue-700 flex items-center justify-center p-6">

      {/* MAIN CONTAINER */}
      <div className="relative max-w-5xl w-full bg-white rounded-2xl shadow-2xl p-10 text-center">

        {/* ⭐ CROSS BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#062B5B] mb-4">
          Request a Demo
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mb-8">
          Experience how <span className="font-semibold">Eduvion LMS</span> helps
          manage courses, students, analytics, and training in one powerful
          learning platform.
        </p>

        {/* VIDEO */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/DkcVQYSK6kU"
            title="Eduvion LMS Request Demo"
            allowFullScreen
          ></iframe>
        </div>

      </div>

    </div>
  );
}