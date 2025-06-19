import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import LoadingPage from "../pages/LoadingPage/LoadingPage";

const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const { user, loading } = useAuth();
  const location =useLocation()
  console.log(isAdminLoading)


  if (isAdminLoading || loading) {
    return <LoadingPage></LoadingPage>
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
