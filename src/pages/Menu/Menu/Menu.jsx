import Cover from "../../shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import MenuCatagory from "../MenuCatagory/MenuCatagory";
import useMenu from "../../../hooks/useMenu";
import useTitle from "../../../hooks/useTitle";
const Menu = () => {
    useTitle("Our menu")
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')


    return (
        <div>
        {/* main cover part */}
            <Cover
                img={menuImg}
                title="our menu"
            ></Cover>
            <SectionTitle
                heading="today's offer"
                subheading="Don't miss"
            ></SectionTitle>
           {/* offered part */}
            <MenuCatagory
                items={offered}
            ></MenuCatagory>
           {/* dessert part */}
            <MenuCatagory
                items={soup}
                title="soup"
                img={dessertImg}
            ></MenuCatagory>
           {/* dessert part */}
            <MenuCatagory
                items={salad}
                title="salad"
                img={dessertImg}
            ></MenuCatagory>
           {/* dessert part */}
            <MenuCatagory
                items={pizza}
                title="pizza"
                img={dessertImg}
            ></MenuCatagory>
            <MenuCatagory
                items={dessert}
                title="dessert"
                img={dessertImg}
            ></MenuCatagory>
        </div>
    );
};

export default Menu;