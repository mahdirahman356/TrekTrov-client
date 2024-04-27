import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import TouristsSpotSection from "./TouristsSpotSection";
import "../App.css"
import Countries from "./Countries";
import SecondBanner from "./SecondBanner";
import ImageSection from "./ImageSection";
const Home = () => {
    let tourist = useLoaderData()


    return (
        <div>
            <Header></Header>
            {/* Tourists Spot section */}
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
            <SecondBanner></SecondBanner>
            {/* Countries section */}
            <div>
                <div>
                <div className="text-center my-24 ubuntu w-[90%] md:w-[50%] mx-auto">
                    <p className="text-2xl md:text-3xl font-bold mb-3"> Discover Diverse Destinations</p>
                    <p className="text-gray-500">Delve into the rich tapestry of Southeast Asias countries. From the vibrant culture of Indonesia to the historical wonders of Cambodia, each nation offers a unique blend of experiences waiting to be explored. Discover the beauty and diversity of the regions countries here.</p>
                </div>    
                </div>
                <div className=" w-[95%] md:w-[80%] mx-auto">
                    <Countries></Countries>
                </div>
            </div>
            <ImageSection></ImageSection>
        </div>
    );
};

export default Home;