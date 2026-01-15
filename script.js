document.addEventListener('DOMContentLoaded', () => {
    /* -----------------------------------------------------
       Global Navigation & Slider
       ----------------------------------------------------- */
    const navBar = document.querySelector('.nav-menu');
    const leftArrow = document.querySelector('.fa-arrow-left');

    if (leftArrow && navBar) {
        leftArrow.addEventListener('click', () => {
            navBar.classList.toggle('scale-y-100');
            leftArrow.classList.toggle('rotate-180');
            leftArrow.style.color = leftArrow.classList.contains('rotate-180') ? "#1f2937" : "#fb923c";
        });
    }

    const images = [
        "url('assets/hero_standard_gym.png')",
        "url('assets/hero_bg_2026.png')",
        "url('assets/hero_cardio_2026.png')",
        "url('assets/hero_weights_2026.png')",
        "url('assets/hero_yoga_2026.png')",
    ];



    /* -----------------------------------------------------
       2026 Feature: AI Coach Widget
       ----------------------------------------------------- */
    const toggleChatBtn = document.getElementById('toggle-chat');
    const closeChatBtn = document.getElementById('close-chat');
    const chatWindow = document.getElementById('chat-window');
    const sendBtn = document.getElementById('send-btn');
    const chatInput = document.querySelector('#chat-window input');
    const chatMessages = document.getElementById('chat-messages');

    if (toggleChatBtn && chatWindow && closeChatBtn) {
        // Toggle Chat
        toggleChatBtn.addEventListener('click', () => {
             // Remove hidden class manually to be sure
            if (chatWindow.classList.contains('hidden')) {
                chatWindow.classList.remove('hidden');
            } else {
                chatWindow.classList.add('hidden');
            }
        });

        // Close Chat
        closeChatBtn.addEventListener('click', () => {
            chatWindow.classList.add('hidden');
        });

        // Send Message Logic
        if (sendBtn && chatInput && chatMessages) {
            
            // Knowledge Base
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

                // 1. Check for "Today's Program"
                if (lowerInput.includes('today') || lowerInput.includes('program') || lowerInput.includes('workout')) {
                    const prog = scheduleDB[today];
                    return `Today is <b>${today}</b>.<br>💪 Men: ${prog.m}<br>🧘‍♀️ Women: ${prog.f}`;
                }

                // 2. Check for specific days
                for (let day of days) {
                    if (lowerInput.includes(day.toLowerCase())) {
                         const prog = scheduleDB[day];
                         return `On <b>${day}</b> we have:<br>💪 Men: ${prog.m}<br>🧘‍♀️ Women: ${prog.f}`;
                    }
                }

                // 3. Check for specific keywords
                if (lowerInput.includes('yoga')) return "We have Yoga & Recovery sessions every <b>Saturday</b>.";
                if (lowerInput.includes('hiit')) return "HIIT sessions for women are on <b>Tuesdays</b>.";
                if (lowerInput.includes('membership') || lowerInput.includes('cost') || lowerInput.includes('price')) return "We offer various membership plans starting from $29/mo. Check the <a href='membership.html' class='text-orange-500 underline'>Membership page</a>!";
                if (lowerInput.includes('coach') || lowerInput.includes('trainer')) return "Our expert coaches are here to help. You can view their profiles on the Coaches page.";
                if (lowerInput.includes('smoothie') || lowerInput.includes('fuel')) return "You can pre-order smoothies at our <a href='fuel.html' class='text-orange-500 underline'>Fuel Bar</a>.";

                // 4. Default Fallback
                const fallbacks = [
                    "That's a great goal! Consistency is key.",
                    "Don't forget to hydrate! Aim for 3-4 liters a day.",
                    "I can help you check the schedule or membership prices.",
                    "Rest is just as important as training. Have you slept 8 hours?",
                    "Keep pushing! You're doing great."
                ];
                return fallbacks[Math.floor(Math.random() * fallbacks.length)];
            };

            const sendMessage = () => {
                const text = chatInput.value.trim();
                if (!text) return;

                // User Msg
                appendMessage(text, 'user');
                chatInput.value = '';

                // Simulate AI typing
                setTimeout(() => {
                    const loadingId = appendMessage('...', 'bot', true);
                    
                    // Get Smart Response
                    const response = getBotResponse(text);

                    setTimeout(() => {
                        removeMessage(loadingId);
                        appendMessage(response, 'bot');
                    }, 1000 + Math.random() * 500); // Variable delay
                }, 500);
            };

            sendBtn.addEventListener('click', sendMessage);
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') sendMessage();
            });

            function appendMessage(text, sender, isLoading = false) {
                const div = document.createElement('div');
                div.className = `flex items-start gap-2 ${sender === 'user' ? 'flex-row-reverse' : ''} mb-2`;
                const id = Date.now() + Math.random();
                div.id = id;

                const icon = sender === 'bot'
                    ? `<div class="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center"><i class="fa-solid fa-robot text-orange-500 text-xs"></i></div>`
                    : `<div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"><i class="fa-solid fa-user text-blue-500 text-xs"></i></div>`;

                const bgClass = sender === 'bot' ? 'bg-white text-gray-700 border border-gray-100' : 'bg-orange-500 text-white';

                div.innerHTML = `
                    ${icon}
                    <div class="${bgClass} p-3 rounded-lg ${sender === 'bot' ? 'rounded-tl-none' : 'rounded-tr-none'} shadow-sm text-sm max-w-[80%]">
                        ${text}
                    </div>
                `;

                chatMessages.appendChild(div);
                chatMessages.scrollTop = chatMessages.scrollHeight;
                return id;
            }

            function removeMessage(id) {
                const el = document.getElementById(id);
                if (el) el.remove();
            }
        }
    }


    /* -----------------------------------------------------
       2026 Feature: Live Occupancy Counter
       ----------------------------------------------------- */
    const occupancyEl = document.getElementById('live-occupancy');

    if (occupancyEl) {
        setInterval(() => {
            const currentText = occupancyEl.innerText;
            let currentVal = parseInt(currentText.match(/\d+/)[0]) || 42;

            let change = Math.floor(Math.random() * 7) - 3;
            let newVal = currentVal + change;

            if (newVal < 10) newVal = 10;
            if (newVal > 95) newVal = 95;

            occupancyEl.innerText = `Live: ${newVal}% Busy`;

            const dot = occupancyEl.previousElementSibling;
            if (dot) {
                dot.className = "w-2 h-2 rounded-full " + (
                    newVal > 80 ? 'bg-red-500' :
                    newVal > 50 ? 'bg-yellow-500' :
                    'bg-green-500'
                );
            }
        }, 5000);
    }


    /* -----------------------------------------------------
       2026 Feature: 3D Tour Interaction
       ----------------------------------------------------- */
    // Use a unique variable name to avoid global collisions
    const threeDTourButton = document.getElementById('enter-3d-btn');
    if (threeDTourButton) {
        threeDTourButton.addEventListener('click', (e) => {
            e.preventDefault(); 
            // Alert for concept
            alert("Initializing Neural Link to Gym Mainframe... \n\n(This is a concept demo. In the full version, this opens a WebGL interactive tour!)");
        });
    }
});


