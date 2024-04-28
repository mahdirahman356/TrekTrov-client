import { Link, useLoaderData } from "react-router-dom";

const CountryTourists = () => {

    let country = useLoaderData()
    return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[95%] md:w-[80%] mx-auto mt-28">
            {country.map((country, index) =>
                <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={country.photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{country.touristSpot}</h2>
                    <p>{country.description}</p>
                    <p className="text-xl font-semibold">Average Cost:<span className="text-red-500">{country.cost}</span></p>
                    <ul className="list-disc pl-3">
                        <li className="font-semibold">Countery: <span className="font-normal">{country.countryName}</span></li>
                        <li className="font-semibold">Location: <span className="font-normal">{country.location}</span></li>
                        <li className="font-semibold">Seasonality: <span className="font-normal">{country.seasonality}</span></li>
                    </ul>
                    <Link to={`/touristsDetails/${country._id}`}><button className="btn  mt-4 text-white bg-[#135D66] w-full">View Details</button></Link>
                </div>
            </div>
        )}
        </div>
    );
};

export default CountryTourists;