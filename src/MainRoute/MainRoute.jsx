import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainRoute = () => {
    return (
        <div>
           <div className="">
           <Navbar></Navbar>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainRoute;