import Lottie from 'lottie-react';
import lottie from '../assets/Animation - 1714226205663 (1).json'
import "../App.css"
import { Fade } from 'react-awesome-reveal';
const SecondBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen mt-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Fade cascade damping={0.1}><Lottie className='w-[280px] h-[600px] md:w-[600px] md:h-[500px] ' animationData={lottie}></Lottie></Fade>
                    <div>
                        <Fade cascade damping={0.1}> <h1 className="text-5xl font-bold bubblegum text-gray-700">Discover Southeast Asias Hidden Gems</h1></Fade>
                        <Fade cascade damping={0.1}><p className="py-6 text-gray-500">Embark on an unforgettable journey through Southeast Asia and uncover its hidden gems. From pristine beaches to ancient temples, vibrant markets to lush rainforests, Southeast Asia offers a tapestry of cultures and landscapes waiting to be explored. Start your adventure today and create memories that will last a lifetime</p></Fade>
                        <Fade cascade damping={0.1}><button className="btn text-white bg-[#135D66] ubuntu">Get Started</button></Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;