import React, { useState, useEffect } from 'react';
import useFetch from '../../configuration/service/useFetch';
import { Link } from 'react-router-dom';
import { API_URL } from '../../configuration/config';
import { FaUmbrella } from "react-icons/fa";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const { data: categoriesData } = useFetch(`${API_URL}/categories`);

    useEffect(() => {
        if (categoriesData) {
            setCategories(categoriesData);
        }
    }, [categoriesData]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-indigo border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 left-0 w-full z-50">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-1">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="src\assets\images\LogoBgAzul.svg" className="md:h-16 lg:h-16 sm:h-8" alt="Mon Petit Parapluie Logo" />
                </Link>
                <button
                    data-collapse-toggle="navbar-dropdown"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-dropdown"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-indigo dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-beige-bg bg-beige-bg rounded md:bg-transparent md:text-beige-bg md:p-0 md:dark:text-beige-bg dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">El Proyecto</a>
                        </li>
                        <li className='relative'>
                            <button
                                id="dropdownNavbarLink"
                                data-dropdown-toggle="dropdownNavbar"
                                className="flex items-center justify-between w-full py-2 px-3 text-beige-bg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-beige-bg md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                onClick={toggleDropdown}
                            >   Bordados
                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            {isDropdownOpen && (
                                <div id="dropdownNavbar" className="absolute mt-2 left-0 z-10 font-normal bg-beige-bg divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-full left-0">
                                    <ul className="py-2 text-sm text-indigo dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        {categories.map(category => (
                                            <li key={category.id}>
                                                <a href="#" className="block px-4 py-2 hover:bg-indigo hover:text-beige-bg dark:hover:bg-gray-600 dark:hover:text-beige-bg">{category}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-beige-bg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-beige-bg md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">¿Qué te bordo?</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-beige-bg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-beige-bg md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Mi Paraguas</a>
                        </li>
                        <li className="flex items-center">
                        <Link to="/form">
                             <FaUmbrella className="w-6 h-6 text-beige-bg dark:text-white" aria-hidden="true" /> 
                         </Link>
                            <svg className="w-6 h-6 text-beige-bg dark:text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;



