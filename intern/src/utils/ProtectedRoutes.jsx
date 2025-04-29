// import {Outlet, Navigate} from "react-router-dom";

// const ProtectedRoutes = () => {
//         // const auth = localStorage.getItem("auth");
//         const user = JSON.parse(localStorage.getItem("userData"))
//         // const user = null;  
//         return user ? Outlet : <Navigate to="/login" />;
//     };

// export default ProtectedRoutes

import { Outlet, Navigate } from "react-router-dom";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const ProtectedRoutes = () => {
    const user = JSON.parse(localStorage.getItem("userData"));

    return user ?
        //   <><Header/> 
        <Outlet />
        //   <Footer/></> 
        : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;