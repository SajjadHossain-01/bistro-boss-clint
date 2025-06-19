import { Link } from "react-router-dom";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import useMenu from "../../../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu,loading,refetch] = useMenu();
const axiosSecure=useAxiosSecure()
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
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
        <h1 className="font-Cinzel px-12 py-5  text-3xl font-bold ">
          total item:{menu.length}
        </h1>
        <div className="overflow-x-auto mx-12 rounded-t-2xl ">
          <table className="table mb-12  ">
            {/* head */}
            <thead className="bg-[#D1A054] text-white font-Inter font-light ">
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>update</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
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
                    {/* <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-ghost btn-lg bg-orange-500">
                        <FaEdit
                          className="text-white 
                                        "
                        ></FaEdit>
                      </button>
                    </Link> */}
                    <Link to={`/dashboard/UpdateItems/${item._id}`}>
                      <button className="btn btn-ghost btn-md bg-orange-500">
                        <FaEdit
                          className="text-white 
                                        "
                        ></FaEdit>
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
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

export default ManageItems;
