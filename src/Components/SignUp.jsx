import { Link } from "react-router-dom";
import "../App.css"
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import Swal from "sweetalert2";
const SignUp = () => {
    let {createUser} = useContext(AuthContext)
    let handleSignUp = (e) => {
        e.preventDefault()
        let form = e.target
        let email = form.email.value
        let password = form.password.value
        console.log(email, password)
        if (password.length < 6) {
            Swal.fire({
                title: 'Error',
                text: 'Password should be at least 6 characters',
                icon: 'error',
                confirmButtonText: 'close'
              })            
              return
        }
        if (!/[A-Z]/.test(password)) {
            Swal.fire({
                title: 'Error',
                text: 'Your password must contain at least one Uppercase character',
                icon: 'error',
                confirmButtonText: 'close'
              })                 
              return
        }
        if (!/[a-z]/.test(password)) {
            Swal.fire({
                title: 'Error',
                text: 'Your password must contain at least one  Lowercase character',
                icon: 'error',
                confirmButtonText: 'close'
              })                 
              return
        }
        createUser(email, password)
        .then(result => {
            console.log(result.user)
            form.reset()
            Swal.fire({
                title: 'Success',
                text: 'User Created Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })

        })
        .catch((error) => {
            const errorMessage = error.message;
             console.log(errorMessage)
             Swal.fire({
                title: 'Error',
                text: 'Email already in use',
                icon: 'error',
                confirmButtonText: 'close'
              })
          });
    }
    return (
        <div>
             <div className="w-[95%] md:w-[60%] mx-auto my-5 md:mb-16 bg-[#F4F3F0] p-5 md:p-20">
            <div className="text-center md:w-[70%] mx-auto">
                    <h3 className="text-4xl bubblegum mb-3">Create Your Account</h3>
            </div>
            <form onSubmit={handleSignUp}>
            <div className="md:flex gap-4">
                    <div  className="md:w-full">
                    <p className="font-semibold my-2 mt-5">Name</p>
                    <input type="email"
                        placeholder="Enter Your Name"
                        name="name"
                        className="input  w-full"
                         />
                    </div>
                </div>
                
                <div className="md:flex gap-4">
                    <div  className="md:w-full">
                    <p className="font-semibold my-2 mt-5">Photo URL</p>
                    <input type="email"
                        placeholder="Enter Your Photo URL"
                        name="name"
                        className="input  w-full"
                         />
                    </div>
                </div>

                <div className="md:flex gap-4">
                    <div  className="md:w-full">
                    <p className="font-semibold my-2 mt-5">Email</p>
                    <input type="email"
                        placeholder="Enter Your Email Address"
                        name="email"
                        className="input  w-full"
                        required />
                    </div>
                </div>

                <div className="md:flex gap-4">
                    <div  className="md:w-full">
                    <p className="font-semibold my-2 mt-5">Password</p>
                    <input type="password"
                        placeholder="Enter Your Password"
                        name="password"
                        className="input  w-full"
                        required />
                    </div>
                </div>

                <input className="btn  rancho-regular text-white bg-[#135D66] w-full my-6" type="submit" value="Create Account" />
                <p className="raleway">Already have an account? <Link to="/signIn"><span className="text-[#135D66] underline">Login</span></Link> </p>
            </form>
        </div>
        </div>
    );
};

export default SignUp;