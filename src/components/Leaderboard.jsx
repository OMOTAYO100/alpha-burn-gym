import { useState } from 'react';

const Leaderboard = () => {
    const [activeTab, setActiveTab] = useState('men');

    const data = {
        men: [
            { rank: 1, name: "Mike W.", lift: "Deadlift", weight: "585 lbs" },
            { rank: 2, name: "John D.", lift: "Squat", weight: "495 lbs" },
            { rank: 3, name: "Alex R.", lift: "Bench", weight: "365 lbs" }
        ],
        women: [
            { rank: 1, name: "Sarah J.", lift: "Deadlift", weight: "315 lbs" },
            { rank: 2, name: "Emily D.", lift: "Squat", weight: "275 lbs" },
            { rank: 3, name: "Jessica M.", lift: "Bench", weight: "185 lbs" }
        ]
    };

    return (
        <div className="bg-gray-900 rounded-2xl p-6 sm:p-10 text-white shadow-xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-center text-orange-500">Community Leaderboard</h3>
            
            <div className="flex justify-center mb-8 gap-4">
                <button 
                    onClick={() => setActiveTab('men')}
                    className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'men' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
                >
                    Men
                </button>
                <button 
                    onClick={() => setActiveTab('women')}
                    className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'women' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
                >
                    Women
                </button>
            </div>

            <div className="space-y-4">
                {data[activeTab].map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${index === 0 ? 'bg-yellow-500 text-black' : index === 1 ? 'bg-gray-400 text-black' : 'bg-orange-700 text-white'}`}>
                                {item.rank}
                            </div>
                            <div>
                                <h4 className="font-bold">{item.name}</h4>
                                <p className="text-xs text-gray-400">{item.lift}</p>
                            </div>
                        </div>
                        <span className="font-bold text-orange-400">{item.weight}</span>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 text-center">
                 <button className="text-sm text-gray-400 hover:text-orange-500 underline decoration-dotted">View Full Rankings</button>
            </div>
        </div>
    );
};

export default Leaderboard;
