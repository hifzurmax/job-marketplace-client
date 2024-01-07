import axios from "axios";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaMoneyCheckAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";

const MybidsRow = ({ singleBid }) => {
    const { _id, jobTitle, emailBidder, deadlineBid } = singleBid;

    const [singleBidForStatus, setsingleBidForStatus] = useState('pending')
    const url = `https://task-hub-server-ten.vercel.app/bidstatus/${_id}`
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const data = response.data;
                setsingleBidForStatus(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [url]);
    const { status } = singleBidForStatus;
    // console.log(status);


    return (
        <tr className="h-28 border rounded-lg hover:border-y-[#02af74] hover:text-main hover:-translate-y-1 hover: duration-300" key={_id}>
            <td>
                <h3 className="text-base font-semibold text-second hover:text-main"> {jobTitle}</h3>
            </td>
            <td className="text-second">
                <div className="flex gap-2 items-center">
                    <FaCalendarAlt></FaCalendarAlt><h2>Deadline: </h2> <h2 className="badge rounded-md bg-[rgba(4,133,101,.15)] text-[#048565]">{deadlineBid}</h2> |  <FaMoneyCheckAlt className="text-[#74788d]"></FaMoneyCheckAlt>
                    <p className="text-[#74788d]">Email: {emailBidder}</p>|
                    <div className="pl-2 py-1 rounded-md bg-[rgba(4,133,101,.15)] text-[#048565]">

                        <h2 >Status: 
                            {
                                status === 'accept' ? (
                                    <span className="bg-main ml-2 rounded text-white px-2 py-2">In Progress</span>
                                ) : status === 'reject' ? (
                                    <span className="bg-main ml-2 rounded text-white px-2 py-2">Canceled</span>
                                ) : (
                                    <span className="bg-main ml-2 rounded text-white px-2 py-2">Pending</span>
                                )
                            }
                        </h2>
                    </div>
                </div>
            </td>
            <th>
                {   status === 'accept' ? (
                    <button className="btn btn-sm bg-main text-white hover:text-second">Complete</button>) : <></>
                }
            </th>
        </tr>
    );
};

export default MybidsRow;