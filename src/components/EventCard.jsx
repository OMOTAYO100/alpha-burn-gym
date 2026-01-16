import { MapPin } from 'lucide-react';

const EventCard = ({ title, date, location, description, image, color = "orange" }) => {
    const colorClasses = {
        orange: "bg-orange-500",
        blue: "bg-blue-500",
        red: "bg-red-500"
    };

    const bgClass = colorClasses[color] || "bg-orange-500";

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className={`absolute top-4 left-4 ${bgClass} text-white font-bold py-1 px-3 rounded text-sm`}>{date}</div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-500 text-sm mb-4 flex items-center gap-1"><MapPin size={14} /> {location}</p>
            <p className="text-gray-600 mb-6">{description}</p>
            <button className="w-full border-2 border-gray-900 text-gray-900 font-bold py-2 rounded-lg hover:bg-gray-900 hover:text-white transition-colors cursor-pointer">Register Now</button>
        </div>
    </div>
  );
};

export default EventCard;
