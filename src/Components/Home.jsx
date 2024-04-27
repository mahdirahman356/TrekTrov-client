import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import TouristsSpotSection from "./TouristsSpotSection";
import "../App.css"
const Home = () => {
    let tourist = useLoaderData()

    return (
        <div>
            <Header></Header>

            {/* Tourists Spot */}
            <div>
                <div className="text-center my-24 ubuntu">
                   <p className="text-2xl md:text-3xl font-bold mb-3">Tourists Spot</p>
                    <p className="text-gray-500">Southeast Asias treasures await! Balis beaches, Angkor Wats marvels, and more. Explore now!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[95%] md:w-[80%] mx-auto">
                    {
                        tourist.map((tourist, index) => <TouristsSpotSection
                            key={index}
                            tourist={tourist}
                        ></TouristsSpotSection>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;