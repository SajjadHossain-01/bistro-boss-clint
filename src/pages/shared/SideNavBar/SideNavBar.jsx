import {
  FaAd,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { TbStarsFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import './sideNav.css'


const SideNavBar = () => {
  return (
    <div className="w-64 min-h-screen bg-[#D1A054]">
      <a className="pt-12 pb-4 menu px-7  font-Cinzel font-extrabold text-start text-2xl flex flex-col">
        BISTRO BOSS
        <span className="text-xl font-extralight -mt-3">
          R e s t a u r a n t
        </span>
      </a>

      <ul className="menu p-4 font-Cinzel font-medium ">
        <li>
          <NavLink to="/dashboard/userHome">
            <FaHome></FaHome>
            User Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/reservation">
            <FaCalendar></FaCalendar>
            Reservation
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/reservation">
            <FaWallet></FaWallet>
            payment history
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/cart">
            <FaShoppingCart></FaShoppingCart>
            My Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/review">
          <TbStarsFilled />
            Add a Review
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/bookings">
            <FaList></FaList>
            My Bookings
          </NavLink>
        </li>
        <div className="divider"></div>
        <li>
          <NavLink to="/">
            <FaHome></FaHome>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu">
            <FaSearch></FaSearch>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/order/salad">
            <FaShop></FaShop>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/order/contact">
            <FaEnvelope></FaEnvelope>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNavBar;
