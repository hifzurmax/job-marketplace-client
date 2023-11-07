import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData();
    const { _id, title, description, maxPrice, minPrice, deadline, category, image } = job;
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default JobDetails;