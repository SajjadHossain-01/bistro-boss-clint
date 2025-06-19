import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const FoodCart = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      //send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //   send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-gray-100 rounded-none  overflow-hidden shadow-sm  ">
      <figure className="h-48 overflow-hidden">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </figure>
      <p className=" absolute right-0 bg-black px-6 py-2.5 mr-5 mt-4 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col">
        <h2 className="card-title justify-center text-2xl font-semibold">
          {name}
        </h2>
        <p className="text-sm text-gray-600 overflow-y-scroll max-h-10 scrollbar-hide">
          {recipe}
        </p>
        <div className="card-actions flex-1 justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="cursor-pointer hover:bg-[#111827] py-5 btn-outline text-2xl font-semibold shadow px-8 rounded-xl border-0 border-b-3 text-[#BB8506] "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
