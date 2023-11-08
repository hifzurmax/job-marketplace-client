import JobCard from "./JobCard";
import axios from "axios";
import { useEffect, useState } from "react";

const DigitalMarketing = ({ marketingCategory }) => {
  const [marketingJobs, setMarketingJobs] = useState([]);

  useEffect(() => {
    if (marketingCategory) {
      axios.get(`https://task-hub-server-ten.vercel.app/jobs/${marketingCategory}`)
        .then(res => {
            setMarketingJobs(res.data);
            console.log(res.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [marketingCategory]);

  return (
    <>
            <div className="my-20 grid md:grid-cols-2 gap-4">
                {
                    marketingJobs.map(job => <JobCard 
                        key={job._id}
                        job={job}
                        ></JobCard>)
                }
            </div>
        </>
  );
};

export default DigitalMarketing;