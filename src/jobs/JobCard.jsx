
import { FaAngleDoubleRight, FaCalendarAlt, FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const WebDevelopmentCard = ({ job }) => {
    const { _id, title, description, maxPrice, minPrice, deadline, category, image } = job;
    return (
        <div className="border rounded-lg hover:border hover:border-[#02af74] hover:-translate-y-1 hover: duration-300">
            <div className="flex">
                <div className="w-2/12 justify-start mt-6 ml-6">
                    <img className="w-14 h-14" src={image} alt="Movie" />
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
                <div className="flex gap-2 items-center text-second">
                    <FaCalendarAlt></FaCalendarAlt><h2>Deadline: </h2> <h2 className="badge rounded-md bg-[rgba(4,133,101,.15)] text-[#048565]">{deadline}</h2>
                </div>
                <Link to={`/jobdetails/${_id}`}><button className="flex items-center gap-2 text-second hover:text-main">Job Details <FaAngleDoubleRight></FaAngleDoubleRight></button></Link>
            </div>
        </div>
    );
};

export default WebDevelopmentCard;