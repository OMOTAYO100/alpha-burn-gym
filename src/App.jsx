import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Competitions from './pages/Competitions';
import Coaches from './pages/Coaches';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Membership from './pages/Membership';
import Fuel from './pages/Fuel';
import Schedule from './pages/Schedule';

// Placeholders for remaining pages if not yet created
const PlaceholderFuel = () => <div className="p-20 text-center text-2xl">Fuel Bar Coming Soon</div>;
const PlaceholderSchedule = () => <div className="p-20 text-center text-2xl">Schedule Coming Soon</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="membership" element={<Membership />} />
          <Route path="competitions" element={<Competitions />} />
          <Route path="coaches" element={<Coaches />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="fuel" element={<Fuel />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
