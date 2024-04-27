import { Link, NavLink } from "react-router-dom";
import "../App.css"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";
import { VscSignOut } from "react-icons/vsc";
import userImage from "../assets/Image/user.avif"
const Navbar = () => {
    let { user, userSignOut } = useContext(AuthContext)
    let [theme, setThem] = useState("light")

    useEffect(() => {
     localStorage.setItem("theme", theme)
     const toggleTheme = localStorage.getItem('theme')
     document.querySelector('html').setAttribute("data-theme", toggleTheme)
    },[theme])
    
    let handleToggle = (e) => {
       if(e.target.checked){
        setThem("dark")
       }
       else{
        setThem("light")
       }
    }
    console.log(theme)


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
                <div className="mr-4">
                    <label className="flex cursor-pointer gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <input
                         onChange={handleToggle}
                         type="checkbox"
                         className="toggle theme-controller" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>

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