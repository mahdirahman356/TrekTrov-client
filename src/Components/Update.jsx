import { useLoaderData } from "react-router-dom";

const Update = () => {
    let singleTourists = useLoaderData()
    return (
        <div>
            <p>update page {singleTourists._id}</p>
        </div>
    );
};

export default Update;