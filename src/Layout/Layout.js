import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Layout({ isLoggedIn }) {
  const navigate = useNavigate;
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <div>loading..</div>;
  }

  return (
    <>
      <Outlet />
      {isLoggedIn && <Navbar />}
    </>
  );
}
export default Layout;
