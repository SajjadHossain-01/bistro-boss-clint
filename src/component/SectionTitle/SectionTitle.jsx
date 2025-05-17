

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="text-center mt-12 mb-16">
            <h2 className="text-xl italic text-yellow-600 mb-2">---{subheading}---</h2>
            <h1 className="text-4xl uppercase border-y-2 border-gray-300 w-4/12 m-auto py-2">{heading}</h1>
        </div>
    );
};

export default SectionTitle;