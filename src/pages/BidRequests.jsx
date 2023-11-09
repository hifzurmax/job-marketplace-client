import { useContext, useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import BidRequestsRow from "./BidRequestsRow";
import { Helmet } from "react-helmet-async";

const BidRequests = () => {
    const [bidRequests, setbidRequests] = useState([]);
    const { user } = useContext(AuthContext)
    const url = `https://task-hub-server-ten.vercel.app/bidrequests?email=${user.email}`
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const data = response.data;
                setbidRequests(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [url]);

    const handleAccept = id => {
        axios.patch(`https://task-hub-server-ten.vercel.app/accept/${id}`, {status: 'accept'})
        .then(res => {
            const data = res.data;
            console.log(data);
            const remaining = bidRequests.filter(bid => bid._id !== id);
            const updatedStatus = bidRequests.find(bid => bid._id === id);
            updatedStatus.status = 'accept';
            const newStatus = [updatedStatus, ...remaining];
            setbidRequests(newStatus)
        })
    }
    const handleReject = id => {
        axios.patch(`https://task-hub-server-ten.vercel.app/accept/${id}`, {status: 'reject'})
        .then(res => {
            const data = res.data;
            console.log(data);
            const remaining = bidRequests.filter(bid => bid._id !== id);
            const updatedStatus = bidRequests.find(bid => bid._id === id);
            updatedStatus.status = 'reject';
            const newStatus = [updatedStatus, ...remaining];
            setbidRequests(newStatus)
        })
    }

    return (
        <div className="overflow-x-auto max-w-6xl mt-4 font-poppins mx-auto mb-16">
            <Helmet>
                <title>TaskHub | Bid Requests</title>
            </Helmet>
            <div className="text-white  bg-main py-10 rounded-t-lg">
                <h2 className="text-center text-3xl font-semibold">Total Bid Requests: {bidRequests.length} </h2>
                <div className="flex justify-center mt-4 text-lg font-bold gap-2 items-center">
                    <h2>Home</h2><FaGreaterThan></FaGreaterThan> <h2>Profile</h2> <FaGreaterThan></FaGreaterThan><h2>Bid Requests</h2>
                </div>

            </div>

            <table className="table mt-16">
                {/* head */}

                <tbody>
                    {
                        bidRequests.map(singleBid => <BidRequestsRow
                            key={singleBid._id}
                            singleBid={singleBid}
                            handleAccept={handleAccept}
                            handleReject={handleReject}
                        >
                        </BidRequestsRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BidRequests;