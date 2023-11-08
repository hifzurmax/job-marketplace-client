import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();


    if(loading){
        return <div className="flex justify-center items-center h-96"><span className="loading loading-spinner loading-lg"></span></div>
    }


    // app.get('/jobs/:category', async (req, res) => {
    //     const category = req.params.category;
    //     const query = { category: category };
    //     const result = await jobsCollection.find(query).toArray();
    //     res.send(result);
    // });
    


    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;