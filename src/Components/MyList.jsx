import { useContext, useEffect, useState } from "react";
import "../App.css"
import { AuthContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
const MyList = () => {
    let {user} = useContext(AuthContext)

    let [mylist, setMylist] = useState([])

    useEffect(() => {
     fetch(`http://localhost:5000/touristsSpot/email/${user?.email}`)
     .then(res => res.json())
     .then(data => {
        setMylist(data)
     })
    },[user])

    let handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/touristsSpot/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                              let DeleteCard = mylist.filter(tourist => tourist._id !== id)
                              setMylist(DeleteCard)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div>
                <div className="text-center my-24 ubuntu w-[90%] md:w-[50%] mx-auto">
                   <p className="text-2xl md:text-3xl font-bold mb-3">Your Personal Travel Collection</p>
                    <p className="text-gray-500">Manage your own curated collection of favorite tourist spots with My List. Keep track of your most cherished destinations, update details, and plan future adventures seamlessly. Your personalized travel guide awaits!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[95%] md:w-[80%] mx-auto">
                        {
                            mylist.map((mylist, index) => <div key={index} className="card card-side h-full p-7 flex flex-col lg:flex-row items-center gap-3 justify-between bg-[#ebe9e2] rounded-xl">
                            <figure className="border-none rounded-xl"><img className="" src={mylist.photoURL} alt="Movie" /></figure>
        
                            <div className=''>
                                <p className='font-semibold text-gray-600 mb-1'>Tourist Spot Name : <span className='font-normal'>{mylist.touristSpot}</span></p>
                                <p className='font-semibold text-gray-600 mb-1'>Country Name : <span className='font-normal'>{mylist.countryName}</span></p>
                                <p className='font-semibold text-gray-600 mb-1'>Average Cost : <span className='font-normal'>{mylist.cost}</span></p>
        
                                <div className="flex flex-row justify-center px-7 py-3 gap-3 bg-white mt-4 rounded-xl">
                                    <Link to={`/touristsDetails/${mylist._id}`}><button className="btn text-white bg-[#135D66] rounded-full border-none"><IoMdEye className='text-[20px] text-white' /></button></Link>
                                    <Link to={`/update/${mylist._id}`}><button className="btn text-white bg-[#135D66] rounded-full border-none"><HiPencil className='text-[20px] text-white' /></button></Link>
                                    <button onClick={() => handleDelete(mylist._id)} className="btn bg-[#EA4744] rounded-full border-none"><MdDelete className='text-[20px] text-white' /></button>
                                </div>
                            </div>
                        </div>)
                        }
                    </div>
                </div>
            </div>
    );
};

export default MyList;