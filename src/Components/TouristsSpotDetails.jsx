import { useLoaderData } from "react-router-dom";

const TouristsSpotDetails = () => {
    let touristDetails = useLoaderData()
    let {touristSpot,  photoURL, cost, seasonality, travelTime, perYear, countryName, location, description,} = touristDetails
    return (
        <div>
<div className="card card-side h-full p-4 md:p-7 flex flex-col md:flex-row items-center gap-8 bg-[#ebe9e2] bg-opacity-40 w-[95%] md:w-[80%] mx-auto px-4 my-4 md:my-28">
                <figure className="w-[80%] rounded-xl"><img className="min-w-2xl" src={photoURL} alt="Movie" /></figure>

                <div className='space-y-1'>
                    <p className='font-semibold text-gray-600 text-2xl'>{touristSpot}</p>
                    <p className='font-semibold text-gray-600'><span className='font-normal'>{description}</span></p>
                    <p className='font-semibold text-gray-600'>Average Cost : <span className='font-normal'>{cost}</span></p>
                    <p className='font-semibold text-gray-600'>Travel Time : <span className='font-normal'>{travelTime}</span></p>
                    <p className='font-semibold text-gray-600'>Country Name : <span className='font-normal'>{countryName}</span></p>
                    <p className='font-semibold text-gray-600'>Location : <span className='font-normal'>{location}</span></p>
                    <p className='font-semibold text-gray-600'>Total Visitors Per Year : <span className='font-normal'>{perYear}</span></p>
                    <p className='font-semibold text-gray-600'>Seasonality : <span className='font-normal'>{seasonality}</span></p>
                </div>
            </div>        </div>
    );
};

export default TouristsSpotDetails;