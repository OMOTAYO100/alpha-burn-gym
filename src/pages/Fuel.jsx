import SectionHeader from '../components/SectionHeader';

const Fuel = () => {
    const items = [
        { name: "Protein Power", price: 8, desc: "Whey protein, banana, peanut butter, almond milk" },
        { name: "Green Machine", price: 9, desc: "Spinach, kale, apple, lemon, ginger" },
        { name: "Berry Blast", price: 8, desc: "Mixed berries, greek yogurt, honey" },
        { name: "Recovery Aid", price: 10, desc: "BCAAs, coconut water, pineapple" }
    ];

  return (
    <>
      <header className="py-24 relative" style={{ background: "url('/assets/hero_standard_gym.png')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
         <div className="absolute inset-0 bg-black/70"></div>
         <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl font-bold text-white mb-4">Fuel <span className="text-orange-500">Bar</span></h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">Refuel your body with our premium shakes and healthy snacks.</p>
         </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
          <SectionHeader title="Menu" subtitle="Crafted for performance and recovery." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {items.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center group hover:border-orange-200 transition-colors">
                      <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">{item.name}</h3>
                          <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                      </div>
                      <span className="text-xl font-bold text-orange-500">${item.price}</span>
                  </div>
              ))}
          </div>

          <div className="mt-16 bg-gray-900 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
             <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-4">Pre-Order for Pickup</h2>
                  <p className="text-gray-400 mb-8">Skip the line. Order your shake before you finish your workout.</p>
                  <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors">Order Now</button>
             </div>
          </div>
      </main>
    </>
  );
};

export default Fuel;
