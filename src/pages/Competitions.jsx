import SectionHeader from '../components/SectionHeader';
import EventCard from '../components/EventCard';
import Podium from '../components/Podium';

const Competitions = () => {
    const events = [
        {
            title: "Winter Deadlift Championship",
            date: "FEB 15",
            location: "Main Lifting Zone",
            description: "Test your strength against the best in the region. Divisions for all weight classes.",
            image: "/assets/gym-image-3.jpeg",
            color: "orange"
        },
        {
            title: "Fitness Tech Summit",
            date: "MAR 10",
            location: "Studio A",
            description: "Discover the latest in wearable tech and AI coaching integration. Demo new gadgets.",
            image: "/assets/blog_hypertrophy.png",
            color: "blue"
        },
        {
            title: "Pearlsburg CrossFit Open",
            date: "APR 05",
            location: "Outdoor Arena",
            description: "High-intensity interval challenges. Team and individual categories available.",
            image: "/assets/coach-2.jpg",
            color: "red"
        }
    ];

  return (
    <>
        <header>
             <section className="py-24 relative" style={{ background: "url('/assets/hero_standard_gym.png')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-5xl font-bold text-white mb-4">Competitions & <span className="text-orange-500">Events</span></h1>
                    <p className="text-gray-300 text-xl max-w-2xl mx-auto">Push your limits. Compete. Win.</p>
                </div>
            </section>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
            {/* Upcoming Events */}
            <section>
                 <SectionHeader 
                    title="Upcoming Events" 
                    subtitle="Mark your calendars. These are the events you don't want to miss, featuring both fitness challenges and tech-integrated showcases."
                 />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>
            </section>

            {/* Winners / Podium Section */}
            <Podium />
            
        </main>
    </>
  );
};

export default Competitions;
