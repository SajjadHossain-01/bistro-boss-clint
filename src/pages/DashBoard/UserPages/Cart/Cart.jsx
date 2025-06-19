import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const tolatPriceTaka = totalPrice*120;
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const handleBkasPayment = async () => {

    axiosPublic.post('/bkash-checkout',{
      amount:tolatPriceTaka, 
      callbackURL:'https://bistro-boss-server-snowy-one.vercel.app/bkash-callback', 
      orderID:"12345", 
      reference:"12345"
    }).then((response)=>{
      console.log(response)
      window.location.href = response?.data
    })
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading={"WANNA ADD MORE?"}
        subheading={"My Cart"}
      ></SectionTitle>

      <div className="bg-white mx-36 shadow">
        <div className="flex justify-between items-center mb-8 pt-12 font-Cinzel font-semibold mx-12">
          <h2 className="text-2xl">Items: {cart.length}</h2>
          <h2 className="text-2xl">Total Price: {totalPrice}</h2>
          <button
            onClick={handleBkasPayment}
            className="btn bg-[#D1A054] text-white"
          >
            Pay
          </button>
        </div>
        <div className="overflow-x-auto mx-12 rounded-t-2xl ">
          <table className="table mb-12  ">
            {/* head */}
            <thead className="bg-[#D1A054] text-white font-Inter font-light ">
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask  w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-md bg-[#B91C1C]"
                    >
                      <FaTrashAlt className="text-white "></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
