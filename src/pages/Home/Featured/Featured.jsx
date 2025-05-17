import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import features from '../../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
    return (
        <div className="featured-item  bg-fixed text-white ">
            <SectionTitle
                heading="from our menu"
                subheading="check it out"
            ></SectionTitle>
            <div className="md:flex justify-center  items-center pb-20 pt-12 px-36">
                <div>
                    <img src={features} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>aug 20, 2029 </p>
                    <p className="uppercase"> where i get sum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quod ullam unde asperiores at! Recusandae ipsam rerum molestiae sint odio architecto, eius blanditiis minus cumque doloremque, nulla magni sunt reprehenderit eaque mollitia tenetur? Facere, similique commodi. Laboriosam animi blanditiis voluptates. Id placeat deserunt laborum nemo corrupti doloremque vero et accusantium.</p>
                    <button className="btn btn-outline border-0 border-b-4 ">Order Now </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;