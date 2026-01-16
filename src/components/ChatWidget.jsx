import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your personal AI fitness assistant. How can I help you today?",sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scheduleDB = {
    "Monday": { m: "Chest & Triceps Power", f: "Full Body Tone" },
    "Tuesday": { m: "Back & Biceps", f: "Glutes & Legs (HIIT)" },
    "Wednesday": { m: "Legs & Abs", f: "Upper Body Sculpt" },
    "Thursday": { m: "Shoulders & Traps", f: "Pilates & Core" },
    "Friday": { m: "Full Body Compound", f: "Cardio Kickboxing" },
    "Saturday": { m: "Functional Training", f: "Yoga & Recovery" },
    "Sunday": { m: "Active Recovery", f: "Active Recovery" }
  };

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = days[new Date().getDay()];

    if (lowerInput.includes('today') || lowerInput.includes('program') || lowerInput.includes('workout')) {
        const prog = scheduleDB[today];
        return `Today is **${today}**.\n💪 Men: ${prog.m}\n🧘‍♀️ Women: ${prog.f}`;
    }

    for (let day of days) {
        if (lowerInput.includes(day.toLowerCase())) {
                const prog = scheduleDB[day];
                return `On **${day}** we have:\n💪 Men: ${prog.m}\n🧘‍♀️ Women: ${prog.f}`;
        }
    }

    if (lowerInput.includes('yoga')) return "We have Yoga & Recovery sessions every **Saturday**.";
    if (lowerInput.includes('hiit')) return "HIIT sessions for women are on **Tuesdays**.";
    if (lowerInput.includes('membership') || lowerInput.includes('cost') || lowerInput.includes('price')) return "We offer various membership plans starting from $29/mo. Check the Membership page!";
    if (lowerInput.includes('coach') || lowerInput.includes('trainer')) return "Our expert coaches are here to help. You can view their profiles on the Coaches page.";
    if (lowerInput.includes('smoothie') || lowerInput.includes('fuel')) return "You can pre-order smoothies at our Fuel Bar.";

    const fallbacks = [
        "That's a great goal! Consistency is key.",
        "Don't forget to hydrate! Aim for 3-4 liters a day.",
        "I can help you check the schedule or membership prices.",
        "Rest is just as important as training. Have you slept 8 hours?",
        "Keep pushing! You're doing great."
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = { id: Date.now(), text: inputText, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = inputText;
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
        const responseText = getBotResponse(currentInput);
        const botMsg = { id: Date.now() + 1, text: responseText, sender: 'bot' };
        setMessages(prev => [...prev, botMsg]);
        setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Chat Window */}
        <div className={`${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} origin-bottom-right transition-all duration-300 bg-white rounded-2xl shadow-2xl w-80 mb-4 border border-gray-200 overflow-hidden`}>
            <div className="bg-gray-900 p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <h3 className="text-white font-bold">Pearlsburg AI Coach</h3>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white"><X size={20}/></button>
            </div>
            
            <div className="h-64 p-4 overflow-y-auto bg-gray-50 space-y-3">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex items-start gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'bot' ? 'bg-orange-100 text-orange-500' : 'bg-blue-100 text-blue-500'}`}>
                            {msg.sender === 'bot' ? <Bot size={16} /> : <User size={16} />}
                         </div>
                         <div className={`p-3 rounded-lg shadow-sm text-sm max-w-[80%] whitespace-pre-line ${msg.sender === 'bot' ? 'bg-white text-gray-700 border border-gray-100 rounded-tl-none' : 'bg-orange-500 text-white rounded-tr-none'}`}>
                            {msg.text}
                         </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex items-start gap-2">
                         <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-orange-500"><Bot size={16} /></div>
                         <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm border border-gray-100 text-gray-400">
                            ...
                         </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
                <input 
                    type="text" 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ask about workouts..." 
                    className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <button type="submit" className="bg-orange-500 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <Send size={16} />
                </button>
            </form>
        </div>

        {/* FAB */}
        <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`${isOpen ? 'rotate-0' : 'animate-bounce'} w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer`}
        >
            <Bot size={28} />
        </button>
    </div>
  );
};

export default ChatWidget;
