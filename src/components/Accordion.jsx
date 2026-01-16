import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 bg-white transition-all duration-300 hover:shadow-md">
      <button 
        className="w-full flex items-center justify-between p-5 text-left bg-white text-gray-900 font-semibold focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={20} className="text-orange-500" /> : <ChevronDown size={20} className="text-gray-400" />}
      </button>
      <div 
        className={`px-5 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
