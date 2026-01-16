import { Check } from 'lucide-react';

const PricingCard = ({ title, price, period = "month", features, recommended = false, buttonText = "Choose Plan", onSelect }) => {
  return (
    <div className={`relative bg-white rounded-2xl p-8 border ${recommended ? 'border-orange-500 shadow-xl scale-105 z-10' : 'border-gray-100 shadow-lg'} hover:shadow-2xl transition-all duration-300`}>
        {recommended && (
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Most Popular
            </span>
        )}
        <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-gray-900">${price}</span>
                <span className="text-gray-500 ml-1">/{period}</span>
            </div>
        </div>
        
        <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                    <Check className={`shrink-0 ${recommended ? 'text-orange-500' : 'text-green-500'}`} size={20} />
                    <span className="text-gray-600 text-sm">{feature}</span>
                </li>
            ))}
        </ul>

        <button 
            onClick={onSelect}
            className={`w-full py-3 rounded-xl font-bold transition-all ${recommended ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-500/30 shadow-lg' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
        >
            {buttonText}
        </button>
    </div>
  );
};

export default PricingCard;
