const Schedule = () => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const classes = [
        { time: "06:00 AM", mon: "CrossFit", tue: "Yoga", wed: "CrossFit", thu: "Yoga", fri: "CrossFit", sat: "Open Gym", sun: "Rest" },
        { time: "09:00 AM", mon: "HIIT", tue: "Pilates", wed: "HIIT", thu: "Pilates", fri: "HIIT", sat: "Team WOD", sun: "Yoga" },
        { time: "05:00 PM", mon: "Powerlifting", tue: "Bodybuilding", wed: "Powerlifting", thu: "Bodybuilding", fri: "Powerlifting", sat: "-", sun: "-" },
        { time: "07:00 PM", mon: "Zumba", tue: "Spin", wed: "Zumba", thu: "Spin", fri: "Zumba", sat: "-", sun: "-" }
    ];

  return (
    <>
      <header className="py-24 relative" style={{ background: "url('/assets/hero_standard_gym.png')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
         <div className="absolute inset-0 bg-black/70"></div>
         <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl font-bold text-white mb-4">Class <span className="text-orange-500">Schedule</span></h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">Find your perfect workout time.</p>
         </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
              <thead className="bg-gray-900 text-white">
                  <tr>
                      <th className="p-4 text-left">Time</th>
                      {days.map(day => <th key={day} className="p-4 text-left">{day}</th>)}
                  </tr>
              </thead>
              <tbody>
                  {classes.map((row, index) => (
                      <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                          <td className="p-4 font-bold text-orange-500">{row.time}</td>
                          <td className="p-4">{row.mon}</td>
                          <td className="p-4">{row.tue}</td>
                          <td className="p-4">{row.wed}</td>
                          <td className="p-4">{row.thu}</td>
                          <td className="p-4">{row.fri}</td>
                          <td className="p-4">{row.sat}</td>
                          <td className="p-4">{row.sun}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </main>
    </>
  );
};

export default Schedule;
