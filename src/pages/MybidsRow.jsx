import { FaCalendarAlt, FaMoneyCheckAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";

const MybidsRow = ({ singleBid }) => {
    const { jobTitle, emailBidder, deadlineBid } = singleBid;
    return (
        <tr className="h-28 border rounded-lg hover:border-y-[#02af74] hover:text-main hover:-translate-y-1 hover: duration-300">
            <td>
                    <h3 className="text-base font-semibold text-second hover:text-main"> {jobTitle}</h3> 
            </td>
            <td className="text-second">
                <div className="flex gap-2 items-center">
                    <FaCalendarAlt></FaCalendarAlt><h2>Deadline: </h2> <h2 className="badge rounded-md bg-[rgba(4,133,101,.15)] text-[#048565]">{deadlineBid}</h2> |  <FaMoneyCheckAlt className="text-[#74788d]"></FaMoneyCheckAlt>
                    <p className="text-[#74788d]">Email: {emailBidder}</p>| 
                    <div className="pl-2 py-1 rounded-md bg-[rgba(4,133,101,.15)] text-[#048565]"><h2>Status: <span className="bg-main rounded text-white px-2 py-2">pending</span></h2>
                    </div>
                </div>
            </td>
            <th>
                <button className="btn btn-sm bg-main text-white hover:text-second">Complete</button>
            </th>
        </tr>
    );
};

export default MybidsRow;