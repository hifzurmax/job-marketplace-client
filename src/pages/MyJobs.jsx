import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import MyJobsRow from "./MyJobsRow";
import Swal from "sweetalert2";


const MyJobs = () => {

    const { user } = useContext(AuthContext);
    const [myJobs, setMyJobs] = useState([]);

    const url = `http://localhost:5000/myjobs?email=${user?.email}`;

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
                    axios.delete(`http://localhost:5000/myjobs/${id}`)
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
        <div className="overflow-x-auto max-w-6xl mx-auto my-16">
            <h2 className="text-center text-lg font-semibold">Total Posted: {myJobs.length}</h2>
            <table className="table">
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