import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const [currentUser, setCurrentUser] = useState("")
    const user = JSON.parse(localStorage.getItem("userData"));

    useEffect(() => {
        setCurrentUser(user)
    }, [user])

    return (
        <header className='shadow sticky z-50 top-0 my-4'>
            <nav className='bg-black border-gray-200 px-4 lg:px-6 py-2.5'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                    <Link to="/" className='inline-flex items-center text-4xl font-bold text-white'>Cod<span className='text-3xl text-orange-600'><RxHamburgerMenu style={{ strokeWidth: "1px", marginTop: "10px" }} /></span>r</Link>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                        <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                            <li>
                                <NavLink
                                    className={({ isActive }) => `${isActive ? 'text-orange-600' : 'text-white'} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                    to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => `${isActive ? 'text-orange-600' : 'text-white'} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                    to="/contact">Contact</NavLink>
                            </li>
                            {currentUser ? (
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            `${isActive ? 'text-orange-600' : 'text-white'} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                        to="/login"
                                        onClick={() => {
                                            localStorage.removeItem("userData");
                                        }}
                                    >
                                        Logout
                                    </NavLink>
                                </li>
                            ) : (
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            `${isActive ? 'text-orange-600' : 'text-white'} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                        to="/login"
                                    >
                                        Admin login
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header