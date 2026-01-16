const SectionHeader = ({ title, subtitle, center = true, decoration = "pill" }) => {
  return (
    <div className={`${center ? 'text-center' : ''} mb-12`}>
        {decoration === "underline_text" ? (
            <h2 className={`text-2xl sm:text-4xl font-semibold font-[Poppins] after:content-[''] after:block after:w-13 after:h-1 after:bg-orange-500 after:rounded-full ${center ? 'after:mx-auto' : ''} after:mt-4`}>
                {title}
            </h2>
        ) : (
            <>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                {decoration === "pill" && <div className={`w-20 h-1 bg-orange-500 rounded-full ${center ? 'mx-auto' : ''}`}></div>}
            </>
        )}
        
        {subtitle && <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
