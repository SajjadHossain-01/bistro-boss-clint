
import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCatagory = ({ items, title, img }) => {

    return (
        <div>
            {title && <Cover
                img={img}
                title={title}
            ></Cover>}
            <div className="grid md:grid-cols-2 gap-8 py-6">
                {items.map(item => <MenuItem item={item}></MenuItem>)}
            </div>
            <div className="flex justify-center my-4">
            <Link to={`/order/${title}`}><button className="py-5 text-xl font-semibold shadow px-8 rounded-xl border-0 border-b-2 uppercase text-[#BB8506] ">order your favourite food</button></Link>
            </div>
        </div>
    );
};

export default MenuCatagory;