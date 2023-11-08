
const BidRequestsRow = () => {
    return (
        <tr className="h-28 border rounded-lg hover:border-y-[#02af74] hover:text-main hover:-translate-y-1 hover: duration-300" key={_id}>
            <td className="flex gap-4 items-center">
                <img className="w-14 h-14" src="https://preview.pichforest.com/jobvia/layouts/assets/images/featured-job/img-01.png" alt="Movie" />
                <div>
                    <h3 className="text-base font-semibold text-second hover:text-main"> {title}</h3>
                    <div className="flex gap-2 m-1 items-center">

                    </div>

                </div>
            </td>
            <td className="text-second">
                <p>{description.slice(0, 100)}...</p>
                <div className="flex gap-2 items-center">
                    <FaCalendarAlt></FaCalendarAlt><h2>Deadline: </h2> <h2 className="badge rounded-md bg-[rgba(4,133,101,.15)] text-[#048565]">{deadline}</h2> |  <FaMoneyCheckAlt className="text-[#74788d]"></FaMoneyCheckAlt>
                        <p className="text-[#74788d]">Price Range: ${maxPrice} - ${minPrice}</p>| <div className="badge rounded-md bg-[rgba(4,133,101,.15)] text-[#048565]">{category}</div>
                </div>
            </td>
            <td><Link to={`/myjobs/${_id}`}><button className="btn btn-xs">Update</button></Link></td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default BidRequestsRow;