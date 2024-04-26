import { Link, NavLink } from "react-router-dom";
import "../App.css"
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { VscSignOut } from "react-icons/vsc";
import userImage from "../assets/Image/user.avif"
const Navbar = () => {
    let { user, userSignOut } = useContext(AuthContext)

    let handleSignOut = () => {
        userSignOut()
        .then(() => {
            console.log("user Log out")
        })
        .catch((error) => {
            console.log(error)
          });
          
    }
    return (
        <div className="navbar bg-base-100 ubuntu w-[95%] md:w-[80%] mx-auto">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>Item 1</li>
                        <li>
                            Parent
                            <ul className="p-2">
                                <li>Submenu 1</li>
                                <li>Submenu 2</li>
                            </ul>
                        </li>
                        <li>Item 3</li>
                    </ul>
                </div>
                <p className="ml-2 bubblegum text-xl md:text-3xl">TrekTrov</p> 
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 mx-8">
                    <NavLink to="/">Home </NavLink>
                    <NavLink to="/allTouristsSpot">All Tourists Spot</NavLink>
                    <NavLink to="/addTourists">Add Tourists Spot</NavLink>
                    <NavLink to="/mylist">My List</NavLink>
                    <NavLink to="/signUp">Sign Up</NavLink>
                    <NavLink to="/signIn">Sign In</NavLink>
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <div className="w-10 h-10">
                        <div className="dropdown dropdown-hover dropdown-end">
                            <div tabIndex={0} role="button" className=""><img className="rounded-full" src={user.photoURL ? user.photoURL : userImage} alt="" /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>{user.displayName}</a></li>
                                <li onClick={handleSignOut} className="flex"><a>Sign Out <VscSignOut className="text-[20px]" /></a></li> 
                            </ul>
                        </div> 
                    </div>
                        :
                        <>
                            <Link to="/signIn" className="btn bg-[#135D66] text-white">SignIn</Link>
                            <Link to="/signUp" className="btn bg-[#135D66] text-white ml-3">SingUp</Link>
                        </>
                }


            </div>
        </div>
    );
};

export default Navbar;