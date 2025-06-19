import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { TbStarsFilled } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import "./sideNav.css";
import useAdmin from "../../../hooks/useAdmin";

const SideNavBar = () => {
  const [isAdmin]=useAdmin()
  return (
    <div className="w-64 min-h-screen bg-[#D1A054]">
      <Link to={'/'} className="pt-12 pb-4 menu px-7  font-Cinzel font-extrabold text-start text-2xl flex flex-col">
        BISTRO BOSS
        <span className="text-xl font-extralight -mt-3">
          R e s t a u r a n t
        </span>
      </Link>

      <ul className="menu p-4 font-Cinzel font-medium ">
        {isAdmin ? (
          <>
            <li>
              <NavLink to="/dashboard/adminHome">
                <FaHome></FaHome>
                Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addItems">
                <FaUtensils></FaUtensils>
                Add Items
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageItems">
                <FaList></FaList>
                Manage Items
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/magnageBookings">
                <FaBook></FaBook>
                Manage Bookings
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allusers">
                <FaUsers></FaUsers>
                All Users
              </NavLink>
            </li>
          </>
        ) : (
          <>
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
              <NavLink to="/dashboard/paymentHistory">
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
              <NavLink to="/dashboard/addreview">
                <TbStarsFilled />
                Add a Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/userbookin">
                <FaList></FaList>
                My Bookings
              </NavLink>
            </li>
          </>
        )}
        {/* shared navlink */}
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
          <NavLink to="/contuctus">
            <FaEnvelope></FaEnvelope>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNavBar;
