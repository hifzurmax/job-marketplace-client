import { useContext, useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import BidRequestsRow from "./BidRequestsRow";

const BidRequests = () => {
    const [bidRequests, setbidRequests] = useState([]);
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bidrequests?email=${user.email}`
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



    return (
        <div className="overflow-x-auto max-w-6xl font-poppins mx-auto mb-16">
            <div className="text-white  bg-main py-10 rounded-t-lg">
                <h2 className="text-center text-3xl font-semibold">Total Bid Requests: {bidRequests.length} </h2>
                <div className="flex justify-center mt-4 text-lg font-bold gap-2 items-center">
                    <h2>Home</h2><FaGreaterThan></FaGreaterThan> <h2>Profile</h2> <FaGreaterThan></FaGreaterThan><h2> My Bids</h2>
                </div>

            </div>

            <table className="table mt-16">
                {/* head */}

                <tbody>
                    {
                        bidRequests.map(singleBid => <BidRequestsRow
                            key={singleBid._id}
                            singleBid={singleBid}
                        >
                        </BidRequestsRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BidRequests;