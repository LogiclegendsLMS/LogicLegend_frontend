const StatsCards = () => {
  const stats = [
    { title: "Enrolled Courses", value: 5 },
    { title: "Completed Courses", value: 2 },
    { title: "Ongoing Courses", value: 3 },
    { title: "Pending Assignments", value: 4 },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mt-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-xl p-6"
        >
          <h3 className="text-gray-500">{stat.title}</h3>
          <p className="text-2xl font-bold mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;