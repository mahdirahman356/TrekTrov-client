import { Link } from "react-router-dom";
import "../App.css"
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignIn = () => {
    let { singInUser, googleSignIn, githubSignIn, loading, setLoading} = useContext(AuthContext)

    let handleSignIn = (e) => {
        e.preventDefault()
        let form = e.target
        let email = form.email.value
        let password = form.password.value
        console.log(email, password)

        singInUser(email, password)
            .then(result => {
                setLoading(false)
                console.log(result.user)
                form.reset()
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    let handleGoogleLogin = () => {
        googleSignIn()
        .then((result) => {
            setLoading(false)
            console.log(result.user)
        })
        .catch((error) => {
            console.log(error)
        });
    }

    let handleGithubLogin = () => {
        githubSignIn()
        .then((result) => {
            setLoading(false)
            console.log(result.user)
        })
        .catch((error) => {
            console.log(error)
        });
    }
    
    return (
        <div>
            {loading && <div className="h-[80vh] flex justify-center items-center"> <span className="loading loading-spinner loading-lg"></span></div>}
            <div className="w-[95%] md:w-[60%] mx-auto my-5 md:mb-16 bg-[#F4F3F0] p-5 md:p-20">
                <div className="text-center md:w-[70%] mx-auto">
                    <h3 className="text-4xl bubblegum mb-3">Login Your Account</h3>
                </div>
                <form onSubmit={handleSignIn}>
                    <div className="md:flex gap-4">
                        <div className="md:w-full">
                            <p className="font-semibold my-2 mt-5">Email</p>
                            <input type="email"
                                placeholder="Enter Your Email Address"
                                name="email"
                                className="input  w-full"
                                required />
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="md:w-full">
                            <p className="font-semibold my-2 mt-5">Password</p>
                            <input type="password"
                                placeholder="Enter Your Password"
                                name="password"
                                className="input  w-full"
                                required />
                        </div>
                    </div>

                    <input className="btn text-white bg-[#135D66] w-full my-6" type="submit" value="Login Youn Account" />
                    <p className="raleway">Dont have an account? <Link to="/signUp"><span className="text-[#135D66] underline">Create an account</span></Link> </p>
                </form>
                <div className="mt-6">
                    <p className="text-center mb-5 text-[20px]">________________or_______________</p>
                <div className="flex flex-col md:flex-row  justify-center gap-10 items-center">
                <button onClick={handleGoogleLogin} className="btn btn-outline border-gray-400 rounded-3xl"><FcGoogle className="text-[27px]"/> Continue with Google</button>
                <button onClick={handleGithubLogin} className="btn btn-outline border-gray-400 rounded-3xl"><FaGithub className="text-[27px]" /> Continue with Github</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SignIn;