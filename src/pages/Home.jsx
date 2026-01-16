import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import Leaderboard from '../components/Leaderboard';
import { ArrowRight, Star, Users, Dumbbell, Activity } from 'lucide-react';

const Home = () => {
  return (
    <div className="font-[Poppins]">
      {/* Hero Section */}
      <section id="hero-section" className="py-24 md:py-32 relative" style={{
        background: "url('assets/hero_standard_gym.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center mt-12 px-6">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Forge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Future Self</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            Experience the next evolution of fitness. <br className="hidden sm:block" />
            AI-driven training, state-of-the-art facility, and a community that pushes limits.
          </p>
          <div className="mt-8">
             <Link
              to="/membership"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 hover:shadow-orange-500/50 hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Your Era in 2026 <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About/Welcome Section */}
      <section className="p-6 sm:p-10 lg:p-12 space-y-12 max-w-7xl mx-auto">
        <SectionHeader title="Welcome" center={true} decoration="underline_text" />
        <p className="text-center text-gray-600 md:w-[80%] md:mx-auto text-lg sm:text-xl mt-4">
            At Pearlsburg, we believe in empowering individuals to achieve their fitness goals. 
            Our state-of-the-art facilities and expert trainers are here to support you every step of the way.
        </p>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                    <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Coaches</h3>
                <p className="text-gray-600">Certified professionals to guide your journey.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center transform md:-translate-y-4">
                 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600">
                    <Activity size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">AI Personal Training</h3>
                <p className="text-gray-600">Smart tracking and personalized program adjustments.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center">
                 <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                    <Dumbbell size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Premium Equipment</h3>
                <p className="text-gray-600">The best machinery for the best results.</p>
            </div>
        </div>
      </section>

      {/* 3D Tour / Facility */}
      <section className="bg-gray-900 py-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full filter blur-[150px] opacity-20"></div>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                  <h2 className="text-3xl sm:text-5xl font-bold mb-6">Experience the Facility <br/><span className="text-orange-500">In 3D</span></h2>
                  <p className="text-gray-400 text-lg mb-8">
                      Explore our zones before you even step foot inside. From the heavy lifting arena to the zen yoga studio, see where your transformation happens.
                  </p>
                  <button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-colors">
                      Take Virtual Tour
                  </button>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 group">
                  <img src="/assets/gym-image-2.jpeg" alt="Gym Facility" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Social Proof & Leaderboard */}
      <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Testimonials */}
              <div>
                  <SectionHeader title="Member Stories" decoration="pill" center={false} />
                  <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                          <div className="flex text-yellow-500 mb-4 gap-1">
                              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                          </div>
                          <p className="text-gray-600 italic mb-4">"The atmosphere here is unmatched. I've hit PRs I never thought possible thanks to the supportive community."</p>
                          <div className="flex items-center gap-4">
                              <img src="/assets/Testimonial-A.jpg" alt="Member" className="w-12 h-12 rounded-full object-cover" />
                              <div>
                                  <h4 className="font-bold text-gray-900">David K.</h4>
                                  <p className="text-sm text-gray-500">Member since 2023</p>
                              </div>
                          </div>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                           <div className="flex text-yellow-500 mb-4 gap-1">
                              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                          </div>
                          <p className="text-gray-600 italic mb-4">"Cleanest gym I've ever been to. The AI coaching tips on the app are a game changer."</p>
                          <div className="flex items-center gap-4">
                              <img src="/assets/Testimonial- B.jpg" alt="Member" className="w-12 h-12 rounded-full object-cover" />
                              <div>
                                  <h4 className="font-bold text-gray-900">Sarah M.</h4>
                                  <p className="text-sm text-gray-500">Member since 2024</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Leaderboard */}
              <div>
                  <Leaderboard />
              </div>

          </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-orange-600 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">Ready to Evolve?</h2>
                <p className="text-white/90 text-xl mb-10">Join the movement today and get your first week absolutely free.</p>
                <Link to="/membership" className="bg-white text-orange-600 font-bold py-4 px-10 rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all inline-block">
                    Claim Free Pass
                </Link>
            </div>
      </section>

    </div>
  );
};

export default Home;
