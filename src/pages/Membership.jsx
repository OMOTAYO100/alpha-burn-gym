import SectionHeader from '../components/SectionHeader';
import PricingCard from '../components/PricingCard';

const Membership = () => {
    const plans = [
        {
            title: "Basic",
            price: 29,
            features: ["Access to gym floor", "Locker room access", "1 Free PT Session", "Free WiFi"],
            recommended: false
        },
        {
            title: "Premium",
            price: 49,
            features: ["All Basic features", "Unlimited Group Classes", "Guest Privileges", "Sauna Access", "Smoothie Bar Discounts"],
            recommended: true
        },
        {
            title: "Elite",
            price: 89,
            features: ["All Premium features", "Unlimited Tanning", "Priority Class Booking", "Monthly Massage", "Custom Meal Plan"],
            recommended: false
        }
    ];

  return (
    <>
      <header className="py-24 relative" style={{ background: "url('/assets/hero_standard_gym.png')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
         <div className="absolute inset-0 bg-black/70"></div>
         <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl font-bold text-white mb-4">Membership <span className="text-orange-500">Plans</span></h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">Choose the plan that fits your goals and lifestyle.</p>
         </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-6 py-16">
           <SectionHeader title="Transparent Pricing" subtitle="No hidden fees. collaborative contract options available." />
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
               {plans.map((plan, index) => (
                   <PricingCard key={index} {...plan} />
               ))}
           </div>
      </main>
    </>
  );
};

export default Membership;
