import img1 from "../assets/Image/down-2.avif"
import img2 from "../assets/Image/down.avif"
import img3 from "../assets/Image/up.jpeg"
import img4 from "../assets/Image/right.avif"
const ImageSection = () => {
    return (
        <div className="flex-col justify-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-24">
            <img className="col-span-2 rounded-xl mb-2" src={img3} alt="" />
             <img className="row-span-2 h-full rounded-xl hidden md:flex mb-2" src={img4} alt="" />
            <img className="rounded-xl mb-2" src={img1} alt="" />
            <img className="rounded-xl mb-2" src={img2} alt="" />
        </div>
    );
};

export default ImageSection;