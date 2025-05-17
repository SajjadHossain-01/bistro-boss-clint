
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/catagory';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import CallUs from '../CallUs/CallUs';
import BistroBoss from '../BistroBoss/BistroBoss';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle("Home")
    return (
        <div>
         
            <Banner></Banner>
            <Catagory></Catagory>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;