import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    let singleTourists = useLoaderData()
    let {_id, touristSpot,  photoURL, cost, seasonality, travelTime, perYear, countryName, location, email,description,  name} = singleTourists
    
     let handleUpdate = (e) => {
        e.preventDefault()
        let form = e.target
        let touristSpot = form.touristSpot.value
        let photoURL = form.photoURL.value
        let cost = form.cost.value
        let seasonality = form.seasonality.value
        let travelTime = form.travelTime.value
        let perYear = form.perYear.value
        let countryName = form.countryName.value
        let location = form.location.value
        let email = form.email.value
        let name= form.name.value
        let description = form.description.value
        let addTourists = {touristSpot,  photoURL, cost, seasonality, travelTime, perYear, countryName, location, email,description,  name}
        console.log(addTourists)
        fetch(`http://localhost:5000/touristsSpot/${_id}`, {
            method: "PUT",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(addTourists)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success',
                    text: 'Updated Tourists Spot Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

     }
    return (
        <div>
            <div className="w-[95%] md:w-[80%] mx-auto my-5 md:mb-16 bg-[#F4F3F0] p-5 md:p-20">
                <div className="text-center md:w-[70%] mx-auto">
                        <h3 className="text-4xl rancho-regular mb-3 bubblegum">Update Tourists Spot</h3>
                </div>
                <form onSubmit={handleUpdate}>
                    {/* from-row-1 */}
                    <div className="md:flex gap-4">
                        <div  className="w-full md:w-1/2">
                        <p className="font-semibold my-2 mt-5">Tourist Spot Name: </p>
                        <input type="text"
                            placeholder="Enter Tourist Spot Name"
                            name="touristSpot"
                            defaultValue={touristSpot}
                            className="input  w-full"
                            required />
                        </div>
                       <div className="w-full md:w-1/2">
                       <p className="font-semibold my-2 mt-5">Photo URL</p>
                        <input type="text"
                            placeholder="Photo URL"
                            name="photoURL"
                            defaultValue={photoURL}
                            className="input  w-full"
                            required />
                       </div>
                    </div>
                    {/* from-row-2 */}
                    <div className="md:flex gap-4">
                        <div  className="w-full md:w-1/2">
                        <p className="font-semibold my-2 mt-5">Average Cost</p>
                        <input type="text"
                            placeholder="Average Cost"
                            name="cost"
                            defaultValue={cost}
                            className="input  w-full"
                            required />
                        </div>
                       <div className="md:w-1/2">
                       <p className="font-semibold my-2 mt-5">Seasonality</p>
                        <input type="text"
                            placeholder="Seasonality"
                            name="seasonality"
                            defaultValue={seasonality}
                            className="input  w-full"
                            required />
                       </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div  className="md:w-1/2">
                        <p className="font-semibold my-2 mt-5">Travel Time</p>
                        <input type="text"
                            placeholder="Travel Time"
                            name="travelTime"
                            defaultValue={travelTime}
                            className="input  w-full"
                            required />
                        </div>
                       <div className="md:w-1/2">
                       <p className="font-semibold my-2 mt-5">Total Visitors Per Year</p>
                        <input type="text"
                            placeholder="Total Visitors Per Year"
                            name="perYear"
                            defaultValue={perYear}
                            className="input  w-full"
                            required />
                       </div>
                    </div>
                    

                    {/* from-row-4 */}
                    <div className="md:flex gap-4">
                        <div  className="md:w-1/2">
                        <p className="font-semibold my-2 mt-5">Country Name</p>
                        <input type="text"
                            placeholder="Country Name"
                            name="countryName"
                            defaultValue={countryName}
                            className="input  w-full"
                            required />
                        </div>
                        <div className="md:w-1/2">
                       <p className="font-semibold my-2 mt-5">Location</p>
                        <input type="text"
                            placeholder="Location"
                            name="location"
                            defaultValue={location}
                            className="input  w-full"
                            required />
                       </div>
                    </div>

                    {/* from-row-5 */}
                    <div className="md:flex gap-4">
                        <div  className="md:w-1/2">
                        <p className="font-semibold my-2 mt-5">Email</p>
                        <input type="text"
                            placeholder="Enter Your Email"
                            name="email"
                            defaultValue={email}
                            className="input  w-full"
                            required />
                        </div>
                        <div className="md:w-1/2">
                       <p className="font-semibold my-2 mt-5">Name</p>
                        <input type="text"
                            placeholder="Enter Your Name"
                            name="name"
                            defaultValue={name}
                            className="input  w-full"
                            required />
                       </div>
                    </div>

                    <div  className="w-full">
                        <p className="font-semibold my-2 mt-5">Description</p>
                        <input type="text"
                            placeholder="Description"
                            name="description"
                            defaultValue={description}
                            className="input  w-full"
                            required />
                        </div>
                    <input className="btn text-white bg-[#135D66] w-full mt-6" type="submit" value="Update Tourists Spot" />
                </form>
            </div>
        </div>
    );
};

export default Update;