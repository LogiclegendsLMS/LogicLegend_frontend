export default function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#062B5B] to-blue-700 flex items-center justify-center p-6">

      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl p-10 text-center">

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
            src="https://www.youtube.com/watch?v=DkcVQYSK6kU"
            title="Eduvion LMS Request Demo"
            allowFullScreen
          ></iframe>
        </div>

        {/* BACK BUTTON */}
        <button
          onClick={() => window.history.back()}
          className="mt-8 px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
        >
          Back
        </button>

      </div>

    </div>
  );
}