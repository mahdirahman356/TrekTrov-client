import { useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Context";

const Countries = () => {

    let {country} = useContext(AuthContext)

    // let [country, setCountry] = useState([])

    // useEffect(() => {
    // fetch("http://localhost:5000/country")
    // .then(res => res.json())
    // .then(data => setCountry(data))
    // },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                country.map((country, index) => <Link key={index} to={`/countryTourists/${country.countryName}`}>
                <div>
                    <div className="card h-full p-7 flex flex-col lg:flex-row items-center gap-6 justify-between bg-[#ebe9e2] rounded-xl">
                        <figure className="border-none rounded-xl  w-[90%]"><img className="" src={country.photoURL} alt="Movie" /></figure>
    
                        <div className='mt-5 md:mt-0'>
                            <p className='font-semibold text-gray-600 mb-1 text-xl'>{country.countryName}</p>
                            <p className='font-semibold text-gray-600 mb-1'><span className='font-normal'>{country.description}</span></p>
                        </div>
                    </div>
                </div>
                </Link>
            )
            }
        </div>
    );
};

export default Countries;