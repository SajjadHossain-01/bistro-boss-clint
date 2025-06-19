import { Outlet } from "react-router-dom";
import SideNavBar from "../pages/shared/SideNavBar/SideNavBar";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
 const {loading}=useAuth()
 const [ , isAdminLoading] = useAdmin();
 const nosideBar = loading||isAdminLoading;
 console.log(nosideBar, loading, isAdminLoading) 
 return (
    <div className="flex">
      <div>
        {nosideBar||<SideNavBar></SideNavBar>}
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
