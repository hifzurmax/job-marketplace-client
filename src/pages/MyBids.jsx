import { FaGreaterThan } from "react-icons/fa";
import MybidsRow from "./MybidsRow";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";

const MyBids = () => {
    const { user } = useContext(AuthContext)
    const [myBids, setMyBids] = useState([]);
    const url = `http://localhost:5000/mybids?email=${user.email}`;
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const data = response.data;
                setMyBids(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [url]);


    return (
        <div className="overflow-x-auto max-w-6xl font-poppins mx-auto mb-16">
            <div className="text-white  bg-main py-10 rounded-t-lg">
                <h2 className="text-center text-3xl font-semibold">My Total Bids: {myBids.length} </h2>
                <div className="flex justify-center mt-4 text-lg font-bold gap-2 items-center">
                    <h2>Home</h2><FaGreaterThan></FaGreaterThan> <h2>Profile</h2> <FaGreaterThan></FaGreaterThan><h2> My Bids</h2>
                </div>

            </div>

            <table className="table mt-16">
                {/* head */}

                <tbody>

                    {
                        myBids.map(singleBid => <MybidsRow
                            key={singleBid._id}
                            singleBid={singleBid}
                        >
                        </MybidsRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyBids;