import SectionHeader from '../components/SectionHeader';
import CoachCard from '../components/CoachCard';

const Coaches = () => {
    const coaches = [
        {
            name: "Hannah Benjamin",
            specialty: "Fitness & Aerobics",
            description: "Hannah teaches you all peculiarities of fitness and aerobics in a group or individually.",
            rate: 50,
            image: "/assets/coach-1.jpg"
        },
        {
            name: "Bryan Jacob",
            specialty: "CrossFit",
            description: "He has more than 10 years of experience in CrossFit and professional athletics.",
            rate: 50,
            image: "/assets/coach-2.jpg"
        },
        {
            name: "Sydney Kuhn",
            specialty: "Yoga",
            description: "Our leading yoga coach, Sydney will help you reach full harmony with your body.",
            rate: 50,
            image: "/assets/Coach-4.jpg"
        },
        {
            name: "Austin Barbells",
            specialty: "Bodybuilder",
            description: "Austin is not only our most called-for coach, but also a winner of many championships.",
            rate: 50,
            image: "/assets/coach-3.jpg"
        }
    ];

  return (
    <>
      <header className="bg-gray-900 py-12 text-center">
        <h2 className="text-white text-3xl sm:text-5xl font-bold">Coaches</h2>
        <p className="text-gray-400 mt-2">Home / Coaches</p>
      </header>

      <section className="flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 lg:p-12 gap-12 bg-gray-50">
        <div className="lg:w-1/2">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 font-[Poppins]">
            The team of professionals
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl mb-6 leading-relaxed">
            Our coaches represent years of experience in bodybuilding, yoga,
            CrossFit, fitness and other disciplines. As a team of professionals
            practicing for years, Intense provides high-quality training service
            to local residents and guests of the area.
          </p>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
            The work of our team has been numerously awarded by American sports
            committees for our contribution to the development of sport in
            America.
          </p>
        </div>
        <figure className="lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl skew-y-2 transform transition-transform hover:skew-y-0 duration-500">
          <img
            className="w-full h-auto object-cover"
            src="/assets/desi-gym-fitness-8050665_1280.jpg"
            alt="Team"
          />
        </figure>
      </section>

      <section className="p-6 sm:p-10 lg:p-12">
        <SectionHeader title="Meet The Team" subtitle="Expert guidance for every goal." decoration="underline_text" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {coaches.map((coach, index) => (
                <CoachCard key={index} {...coach} />
            ))}
        </div>
      </section>
    </>
  );
};

export default Coaches;
