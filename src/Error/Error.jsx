import { Link } from 'react-router-dom';
import '../App.css'
const Error = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            <span className="bubblegum">404</span>
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to="/"><a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded text-white bg-[#135D66] dark:text-gray-50">Back to homepage</a></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;