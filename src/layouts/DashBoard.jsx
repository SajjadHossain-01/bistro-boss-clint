
import {  Outlet } from "react-router-dom";
import SideNavBar from "../pages/shared/SideNavBar/SideNavBar";

const DashBoard = () => {
  return (
    <div className="flex">
      <div>
        <SideNavBar></SideNavBar>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
