import { FaWallet } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
  const { user } = useAuth();
console.log(user)
  return (
    <div className="ml-6">
      <h1 className="font-Cinzel text-2xl my-9">Hi, Welcome Back</h1>
      <div className="grid grid-cols-3 gap-3">
        <div className=" justify-center py-8 rounded-xl bg-linear-to-r from-[#BB34F5] to-[#FCDBFF] flex items-center">
          <FaWallet className="text-white text-4xl mr-5"></FaWallet>
          <div>
            <h1 className="text-white text-3xl font-Inter font-bold">205</h1>
            <p className="text-white font-Inter font-extralight text-xl">
              Menu
            </p>
          </div>
        </div>
        <div className="justify-center rounded-xl bg-linear-to-r from-[#D3A256] to-[#FDE8C0] flex items-center">
          <FaWallet className="text-white text-4xl mr-5"></FaWallet>
          <div>
            <h1 className="text-white text-3xl font-Inter font-bold">205</h1>
            <p className="text-white font-Inter font-extralight text-xl">
              Menu
            </p>
          </div>
        </div>
        <div className="justify-center rounded-xl bg-linear-to-r from-[#FE4880] to-[#FECDE9] flex items-center">
          <FaWallet className="text-white text-4xl mr-5"></FaWallet>
          <div>
            <h1 className="text-white text-3xl font-Inter font-bold">205</h1>
            <p className="text-white font-Inter font-extralight text-xl">
              Menu
            </p>
          </div>
        </div>
      </div>
      <div className="flex min-h-96 mt-8">
        <div className="bg-[#FFEDD5] flex gap-5 flex-col justify-center items-center flex-1/2">
          <img className="w-48 h-48 rounded-full" src={user?.photoURL} alt="" />
          <h1 className="font-Cinzel text-3xl ">{user?.displayName}</h1>
        </div>
        <div className="flex-1/2 bg-[#FEF9C3] border-l-2 border-amber-700"></div>
      </div>
    </div>
  );
};

export default UserHome;
