
import { FaAngleDoubleRight, FaCalendarAlt, FaMoneyCheckAlt } from "react-icons/fa";
const WebDevelopmentCard = ({ job }) => {
    const { title, description, maxPrice, minPrice, deadline, category } = job;
    return (
        <div className="border rounded-lg hover:border hover:border-[#02af74] hover:-translate-y-1 hover: duration-300">
            <div className="flex">
                <div className="w-2/12 justify-start mt-6 ml-6">
                    <img className="w-14 h-14" src="https://preview.pichforest.com/jobvia/layouts/assets/images/featured-job/img-01.png" alt="Movie" />
                </div>
                <div className=" w-10/12 mt-4">
                    <h2 className="card-title text-second">{title}</h2>
                    <p className="text-[#74788d]">{description.slice(0, 50)}</p>
                    <div className="flex items-center gap-2">
                        <FaMoneyCheckAlt className="text-[#74788d]"></FaMoneyCheckAlt>
                        <p className="text-[#74788d]">Price Range: ${maxPrice} - ${minPrice}</p>
                    </div>
                    <div className="badge rounded-md bg-[rgba(4,133,101,.15)] text-[#048565]">{category}</div>
                </div>
            </div>
            <div className="flex gap-2 justify-between mt-6 p-4 items-center bg-[#F8F9FC]">
                <div  className="flex gap-2 items-center text-second">
                    <FaCalendarAlt></FaCalendarAlt><h2>Deadline: </h2> <h2 className="badge rounded-md bg-[rgba(4,133,101,.15)] text-[#048565]">{deadline}</h2>
                </div>
                <button className="flex items-center gap-2 text-second hover:text-main">Apply Now <FaAngleDoubleRight></FaAngleDoubleRight></button>
            </div>
        </div>
    );
};

export default WebDevelopmentCard;