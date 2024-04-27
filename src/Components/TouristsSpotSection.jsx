import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const TouristsSpotSection = ({ tourist }) => {
    let { _id, touristSpot, photoURL, cost, countryName } = tourist
    return (
        <div>
            <div className=''>
                <div className="card h-full p-7 flex flex-col lg:flex-row  items-center gap-3 justify-between bg-[#ebe9e2] rounded-xl">
                    <figure className="border-none rounded-xl  lg:w-[50%]"><img className="" src={photoURL} alt="Movie" /></figure>

                    <div className='mt-5 md:mt-0'>
                        <p className='font-semibold text-gray-600 mb-1'>Tourist Spot Name : <span className='font-normal'>{touristSpot}</span></p>
                        <p className='font-semibold text-gray-600 mb-1'>Country Name : <span className='font-normal'>{countryName}</span></p>
                        <p className='font-semibold text-gray-600 mb-1'>Average Cost : <span className='font-normal'>{cost}</span></p>
                        <Link to={`/touristsDetails/${_id}`}><button className="btn text-white bg-[#135D66] rounded-full border-none mt-4 px-4 w-full">View Details </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


TouristsSpotSection.propTypes = {
    tourist: PropTypes.object.isRequired,
    touristsSpot: PropTypes.object.isRequired,
    setTourist: PropTypes.func.isRequired

}
export default TouristsSpotSection;