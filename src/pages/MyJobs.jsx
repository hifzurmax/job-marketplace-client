import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

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

    return (
        <div className="overflow-x-auto max-w-6xl mx-auto my-16">
            <h2 className="text-center text-lg font-semibold">Total Posted: {myJobs.length}</h2>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Short Description</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row */}
                    {
                        myJobs.map(singleJob => <tr key={singleJob._id}>
                            <td>
                                <h3> {singleJob.title}</h3>
                            </td>
                            <td>{singleJob.description.slice(0, 100)}...</td>
                            <td><button className="btn btn-xs">Update</button></td>
                            <th>
                                <button className="btn btn-xs">Remove</button>
                            </th>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyJobs;