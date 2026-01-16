import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col font-[Poppins]">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default MainLayout;
