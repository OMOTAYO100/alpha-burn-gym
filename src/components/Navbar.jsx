import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [occupancy, setOccupancy] = useState(42);

  // Toggle Menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Live Occupancy Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setOccupancy((prev) => {
        let change = Math.floor(Math.random() * 7) - 3;
        let newVal = prev + change;
        if (newVal < 10) newVal = 10;
        if (newVal > 95) newVal = 95;
        return newVal;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getOccupancyColor = () => {
    if (occupancy > 80) return 'bg-red-500';
    if (occupancy > 50) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Membership', path: '/membership' },
    { name: 'Fuel Bar', path: '/fuel', icon: <i className="fa-solid fa-leaf text-green-600 mr-1"></i> },
    { name: 'Coaches', path: '/coaches' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Competitions', path: '/competitions', special: true },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="flex items-center justify-between p-6 sm:p-10 lg:p-12 bg-gray-900 text-white relative z-50">
      <div className="flex items-center space-x-2">
        <div>
          <p className="relative left-3 top-2">🔶</p>
          <div>
            <p>🔹🔹</p>
          </div>
        </div>
        <Link to="/" className="text-lg sm:font-semibold">
          Pearlsburg <sup className="text-sm text-orange-400">Gym</sup>
        </Link>
        {/* Live Occupancy Badge */}
        <div className="hidden md:flex items-center gap-2 bg-gray-800/80 px-3 py-1 rounded-full border border-gray-700 ml-4 animate-pulse">
            <span className={`w-2 h-2 rounded-full ${getOccupancyColor()}`}></span>
            <span className="text-xs text-white font-mono">Live: {occupancy}% Busy</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className={`nav-menu flex flex-col gap-8 fixed top-0 right-0 h-screen w-full sm:w-auto sm:h-auto z-[100] backdrop-blur-lg p-24 sm:p-0 transition-transform duration-300 ease-in-out sm:flex-row sm:static sm:bg-transparent sm:translate-y-0 text-xs ${isOpen ? 'translate-y-0' : '-translate-y-full sm:translate-y-0'}`}>
         
         {/* Close Button for Mobile */}
         <li className="absolute top-6 right-6 sm:hidden">
            <button onClick={toggleMenu} className="text-orange-400">
               <X size={32} />
            </button>
         </li>

         {navLinks.map((link) => (
             <li key={link.name} className={`hover:text-orange-400 font-semibold hover:scale-110 hover:transition-transform hover:duration-400 ${link.special ? 'text-orange-400' : ''}`}>
               <NavLink 
                 to={link.path} 
                 className={({ isActive }) => isActive ? "text-orange-500" : ""}
                 onClick={() => setIsOpen(false)}
               >
                 {link.icon} {link.name}
               </NavLink>
             </li>
         ))}
      </ul>

      {/* Mobile Toggle Button */}
      <div className="sm:hidden z-[110] p-2 cursor-pointer" onClick={toggleMenu}>
        <span>
            {isOpen ? <X className="text-orange-400" size={32}/> : <ArrowLeft className="text-orange-400" size={32} style={{ transform: 'rotate(180deg)' }} />} 

        </span>
      </div>
    </nav>
  );
};

export default Navbar;
