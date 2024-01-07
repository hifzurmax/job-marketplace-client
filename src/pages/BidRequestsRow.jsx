import { useEffect, useState } from "react";
import { FaCalendarAlt, FaEnvelope, FaMoneyCheckAlt } from "react-icons/fa";

const BidRequestsRow = ({ singleBid, handleAccept, handleReject }) => {
    const { _id, jobTitle, emailBidder, deadlineBid, bidPrice, status } = singleBid;
    const [buttonsVisible, setButtonsVisible] = useState(true);


    useEffect(() => {
        const savedButtonsVisible = localStorage.getItem(`buttonsVisible_${_id}`);
        if (savedButtonsVisible !== null) {
            setButtonsVisible(savedButtonsVisible === "true");
        }
    }, [_id]);


    const handleAcceptClick = () => {
        handleAccept(_id);
        setButtonsVisible(false);
        localStorage.setItem(`buttonsVisible_${_id}`, "false");
    };

    const handleRejectClick = () => {
        handleReject(_id);
        setButtonsVisible(false);
        localStorage.setItem(`buttonsVisible_${_id}`, "false");
    };


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
                    <div className="pl-2 py-1 rounded-md bg-[rgba(4,133,101,.15)] text-[#048565]">
                        <div className="flex items-center px-1">Status:
                            <h2 className="bg-main rounded ml-2 text-white px-2 py-2">

                                {
                                    status === 'accept' ? (
                                        <span>In Progress</span>
                                    ) : status === 'reject' ? (
                                        <span>Rejected</span>
                                    ) : (
                                        <span>Pending</span>
                                    )
                                }

                            </h2>
                        </div>
                    </div>
                </div>
            </td>
            <th>
                {
                    buttonsVisible && (
                        <>
                            <button
                                onClick={() => handleAcceptClick(_id)}
                                className="btn btn-sm bg-main text-white hover:text-second"
                            >
                                Accept
                            </button>
                            <button
                                onClick={() => handleRejectClick(_id)}
                                className="btn btn-sm ml-2 bg-main text-white hover:text-second">
                                Reject
                            </button>

                        </>
                    )}

            </th>
        </tr>
    );
};

export default BidRequestsRow;