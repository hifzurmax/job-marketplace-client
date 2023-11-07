
import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const WebDevelopment = ({ webCategory }) => {
    const [webJobs, setWebJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (webCategory) {
                try {
                    const response = await axios.get(`http://localhost:5000/jobs/${webCategory}`);
                    setWebJobs(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
        };

        fetchData();
    }, [webCategory]);

    return (
        <>
            <div className="my-20 grid grid-cols-2 gap-4">
                {
                    webJobs.map(job => <JobCard 
                        key={job._id}
                        job={job}
                        ></JobCard>)
                }
            </div>
        </>
    );
};

export default WebDevelopment;
