import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import MyJobsRow from "./MyJobsRow";
import Swal from "sweetalert2";
import '../index.css'
import { FaGreaterThan } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const MyJobs = () => {

    const { user } = useContext(AuthContext);
    const [myJobs, setMyJobs] = useState([]);

    const url = `https://task-hub-server-ten.vercel.app/myjobs?email=${user?.email}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, { withCredentials: true });
                const data = response.data;
                setMyJobs(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [url]);


    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to remove the job",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    axios.delete(`https://task-hub-server-ten.vercel.app/myjobs/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                Swal.fire(
                                    'Removed!',
                                    'The job is removed',
                                    'success'
                                )
                                const remaining = myJobs.filter(myJob => myJob._id !== id);
                                setMyJobs(remaining);
                            }
                        })
                        .catch(error => {
                            console.error(error);
                        });
                }
            })

    }


    const handleUpdate = id => {
        console.log(id);
    }


    return (
        <div className="overflow-x-auto max-w-6xl font-poppins mx-auto mb-16">
            <Helmet>
                <title>TaskHub | My Jobs</title>
            </Helmet>
            <div className="text-white  bg-main py-10 rounded-t-lg">
                <h2 className="text-center text-3xl font-semibold">My Total Jobs: {myJobs.length}</h2>
                <div className="flex justify-center mt-4 text-lg font-bold gap-2 items-center">
                    <h2>Home</h2><FaGreaterThan></FaGreaterThan> <h2>Profile</h2> <FaGreaterThan></FaGreaterThan><h2> My Jobs</h2>
                </div>

            </div>

            <table className="table mt-16">
                {/* head */}

                <tbody>

                    {
                        myJobs.map(singleJob => <MyJobsRow
                            key={singleJob._id}
                            singleJob={singleJob}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        >
                        </MyJobsRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyJobs;