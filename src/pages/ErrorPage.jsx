import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-8xl mb-6 font-bold">Oops!!!</h1>
                    <h1 className="text-3xl font-bold">404 - Page not found</h1>
                    <p className="py-6">The page you are looking for is not available</p>
                    <button className="btn text-second hover:text-main"><Link to="/">GO TO HOMEPAGE</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;