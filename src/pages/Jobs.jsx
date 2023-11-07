import { useLoaderData } from "react-router-dom";

const Jobs = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    return (
        <div>
            
        </div>
    );
};

export default Jobs;