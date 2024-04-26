import { HiPencil } from "react-icons/hi";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 


const TouristsSpotSection = ({tour}) => {
    let {_id, touristSpot,  photoURL, cost, countryName} = tour
    return (
        <div>
            <div className=''>
            <div className="card card-side h-full p-7 flex flex-col lg:flex-row items-center gap-3 justify-between bg-[#ebe9e2] rounded-xl">
                <figure className="border-none rounded-xl"><img className="" src={photoURL} alt="Movie" /></figure>

                <div className=''>
                    <p className='font-semibold text-gray-600 mb-1'>Tourist Spot Name : <span className='font-normal'>{touristSpot}</span></p>
                    <p className='font-semibold text-gray-600 mb-1'>Country Name : <span className='font-normal'>{countryName}</span></p>
                    <p className='font-semibold text-gray-600 mb-1'>Average Cost : <span className='font-normal'>{cost}</span></p>

                    <div className="flex flex-row justify-center px-7 py-3 gap-3 bg-white mt-4 rounded-xl">
                    <Link><button className="btn text-white bg-[#135D66] rounded-full border-none"><IoMdEye className='text-[20px] text-white' /></button></Link>
                    <Link to={`/update/${_id}`}><button className="btn text-white bg-[#135D66] rounded-full border-none"><HiPencil className='text-[20px] text-white' /></button></Link>
                    <button className="btn bg-[#EA4744] rounded-full border-none"><MdDelete className='text-[20px] text-white' /></button>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};


TouristsSpotSection.propTypes = {
   tour: PropTypes.object.isRequired
}
export default TouristsSpotSection;