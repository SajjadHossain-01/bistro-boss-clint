import { useEffect, useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import FoodCart from '../../../component/FoodCart/FoodCart';
import useTitle from '../../../hooks/useTitle';
import { useParams } from 'react-router-dom';
import OrderTap from '../../../component/FoodCart/OrderTap';
import LoadingPage from '../../LoadingPage/LoadingPage';

const Order = () => {
    useTitle("Our Shop")
    const route = useParams().id
    const [tabIndex, setTabIndex] = useState('');
    const [menu,loading] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const offereds = menu.filter(item => item.category === 'offered');
    const drinks = menu.filter(item => item.category === 'drinks');

    useEffect(() => {
        if (route === "salad") {
            setTabIndex("salad")
        }
        if (route === "soup") {
            setTabIndex("soup")
        }
        if (route === "pizza") {
            setTabIndex("pizza")
        }
        if (route === "dessert") {
            setTabIndex("dessert")
        }
        if (route === "offered") {
            setTabIndex("offered")
        }
    }, [])

    if(loading){
        return <LoadingPage></LoadingPage>
    }

    return (
        <div >
            <Cover
                img={orderCover}
                title="our shop"
                discription="world you like to try a dish?"
            ></Cover>
            <div role="tablist" className="tabs tabs-border flex py-9 gap-6 justify-center">
                <a role="tab" onClick={() => setTabIndex("salad")} className={`cursor-pointer  text-2xl uppercase ${tabIndex === "salad" && "underline font-bold tab-active text-[#BB8506]"}`}>Salad</a>
                <a role="tab" onClick={() => setTabIndex("pizza")} className={`cursor-pointer text-2xl uppercase ${tabIndex === "pizza" && "underline font-bold tab-active text-[#BB8506]"}`}>pizza</a>
                <a role="tab" onClick={() => setTabIndex("soup")} className={`cursor-pointer text-2xl uppercase ${tabIndex === "soup" && "underline font-bold tab-active text-[#BB8506]"}`}>soup</a>
                <a role="tab" onClick={() => setTabIndex("dessert")} className={`cursor-pointer text-2xl uppercase ${tabIndex === "dessert" && "underline font-bold tab-active text-[#BB8506]"}`}>dessert</a>
                <a role="tab" onClick={() => setTabIndex("drink")} className={`cursor-pointer text-2xl uppercase ${tabIndex === "drink" && "underline font-bold tab-active text-[#BB8506]"}`}>drink</a>
            </div>
            <div className='max-w-8/12 m-auto'>
                {tabIndex === "salad" && <OrderTap item={salads}></OrderTap>}
                {tabIndex === "soup" && <OrderTap item={soups}></OrderTap>}
                {tabIndex === "pizza" && <OrderTap item={pizzas}></OrderTap>}
                {tabIndex === "dessert" && <OrderTap item={desserts}></OrderTap>}
                {tabIndex === "drink" && <OrderTap item={drinks}></OrderTap>}
            </div>

        </div>
    );
};

export default Order;