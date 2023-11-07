import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { FaGreaterThan } from "react-icons/fa";


const AddJobs = () => {
    const [startDate, setStartDate] = useState(new Date());

    const { user } = useContext(AuthContext);

    const handleAddJobs = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const email = form.email.value;
        const category = form.category.value;
        const minPrice = form.minprice.value;
        const maxPrice = form.maxprice.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const image = form.image.value;
        const newJob = { title, email, category, minPrice, maxPrice, deadline, description, image };
        console.log(newJob);

        axios.post('http://localhost:5000/job', newJob)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'An error occurred while adding the job',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    }


    return (
        <div className=" max-w-6xl mx-auto mb-16">
            <div className="text-white curve h-56 mb-20">
                <h2 className="text-center text-3xl pt-8 font-semibold">Add Job</h2>
                <div className="flex justify-center mt-4 text-lg font-bold gap-2 items-center">
                    <h2>Home</h2><FaGreaterThan></FaGreaterThan> <h2>Profile</h2> <FaGreaterThan></FaGreaterThan><h2>Add Job</h2>
                </div>
            </div>
            <form onSubmit={handleAddJobs}>
                {/* 1st row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <label>
                            <input type="text" name="title" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3 md:ml-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="">
                            <input defaultValue={user.email} disabled type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3 md:ml-4">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="">
                            <input type="text" name="image" placeholder="Add Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                {/* 2nd row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/4">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <label>
                            <ReactDatePicker
                                className="input input-bordered"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                name="deadline"
                            />
                        </label>
                    </div>


                    <div className="form-control md:w-1/4 md:ml-4">
                        <label className="label">
                            <span className="label-text">Job Category</span>
                        </label>
                        <label>
                            <select name="category" className="select select-bordered w-full">
                                <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Graphics Design</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-control md:ml-4 md:w-1/4">
                        <label className="label">
                            <span className="label-text">Min Price</span>
                        </label>
                        <label>
                            <input type="text" name="minprice" placeholder="Min Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/4 md:ml-4">
                        <label className="label">
                            <span className="label-text">Max Price</span>
                        </label>
                        <label>
                            <input type="text" name="maxprice" placeholder="Max Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* 3rd row */}

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label>
                            <textarea type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex justify-center pb-10">
                    <input type="submit" value="Add Job" className="btn text-white w-40 hover:text-gray-800 content-center bg-main" />
                </div>

            </form>
        </div>
    );
};

export default AddJobs;