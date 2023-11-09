import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { signInUser } = useContext(AuthContext)
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/")
                Swal.fire(
                    'Good job!',
                    'Your have logged in successfully!',
                    'success'
                )
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message
                })
            })
    }
    return (
        <>
            <div className="hero mb-16 max-w-6xl mx-auto min-h-screen">
            <Helmet>
                <title>TaskHub | Login</title>
            </Helmet>
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login Your Account</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white hover:text-gray-800 btn-block bg-main">Login</button>
                            </div>
                        </form>
                        <h2 className="text-center font-semibold">Dont’t Have An Account?  <Link className="text-main font-bold" to="/register">Register</Link></h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;