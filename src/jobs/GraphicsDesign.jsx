
import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const GraphicsDesign = ({ graphicsCategory }) => {
    const [graphicsJobs, setGraphicsJobs] = useState([]);

    useEffect(() => {
        if (graphicsCategory) {
            axios.get(`http://localhost:5000/jobs/${graphicsCategory}`)
                .then(res => {
                    setGraphicsJobs(res.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [graphicsCategory]);

    return (
        <>
            <div className="my-20 grid grid-cols-2 gap-4">
                {
                    graphicsJobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div >
        </>
    );
};


export default GraphicsDesign;