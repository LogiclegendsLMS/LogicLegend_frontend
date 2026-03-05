import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const courses = [
    {
      title: "Advanced React Patterns 2026",
      instructor: "John Doe",
      progress: 60,
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&h=300&auto=format&fit=crop"
    },
    {
      title: "Mastering Node.js & Microservices",
      instructor: "Jane Smith",
      progress: 35,
      thumbnail: "https://images.unsplash.com/photo-1502942735447-1b9b59716d39?q=80&w=400&h=300&auto=format&fit=crop"
    },
    {
      title: "UI/UX Strategy & Figma Pro",
      instructor: "Arjun Mehta",
      progress: 85,
      thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=400&h=300&auto=format&fit=crop"
    }
  ];

  return (
    <div className="mt-12 mb-20">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-[1000] text-slate-900 tracking-tight">
            My <span className="text-yellow-500">Courses</span>
          </h2>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] mt-1">
            Pick up where you left off
          </p>
        </div>
        <button className="px-6 py-3 bg-white border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-sm">
           View All Courses
        </button>
      </div>

      {/* Grid Wrapper - Responsive and Safe */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;