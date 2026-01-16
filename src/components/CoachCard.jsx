const CoachCard = ({ name, specialty, description, rate, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
      <figure className="relative h-68 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          src={image}
          alt={name}
        />
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
             <figcaption className="text-white text-xl font-semibold">
                {name} <span className="text-orange-400 text-sm block">{specialty}</span>
            </figcaption>
        </div>
      </figure>
      <div className="p-6">
        <p className="text-gray-600 text-center min-h-[3rem]">{description}</p>
        <div className="mt-4 border-t border-gray-100 pt-4">
            <p className="text-center text-2xl font-bold text-red-400">
                ${rate}<span className="text-gray-400 text-sm font-normal">/hour</span>
            </p>
            <div className="flex justify-center mt-4">
            <button className="bg-red-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-700 transition-colors shadow-md hover:shadow-lg transform active:scale-95">
                Book Now
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CoachCard;
