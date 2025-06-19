
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";



const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section>
            <SectionTitle
                heading="FROM OUR MENU"
                subheading="Check it out"
            ></SectionTitle>
            <div className="grid md:grid-cols-2  mt-10 gap-4 lg:max-w-8/12 w-11/12 m-auto">
                {popular.map((item, i) => <MenuItem key={i} item={item}></MenuItem>)}
            </div>
            <div className="flex justify-center">
                <Link to="/order/salad"><button
                    className="py-3 my-10 font-semibold shadow px-6 rounded-xl border-0 border-b-2 uppercase text-black ">
                    view full menu
                </button></Link>
            </div>
        </section>


    );
};

export default PopularMenu;