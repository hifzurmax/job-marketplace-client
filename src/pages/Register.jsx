import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";



const Register = () => {

    const { signInWithGoogle, createUser } = useContext(AuthContext);
    const [regError, setRegError] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, name, photo, password);
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setRegError('Password should be at least 6 charrecter or longer, use atleast one capital letter and a special character')
            return;
        }

        // Reset error and success message
        setRegError('');

        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => console.log('profile updated'))
                const user = { name, email, password }
                fetch('https://brand-shop-server-lap4jd2li-hifzur-rahmans-projects.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire(
                                'Good job!',
                                'Your account successfully created!',
                                'success'
                            )
                        }
                    })
                // .then(window.location.reload(true));
            })
            .catch(error => {
                Swal.fire(
                    'Error!',
                    error.message,
                    'Error'
                )
            })

    }

    const handleGoogleLogin = () => {
    signInWithGoogle()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div className="min-h-screen mb-16 max-w-6xl mx-auto bg-second w-full">
            <div className="hero-content flex-col mx-auto py-20">
                <div className="text-center">
                    <h1 className="text-5xl font-poppins font-bold">Create Your Account</h1>
                </div>
                <div className="flex-shrink-0 w-full lg:w-1/2">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Your Photo URL" className="input input-bordered" required />
                        </div>
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
                            <button className="btn text-white hover:text-gray-800 btn-block bg-[#F54844]">Register</button>
                        </div>
                    </form>
                    <p className="text-center text-red-700 text-base mb-6">{regError}</p>

                    <div className="flex justify-center gap-3 items-center">
                        <p className="font-bold text-lg">Signin With</p>
                        <button onClick={handleGoogleLogin} className="btn bg-white shadow hover:bg-blue-600 text-main hover:text-white"> Google</button>
                    </div>

                    <h2 className="text-center mt-4 font-semibold">Already have an account? <Link className="text-main font-bold" to="/login">Login</Link></h2>

                </div>
            </div>
        </div>
    );
};

export default Register;