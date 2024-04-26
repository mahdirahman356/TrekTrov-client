import "../App.css"
import headerImage from "../assets/Image/ammie-ngo-vcu-OZBxxRk-unsplash.jpg"
import slider1 from "../assets/Image/slider-1.avif"
import slider2 from "../assets/Image/slider-2.avif"
import slider3 from "../assets/Image/slider-3.avif"
import slider4 from "../assets/Image/slider-4.avif"
import slider6 from "../assets/Image/slider-6.avif"
import slider7 from "../assets/Image/slider-7.avif"
import slider8 from "../assets/Image/slider-8.avif"
const Header = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${headerImage})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-left text-neutral-content h-full w-full flex-col md:flex-row py-24">
                <div className="max-w-lg mr-auto">
                    <h1 className="mb-5 text-6xl font-bold bubblegum">Your Gateway to Global Adventures</h1>
                    <p className="mb-5 ubuntu">Explore the worlds wonders with us. From majestic mountains to pristine beaches, let TrekScape guide you on unforgettable journeys filled with discovery and excitement. Join our community of explorers today</p>
                    <button className="btn border-none text-white bg-[#135D66] ubuntu">Get Started</button>
                </div>
                {/* slider */}
                <div>
                    <div className="carousel carousel-center rounded-box">
                        <div className="carousel-item">
                            <img className="h-[450px]" src={slider1} alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img className="h-[450px]" src={slider2} alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img className="h-[450px]" src={slider3} alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img className="h-[450px]" src={slider4} alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img className="h-[450px]" src={slider6} alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img className="h-[450px]" src={slider7} alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img className="h-[450px]" src={slider8} alt="Pizza" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;