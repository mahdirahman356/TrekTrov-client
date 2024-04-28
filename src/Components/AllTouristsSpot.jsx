import { Link } from "react-router-dom";
import "../App.css";
import { FaAngleDown,} from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";
const AllTouristsSpot = () => {
    let [allTourists, setAllTourists] = useState([])

    let {loading, setLoading} = useContext(AuthContext)

    useEffect(() => {
     setLoading(false)
     fetch("https://trek-trove-sarver.vercel.app/touristsSpot")
     .then(res => res.json())
     .then(data => setAllTourists(data))
    },[setLoading])
    
    let handleSorting = () => {
        let sortedTourists = [...allTourists].sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
        setAllTourists(sortedTourists);
    }
    
    return (
        <div>
            {loading && <div className="h-[80vh] flex justify-center items-center"> <span className="loading loading-spinner loading-lg"></span></div>}
            <div className="text-center my-24 ubuntu w-[90%] md:w-[50%] mx-auto">
                <p className="text-2xl md:text-3xl font-bold mb-3" >Discover Southeast Asia</p>
                <p className="text-gray-500">Explore a curated collection of captivating tourist spots across Southeast Asia. Dive into stunning imagery and essential details to plan your next adventure effortlessly.</p>
            </div>
            <div className="w-[90%] md:w-[80%] mx-auto flex justify-center items-center mb-7">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 btn-outline border-2 border-[#135D66] text-[#135D66]">Sort By Average Cost <FaAngleDown className="text-[20px]"/></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={handleSorting}><a>lowest to highest</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[95%] md:w-[80%] mx-auto">
                {
                    allTourists.map((allTourists, index) =>
                    <div key={index} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={allTourists.photoURL} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{allTourists.touristSpot}</h2>
                        <p>{allTourists.description}</p>
                        <p className="text-xl font-semibold">Average Cost:<span className="text-red-500">{allTourists.cost}</span></p>
                        <ul className="list-disc pl-3">
                            <li className="font-semibold">Countery: <span className="font-normal">{allTourists.countryName}</span></li>
                            <li className="font-semibold">Location: <span className="font-normal">{allTourists.location}</span></li>
                            <li className="font-semibold">Seasonality: <span className="font-normal">{allTourists.seasonality}</span></li>
                        </ul>
                        <Link to={`/touristsDetails/${allTourists._id}`}><button className="btn  mt-4 text-white bg-[#135D66] w-full">View Details</button></Link>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;