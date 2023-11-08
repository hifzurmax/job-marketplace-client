import { FaCalendarAlt, FaEnvelope, FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BidRequestsRow = ({ singleBid }) => {
    const { _id, jobTitle, emailBidder, deadlineBid, bidPrice } = singleBid;
    return (
        <tr className="h-28 border rounded-lg hover:border-y-[#02af74] hover:text-main hover:-translate-y-1 hover: duration-300" key={_id}>
            <td className="text-second">
                <h2 className="text-base font-semibold text-second hover:text-main">{jobTitle}</h2>
                <div className="flex gap-2 items-center">
                    <FaCalendarAlt></FaCalendarAlt><h2>Deadline: </h2> 
                    <h2 className="badge rounded-md bg-[rgba(4,133,101,.15)] text-[#048565]">{deadlineBid}
                    </h2> |  
                    <FaMoneyCheckAlt className="text-[#74788d]"></FaMoneyCheckAlt>
                    <p className="text-[#74788d]">Bid Price: ${bidPrice}</p>|
                    <div className="badge rounded-md bg-[rgba(4,133,101,.15)] text-[#048565]">
                        <FaEnvelope className="text-[#74788d] mr-2"></FaEnvelope>
                        <h2>Employee Email: {emailBidder}</h2>
                    </div>| 
                    <div className="pl-2 py-1 rounded-md bg-[rgba(4,133,101,.15)] text-[#048565]"><h2>Status: <span className="bg-main rounded text-white px-2 py-2">In Progress</span></h2>
                    </div>
                </div>
            </td>
            <th>
                <Link><button className="btn mr-4 btn-xs">Accept</button></Link>
                <button className="btn btn-xs">Reject</button>
            </th>
        </tr>
    );
};

export default BidRequestsRow;