import { Link } from "react-router-dom";
import "../App.css";
import { FaAngleDown,} from "react-icons/fa";
import { useEffect, useState } from "react";
const AllTouristsSpot = () => {
    let [allTourists, setAllTourists] = useState([])
    console.log(allTourists)

    useEffect(() => {
     fetch("http://localhost:5000/touristsSpot")
     .then(res => res.json())
     .then(data => setAllTourists(data))
    },[])
    
    let handleSorting = () => {
        let sortedTourists = [...allTourists].sort((a, b) => a.cost - b.cost);
        setAllTourists(sortedTourists);
    }
    
    return (
        <div>
            <div className="text-center my-24 ubuntu w-[90%] md:w-[50%] mx-auto">
                <p className="text-2xl md:text-3xl font-bold mb-3" >Discover Southeast Asia</p>
                <p className="text-gray-500">Explore a curated collection of captivating tourist spots across Southeast Asia. Dive into stunning imagery and essential details to plan your next adventure effortlessly.</p>
            </div>
            <div className="w-[90%] md:w-[80%] mx-auto flex justify-center items-center mb-7">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 text-white bg-[#135D66]">Sort By Average Cost <FaAngleDown className="text-[20px]"/></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={handleSorting}><a>Average Cost</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[95%] md:w-[80%] mx-auto">
                {
                    allTourists.map((allTourists, index) => <div key={index} className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={allTourists.photoURL} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="font-semibold text-xl text-center ubuntu">{allTourists.touristSpot}</h2>
                            <p className="font-semibold text-center"><span className="font-normal">{allTourists.seasonality}</span></p>
                            <p className="font-semibold mt-5">Average Cost: <span className="text-red-500">{allTourists.cost}</span></p>
                            <p className="font-semibold">Total Visitors Per Year: <span className="font-normal">{allTourists.perYear}</span></p>
                            <p className="font-semibold">Travel Time: <span className="font-normal">{allTourists.travelTime}</span></p>
                            <div className="card-actions mt-6 flex justify-center ">
                                <Link to={`/touristsDetails/${allTourists._id}`}><button className="btn text-white bg-[#135D66] ubuntu">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;