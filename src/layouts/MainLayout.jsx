// MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default MainLayout;
