import SectionHeader from '../components/SectionHeader';
import Accordion from '../components/Accordion';

const FAQ = () => {
    const faqs = [
        {
            title: "What are your opening hours?",
            content: "We are open Monday to Friday from 5:00 AM to 11:00 PM, and on weekends from 7:00 AM to 9:00 PM."
        },
        {
            title: "Do you offer personal training?",
            content: "Yes, we have a team of certified personal trainers specializing in various disciplines like Bodybuilding, CrossFit, Yoga, and General Fitness. You can book sessions through our Coaches page."
        },
        {
            title: "Is there a cancellation fee?",
            content: "We require a 30-day notice for cancellation. There are no fees if you cancel within the first 7 days of signing up."
        },
        {
            title: "Can I bring a guest?",
            content: "Premium members can bring one guest per visit for free. Standard members can bring a guest for a $15 day pass fee."
        },
        {
            title: "Do you have showers and lockers?",
            content: "Yes, we have fully equipped locker rooms with showers, saunas, and secure lockers. Please bring your own lock or rent one from the front desk."
        }
    ];

  return (
    <>
      <header className="py-24 relative" style={{ background: "url('/assets/hero_standard_gym.png')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
         <div className="absolute inset-0 bg-black/70"></div>
         <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl font-bold text-white mb-4">Frequently Asked <span className="text-orange-500">Questions</span></h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">Find answers to common questions about our gym and memberships.</p>
         </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
          <SectionHeader title="Common Inquiries" subtitle="Everything you need to know." />
          <div className="mt-12">
              {faqs.map((faq, index) => (
                  <Accordion key={index} title={faq.title} content={faq.content} />
              ))}
          </div>
      </main>
    </>
  );
};

export default FAQ;
