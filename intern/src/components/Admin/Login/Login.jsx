import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Admin from '../Admin/Admin';
import { db } from "../../../Config/firebase";
import { collection, addDoc, getDoc, doc, getDocs, query, where } from "firebase/firestore"; // Firestore
// OR for Realtime Database:
// import { ref, set } from "firebase/database";

const Login = () => {
    const navigate = useNavigate();

    const getData = async (e) => {
        e.preventDefault();
        try {
            // Get input values from your form
              const email = e.target.email.value; 
              const password = e.target.password.value;

            // Query Firestore for matching document

            //   const usersRef = collection(db, "users");
            //   const q = query(usersRef, where("email", "==", email), where("password", "==", password));
            //   const querySnapshot = await getDocs(q);

            const usersRef = collection(db, "credentials");
            console.log(usersRef)
            const docsRef = await getDocs(usersRef);
            let userData = docsRef.docs[0].data();
            console.log(userData)

              if (userData.email === email && userData.password === password) {
                console.log("Login successful");
                navigate("/admin");
              }

        } catch (e) {
            console.error("Error checking credentials: ", e);
            //   alert("An error occurred");
        }
    };

    // Realtime Database Example:
    // const addData = () => {
    //   set(ref(db, 'users/' + Date.now()), {
    //     name: "Jane Doe",
    //     email: "jane@example.com"
    //   });
    // };

    return (
        <div> <div className="min-h-screen bg-black">
            <div className="flex items-center justify-center p-4">
                <form onSubmit={getData} className="w-full max-w-md bg-neutral-950 rounded-xl shadow-md border-2 border-orange-600 overflow-hidden p-8 mt-30">
                    <h2 className="text-2xl font-bold text-center text-white mb-6"><span className='text-orange-600'>A</span>dmin Login</h2>

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                            Username
                        </label>
                        <input
                            required
                            type="text"
                            id="email"
                            placeholder="Enter admin username"
                            className="placeholder:text-gray-700 w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                        />
                    </div>

                    <div className="mb-8">
                        <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                            Password
                        </label>
                        <input
                            required
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="placeholder:text-gray-700 w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg border border-orange-600 shadow-md shadow-orange-600 transition duration-200 hover:shadow-none"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div></div>
    )
}

export default Login