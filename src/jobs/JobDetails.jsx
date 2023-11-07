import { useContext, useState } from "react";
import { FaCalendarAlt, FaGreaterThan, FaMoneyCheckAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import ReactDatePicker from "react-datepicker";

const JobDetails = () => {

    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)
    console.log(user);
    const job = useLoaderData();
    const { _id, title, email, description, maxPrice, minPrice, deadline, category, image } = job;

    
    console.log('job mail', email);
    return (

        <div className="font-poppins max-w-6xl mb-24 mx-auto">
            <div className="text-white bg-main py-10 rounded-t-lg mb-20">
                <h2 className="text-center text-3xl font-semibold">Job Title: {title}</h2>
                <div className="flex justify-center mt-4 text-lg font-bold gap-2 items-center">
                    <h2>Home</h2><FaGreaterThan></FaGreaterThan> <h2>Pages</h2> <FaGreaterThan></FaGreaterThan><h2>Job Details</h2>
                </div>
            </div>
            <div className="grid grid-cols-2">


                <div className="space-y-6 border-r mr-10">
                    <h2 className="card-title text-second">{title}</h2>
                    <div className="flex gap-4">
                        <div className="border  space-y-1 rounded p-6">
                            <div className="flex text-base font-bold items-center gap-2">
                                <FaMoneyCheckAlt className="text-[#74788d]"></FaMoneyCheckAlt>
                                <p className="text-[#74788d]">Price Range</p>
                            </div>
                            <p className="text-second">${maxPrice} - ${minPrice}</p>
                        </div>
                        <div className="border space-y-1 rounded p-6">
                            <div className="flex text-base font-bold items-center gap-2">
                                <FaCalendarAlt className="text-[#74788d]"></FaCalendarAlt><h2 className="text-[#74788d]">Deadline</h2>
                            </div>
                            <p className="text-second">{deadline}</p>
                        </div>
                    </div>
                    <h2 className="card-title text-second">Job Description</h2>
                    <p>{description}</p>
                </div>



                <div className="mb-16">
                    <form onSubmit={'h'}>
                        {/* 1st row */}
                        <div className="md:flex gap-4 mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label>
                                    <input type="text" name="price" placeholder="Your Bidding Amount" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Deadline</span>
                                </label>
                                <label>
                                    <ReactDatePicker
                                        className="input input-bordered pr-16"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        name="deadline"
                                    />
                                </label>
                            </div>

                        </div>

                        {/* 2nd row */}
                        <div className="md:flex mb-8">

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Buyer Email</span>
                                </label>
                                <label className="">
                                    <input defaultValue={email} disabled type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <label className="">
                                    <input defaultValue={user.email} disabled type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                                </label>
                            </div>

                        </div>

                        {/* 3rd row */}

                        <div className="flex pb-10">
                            {
                                user.email === email ? <input type="submit" value="BID NOW" className="btn text-white w-40 hover:text-gray-800 content-center bg-main" disabled /> 
                                :
                                <input type="submit" value="BID NOW" className="btn text-white w-40 hover:text-gray-800 content-center bg-main" /> 
                            }
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;