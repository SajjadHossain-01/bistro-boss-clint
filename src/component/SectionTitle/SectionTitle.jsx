

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="text-center  lg:mt-12 lg:mb-16 mt-6 mb-8">
            <h2 className="lg:text-xl text-[10px] italic text-yellow-600 mb-2">---{subheading}---</h2>
            <h1 className="lg:text-4xl w-full text-[20px] uppercase border-y-2 border-gray-300 lg:w-4/12 m-auto py-2">{heading}</h1>
        </div>
    );
};

export default SectionTitle;