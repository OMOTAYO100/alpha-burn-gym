import { useState } from 'react';
import { Search } from 'lucide-react';
import BlogCard from '../components/BlogCard';

const Blog = () => {
    const [filter, setFilter] = useState('All');

    const posts = [
        {
            title: "The Bio-Mechanics of Hypertrophy",
            category: "Science",
            date: "Jan 15, 2026",
            readTime: "8 min read",
            description: "Understand the cellular process of muscle growth to optimize your training stimulation and recovery windows.",
            image: "/assets/blog_hypertrophy.png",
            color: "orange",
            featured: true
        },
        {
            title: "Fuel Your Performance: Macro Split",
            category: "Nutrition",
            date: "Jan 14, 2026",
            readTime: "5 min read",
            description: "Learn how to calculate the perfect protein, carb, and fat ratio for your specific body type and goals.",
            image: "/assets/blog_nutrition.png",
            color: "green"
        },
        {
            title: "Rest Days vs Leg Days",
            category: "Mindset",
            date: "Jan 10, 2026",
            readTime: "4 min read",
            description: "Why active recovery is crucial for central nervous system repair and long-term gains.",
            image: "/assets/woman-2250970_1280.jpg",
            color: "blue"
        },
        {
            title: "Mastering the Deadlift",
            category: "Technique",
            date: "Jan 05, 2026",
            readTime: "6 min read",
            description: "5 common mistakes that are killing your gains and hurting your back. Fix your form today.",
            image: "/assets/gym-image-3.jpeg",
            color: "red"
        },
        {
            title: "Benefits of Strength Training",
            category: "Strength",
            date: "Dec 28, 2025",
            readTime: "5 min read",
            description: "It's not just about looking good. Discover the metabolic and bone density benefits that enhance longevity.",
            image: "/assets/farmer-walks-2141229_1280.jpg",
            color: "purple"
        },
        {
            title: "HIIT vs LISS: What's Best?",
            category: "Cardio",
            date: "Dec 20, 2025",
            readTime: "4 min read",
            description: "Comparing High Intensity Interval Training with Low Intensity Steady State cardio for fat loss.",
            image: "/assets/gym-image-2.jpeg",
            color: "orange"
        }
    ];

    const visiblePosts = filter === 'All' ? posts : posts.filter(post => post.category === filter);

  return (
    <>
      <header className="py-24 relative" style={{ background: "url('/assets/hero_standard_gym.png')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
         <div className="absolute inset-0 bg-black/70"></div>
         <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl font-bold text-white mb-4">Pearlsburg <span className="text-orange-500">Insights</span></h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">Expert advice on training, nutrition, and lifestyle to fuel your evolution.</p>
         </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
           {/* Search & Filter */}
           <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <div className="relative w-full md:w-96">
                 <input type="text" placeholder="Search articles..." className="w-full bg-white border border-gray-200 rounded-full px-6 py-3 pl-12 focus:outline-none focus:border-orange-500 shadow-sm transition-all focus:ring-2 focus:ring-orange-100" />
                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto">
                  {['All', 'Training', 'Nutrition', 'Mindset', 'Recovery'].map(cat => (
                      <button 
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-5 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${filter === cat ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-orange-500 hover:text-orange-500'}`}
                      >
                        {cat}
                      </button>
                  ))}
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filter === 'All' && posts[0] && (
                   <div className="lg:col-span-2 lg:row-span-2">
                        <BlogCard {...posts[0]} />
                   </div>
               )}
               {/* Render remaining posts */}
               {(filter === 'All' ? posts.slice(1) : visiblePosts).map((post, index) => (
                   <BlogCard key={index} {...post} featured={false} />
               ))}
           </div>
           
            {/* Pagination */}
            <div className="flex justify-center mt-16 gap-2">
               <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-orange-500 transition-colors">1</button>
               <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors">2</button>
               <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors">Next</button>
            </div>
      </main>
    </>
  );
};

export default Blog;
