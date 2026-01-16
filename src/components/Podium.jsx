import { Crown } from 'lucide-react';

const Podium = () => {
  return (
    <section className="bg-gray-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>

        <div className="relative z-10 text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-2">Hall of Champions 🏆</h2>
            <p className="text-gray-400">Celebrating the winners of our last "Iron Will" Competition</p>
        </div>

        {/* Podium */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-8 mb-8 pb-12 border-b border-gray-800">
            
            {/* 2nd Place */}
            <div className="order-2 md:order-1 flex flex-col items-center">
                <div className="relative group">
                    <div className="w-32 h-32 rounded-full p-1 bg-gray-400 overflow-hidden shadow-2xl relative">
                        <img src="/assets/Testimonial-A.jpg" alt="Second Place" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-400 text-gray-900 font-bold px-4 py-1 rounded-full shadow-lg text-sm">2nd Place</div>
                </div>
                <h3 className="text-white font-bold text-xl mt-6">Mike Williams</h3>
                <p className="text-gray-400">Total: 485kg</p>
            </div>
            
            {/* 1st Place */}
            <div className="order-1 md:order-2 flex flex-col items-center transform md:-translate-y-8">
                <div className="text-yellow-400 text-4xl mb-4 animate-bounce"><Crown size={40} fill="currentColor" /></div>
                <div className="relative group">
                    <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-tr from-yellow-300 to-yellow-600 overflow-hidden shadow-[0_0_30px_rgba(234,179,8,0.5)] relative">
                        <img src="/assets/Testimonial- B.jpg" alt="First Place" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold px-6 py-1 rounded-full shadow-lg text-lg">WINNER</div>
                </div>
                <h3 className="text-white font-bold text-2xl mt-8">Sarah Johnson</h3>
                <p className="text-gray-400">Total: 520kg</p>
            </div>

            {/* 3rd Place */}
            <div className="order-3 md:order-3 flex flex-col items-center">
                <div className="relative group">
                    <div className="w-32 h-32 rounded-full p-1 bg-amber-700 overflow-hidden shadow-2xl relative">
                        <img src="/assets/testimony.jpg" alt="Third Place" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-amber-700 text-white font-bold px-4 py-1 rounded-full shadow-lg text-sm">3rd Place</div>
                </div>
                <h3 className="text-white font-bold text-xl mt-6">Emily Davis</h3>
                <p className="text-gray-400">Total: 450kg</p>
            </div>

        </div>
        
        <div className="text-center">
            <p className="text-gray-500 text-sm"><i>*Images uploaded by Admin</i></p>
        </div>
    </section>
  );
};

export default Podium;
