import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, title, discription }) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
       <div
            className="hero h-[700px]">
            <div className="hero-overlay"></div>
            <div className="hero-content mt-28 w-8/12 h-[450px] bg-[#15151599] text-neutral-content text-center">
                <div className="max-w-md ">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5 uppercase">
                 {discription}
                    </p>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default Cover;