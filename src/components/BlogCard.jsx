import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogCard = ({ title, category, date, readTime, description, image, color = "orange", featured = false }) => {
     const colorClasses = {
        orange: "bg-orange-500",
        blue: "bg-blue-500",
        red: "bg-red-500",
        green: "bg-green-600",
        purple: "bg-purple-600"
    };
    const bgClass = colorClasses[color] || "bg-orange-500";

  if (featured) {
      return (
        <article className="relative group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-96 lg:h-auto row-span-1 lg:row-span-2">
            <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <span className={`${bgClass} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block`}>{category}</span>
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">{title}</h3>
                <p className="text-gray-300 mb-6 line-clamp-2 md:line-clamp-3">{description}</p>
                
                <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span>{date}</span> • <span>{readTime}</span>
                </div>
            </div>
        </article>
      );
  }

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col h-full">
        <div className="relative h-64 overflow-hidden shrink-0">
            <img src={image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={title} />
            <span className={`absolute top-4 left-4 ${bgClass} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>{category}</span>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
            <Calendar size={14} /> {date}
            <span className="mx-2">•</span>
            <Clock size={14} /> {readTime}
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">{title}</h3>
            <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">{description}</p>
            <div className="mt-auto">
                 <button className="inline-flex items-center text-orange-500 font-semibold hover:gap-2 transition-all">
                    Read Article <ArrowRight size={16} className="ml-2" />
                </button>
            </div>
        </div>
    </article>
  );
};

export default BlogCard;
