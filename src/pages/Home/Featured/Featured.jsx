import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import features from '../../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
    return (
        <div className="featured-item  bg-fixed lg:text-white text-black ">
            <SectionTitle
                heading="from our menu"
                subheading="check it out"
            ></SectionTitle>
            <div className="md:flex justify-center  items-center px-5 lg:pb-20 lg:pt-12 lg:px-36">
                <div>
                    <img src={features} alt="" />
                </div>
                <div className="md:ml-10 flex flex-col gap-2 lg:text-start text-center pb-8">
                    <p className="text-2xl uppercase">{new Date().toDateString()}</p>
                    <p className="uppercase text-2xl"> where i get sum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quod ullam unde asperiores at! Recusandae ipsam rerum molestiae sint odio architecto, eius blanditiis minus cumque doloremque, nulla magni sunt reprehenderit eaque mollitia tenetur? Facere, similique commodi. Laboriosam animi blanditiis voluptates. Id placeat deserunt laborum nemo corrupti doloremque vero et accusantium.</p>
                    <div >
                        <button className="btn btn-outline border-0 border-b-4 ">read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;