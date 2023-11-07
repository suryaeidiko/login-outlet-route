import { Navigate, Outlet } from "react-router-dom";

import "./user.css";

const User = () => {

  return (
    <>
  <p>Loged in successful</p>
  {/* authenticate('Surya@gmail.com','surya123') ? <Outlet /> : <Navigate to={"/"} /> */}
  <Outlet />
  </>
  )
};

export default User;
