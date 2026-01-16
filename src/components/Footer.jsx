import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 p-6 mt-auto">
      <div className="flex justify-end items-center flex-col sm:flex-row space-y-6 sm:space-y-0">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div>
              <p className="relative left-3 top-2">🔶</p>
              <div>
                <p>🔹🔹</p>
              </div>
            </div>
            <Link className="text-xl sm:font-semibold text-white" to="/">
              Pearlsburg <sup className="text-sm text-orange-400">Gym</sup>
            </Link>
          </div>

          <div className="flex space-x-4 justify-start mt-4">
            {['facebook-f', 'twitter', 'google-plus-g', 'instagram'].map(platform => (
                <a
                  key={platform}
                  href="#"
                  className="flex justify-center items-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <i className={`fa-brands fa-${platform} text-xl text-white`}></i>
                </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-4">
            © 2026 Pearlsburg. All rights reserved.
          </p>
        </div>

        {/* Footer Gallery */}
        <div className="grid space-y-8 sm:grid-cols-2 items-center justify-self-end">
          <div className="grid grid-cols-2 gap-[4px]">
            <img className="w-20 h-20 rounded-lg object-cover" src="/assets/farmer-walks-2141229_1280.jpg" alt="Gallery" />
            <img className="w-20 h-20 rounded-lg object-cover" src="/assets/gym-image-2.jpeg" alt="Gallery" />
            <img className="w-20 h-20 rounded-lg object-cover" src="/assets/gym-image-5.jpeg" alt="Gallery" />
            <img className="w-20 h-20 rounded-lg object-cover" src="/assets/gym-image-6.jpeg" alt="Gallery" />
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-4xl font-semibold text-white text-center">
              Newsletter
            </h3>
            <p className="text-gray-600 text-center">
              Keep up with our always upcoming product features and
              technologies. Enter your e-mail and subscribe to our newsletter.
            </p>
            <form className="mt-4 text-center" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg p-2 placeholder:text-gray-600 text-white bg-gray-800 w-full sm:w-auto"
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 sm:ml-2 bg-orange-500 text-white rounded-lg py-2 px-4 hover:bg-orange-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
