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

  const trainerKnowledge = {
    goals: {
        weightLoss: {
            keywords: ['lose weight', 'fat loss', 'burn calories', 'slimming', 'weight loss', 'cardio', 'obese', 'lean'],
            response: "To incinerate fat and get lean, I recommend **High-Intensity Interval Training (HIIT)** combined with calorie-burning full-body movements. Focus on: **Burpees, Kettlebell Swings, and Mountain Climbers**. Aim for a caloric deficit and 3-4 sessions a week!"
        },
        muscleGain: {
            keywords: ['build muscle', 'gain mass', 'get big', 'hypertrophy', 'size', 'strength', 'bulking', 'jacked'],
            response: "Time to build some serious size! Focus on **Heavy Compound Movements**: **Squats, Deadlifts, and Bench Press**. Stick to a rep range of 8-12 per set and make sure you're eating a caloric surplus with high protein!"
        },
        stamina: {
            keywords: ['stamina', 'endurance', 'cardio', 'running', 'breath', 'v02', 'energy', 'long distance'],
            response: "To boost your stamina at Pearlsburg, focus on aerobic conditioning. Try **30 minutes on the Rowing Machine** or **stair climber intervals**. Mix in some LISS (Low-Intensity Steady State) twice a week."
        },
        toning: {
            keywords: ['tone', 'definition', 'sculpt', 'shred', 'abs', 'six pack', 'ripped'],
            response: "Toning is about sculpting muscles and reducing body fat. Focus on **High Volume Training** (12-15 reps) with moderate weights. Add finishing moves like **Cable Flyes or Lunges** to really define the muscle."
        }
    },
    muscleGroups: {
        chest: {
            keywords: ['chest', 'pecs', 'bench', 'push day'],
            response: "King of chest exercises: **Barbell Bench Press**. Follow it up with **Incline Dumbbell Flyes** and **Weighted Dips** to hit the upper and lower pecs."
        },
        back: {
            keywords: ['back', 'lats', 'pull-ups', 'rows', 'posture'],
            response: "Build a wide V-taper with **Wide-Grip Pull-ups**, **Bent-over Barbell Rows**, and **Seated Lat Pulldowns**. Don't forget Face Pulls for those rear delts!"
        },
        legs: {
            keywords: ['legs', 'quads', 'hamstrings', 'glutes', 'squats', 'leg day'],
            response: "Leg day is mandatory! Power up with **Barbell Back Squats**, **Bulgarian Split Squats**, and **Romanian Deadlifts**. Your future self will thank you!"
        },
        arms: {
            keywords: ['arms', 'biceps', 'triceps', 'guns', 'curls'],
            response: "For massive arms: **Barbell Curls** for biceps and **Skull Crushers** for triceps. Also, heavy Close-Grip Bench Press is a secret weapon for arm thickness."
        },
        abs: {
            keywords: ['abs', 'core', 'stomach', 'six pack', 'obliques'],
            response: "Core stability is key. Perform **Hanging Leg Raises**, **Weighted Planks**, and **Russian Twists**. abs are made in the kitchen, but built in the gym!"
        }
    },
    nutrition: {
        keywords: ['eat', 'diet', 'protein', 'carbs', 'macros', 'supplement', 'creative', 'food', 'nutrition'],
        response: "At Pearlsburg, we say nutrition is 70% of the battle. Aim for **1.8g - 2.2g of protein per kg of body weight**. Fuel your workouts with complex carbs like oats and sweet potatoes!"
    },
    recovery: {
        keywords: ['sleep', 'rest', 'sore', 'pain', 'recover', 'stretch', 'injury', 'massage'],
        response: "Recovery is where growth happens! Get **7-9 hours of sleep** and don't skip your rest days. If you're sore, try some light foam rolling or active recovery like a walk."
    }
  };

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = days[new Date().getDay()];

    // Check Goals
    for (let key in trainerKnowledge.goals) {
        if (trainerKnowledge.goals[key].keywords.some(word => lowerInput.includes(word))) {
            return trainerKnowledge.goals[key].response;
        }
    }

    // Check Muscle Groups
    for (let key in trainerKnowledge.muscleGroups) {
        if (trainerKnowledge.muscleGroups[key].keywords.some(word => lowerInput.includes(word))) {
            return trainerKnowledge.muscleGroups[key].response;
        }
    }

    // Check Nutrition & Recovery
    if (trainerKnowledge.nutrition.keywords.some(word => lowerInput.includes(word))) return trainerKnowledge.nutrition.response;
    if (trainerKnowledge.recovery.keywords.some(word => lowerInput.includes(word))) return trainerKnowledge.recovery.response;

    // Interactive Gym Features
    if (lowerInput.includes('today') || lowerInput.includes('program') || lowerInput.includes('workout')) {
        const prog = scheduleDB[today];
        return `Today at **Pearlsburg Gym** is **${today}**.\n💪 **Men:** ${prog.m}\n🧘‍♀️ **Women:** ${prog.f}\n\nShall we get started with a specific muscle group today?`;
    }

    if (lowerInput.includes('who') || lowerInput.includes('name') || lowerInput.includes('you')) return "I am the **Pearlsburg AI Coach**, your 24/7 personal trainer! I can help you with workouts, nutrition, and gym schedules.";

    for (let day of days) {
        if (lowerInput.includes(day.toLowerCase())) {
            const prog = scheduleDB[today];
            return `On **${day}** the Pearlsburg schedule is:\n💪 Men: ${prog.m}\n🧘‍♀️ Women: ${prog.f}`;
        }
    }

    if (lowerInput.includes('membership') || lowerInput.includes('join') || lowerInput.includes('price')) return "Join the elite at Pearlsburg Gym! Membership starts at just $29/mo. Check our **Membership** page for details.";
    if (lowerInput.includes('coach') || lowerInput.includes('personal trainer')) return "Our world-class coaches are ready to push you. Visit the **Coaches** page to book a session!";
    if (lowerInput.includes('location') || lowerInput.includes('where') || lowerInput.includes('address')) return "Pearlsburg Gym is located in the heart of the city. Check the **Contact** page for our exact map!";

    const fallbacks = [
        "That's a great question! Give me a specific fitness goal like 'lose weight' or 'build muscle' so I can help.",
        "I'm locked in and ready! Which part of your body are we training today?",
        "Pearlsburg is all about evolution. Tell me what results you're looking for.",
        "I'm your AI Coach. Ask me about exercises, nutrition tips, or our gym schedule!",
        "Every rep brings you closer to your goal. How can I assist your training right now?"
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
