import { FaGreaterThan } from "react-icons/fa";

const BidRequests = () => {
    return (
        <div className="overflow-x-auto max-w-6xl font-poppins mx-auto mb-16">
            <div className="text-white  bg-main py-10 rounded-t-lg">
                <h2 className="text-center text-3xl font-semibold">My Total Bid Requests:  </h2>
                <div className="flex justify-center mt-4 text-lg font-bold gap-2 items-center">
                    <h2>Home</h2><FaGreaterThan></FaGreaterThan> <h2>Profile</h2> <FaGreaterThan></FaGreaterThan><h2> My Bids</h2>
                </div>

            </div>

            <table className="table mt-16">
                {/* head */}

                <tbody>
                       hhhhhhhhhhhhh
                   

                </tbody>
            </table>
        </div>
    );
};

export default BidRequests;