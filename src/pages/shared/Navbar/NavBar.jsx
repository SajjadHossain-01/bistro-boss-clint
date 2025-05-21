import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { GiShoppingCart } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/Authprovider";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const location = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const userPhoto = user?.photoURL;
  const [cart]=useCart();
  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">CONTACT us</Link>
      </li>
      <li>
        <Link to="/dashboard/cart">DASHBOARD</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad" className="flex items-center gap-2">
          Our Shop
          <Link to={'/dashboard/cart'} className="relative inline-flex">
            <GiShoppingCart className="text-3xl bg-green-700 rounded-full p-1 text-white" />
            <div className="absolute -bottom-1 -right-1 bg-red-600 text-[#15151580] text-md  font-extrabold px-0.5 flex items-center justify-center rounded-full">
              {cart.length}
            </div>
          </Link>
        </Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut();
    location("/");
  };
  return (
    <div>
      <div className="navbar fixed z-10 max-w-screen-2xl py-8 px-14 mx-auto bg-[#15151580] text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black
                             rounded-box z-1 mt-3 w-52 p-2 shadow font-Inter"
            >
              {navOption}
            </ul>
          </div>
          <Link to={'/'} className="font-extrabold  font-Cinzel text-2xl flex flex-col">
            BISTRO BOSS
            <span className="text-xl font-extralight -mt-3">
              R e s t a u r a n t
            </span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal font-Inter font-semibold items-center uppercase px-1">
            {navOption}
          </ul>
          <div className="flex items-center">
            {user ? (
              <button
                className="menu font-Inter font-semibold uppercase cursor-pointer"
                onClick={handleLogOut}
              >
                sign out
              </button>
            ) : (
              <Link
                to={"/login"}
                className="menu font-Inter font-semibold uppercase"
              >
                sign in
              </Link>
            )}
            {user ? (
            <Link to={'/dashboard/userHome'}><img className="rounded-full w-8 h-8" src={userPhoto} alt="" /></Link>
            ) : (
              <CgProfile className="text-2xl" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
