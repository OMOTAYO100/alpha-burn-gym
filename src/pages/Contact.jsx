import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Contact = () => {
  return (
    <>
      <header className="py-24 relative" style={{ background: "url('/assets/hero_standard_gym.png')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
         <div className="absolute inset-0 bg-black/70"></div>
         <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl font-bold text-white mb-4">Contact <span className="text-orange-500">Us</span></h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">We'd love to hear from you. Get in touch with us.</p>
         </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                  <SectionHeader title="Get In Touch" center={false} decoration="underline_text" />
                  <p className="text-gray-600">Have questions about membership, personal training, or our facility? Reach out to us directly or visit us at Pearlsburg Gym.</p>
                  
                  <div className="space-y-6">
                      <div className="flex items-start gap-4">
                          <div className="bg-orange-100 p-3 rounded-full text-orange-500"><MapPin size={24} /></div>
                          <div>
                              <h4 className="font-bold text-gray-900">Our Location</h4>
                              <p className="text-gray-600">123 Fitness Blvd, Pearlsburg, VA 24134</p>
                          </div>
                      </div>
                      <div className="flex items-start gap-4">
                          <div className="bg-orange-100 p-3 rounded-full text-orange-500"><Phone size={24} /></div>
                          <div>
                              <h4 className="font-bold text-gray-900">Phone</h4>
                              <p className="text-gray-600">(555) 123-4567</p>
                          </div>
                      </div>
                      <div className="flex items-start gap-4">
                          <div className="bg-orange-100 p-3 rounded-full text-orange-500"><Mail size={24} /></div>
                          <div>
                              <h4 className="font-bold text-gray-900">Email</h4>
                              <p className="text-gray-600">info@pearlsburggym.com</p>
                          </div>
                      </div>
                       <div className="flex items-start gap-4">
                          <div className="bg-orange-100 p-3 rounded-full text-orange-500"><Clock size={24} /></div>
                          <div>
                              <h4 className="font-bold text-gray-900">Opening Hours</h4>
                              <p className="text-gray-600">Mon-Fri: 5am - 11pm</p>
                              <p className="text-gray-600">Sat-Sun: 7am - 9pm</p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                              <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="John" />
                          </div>
                          <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                              <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Doe" />
                          </div>
                      </div>
                      <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                          <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="john@example.com" />
                      </div>
                      <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                          <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500">
                              <option>Membership Inquiry</option>
                              <option>Personal Training</option>
                              <option>Feedback</option>
                              <option>Other</option>
                          </select>
                      </div>
                      <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                          <textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="How can we help you?"></textarea>
                      </div>
                      <button className="w-full bg-orange-500 text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
                          Send Message
                      </button>
                  </form>
              </div>
          </div>
      </main>
    </>
  );
};

export default Contact;
