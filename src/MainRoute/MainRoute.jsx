import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainRoute = () => {
    return (
        <div>
           <div className="">
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default MainRoute;