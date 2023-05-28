import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCurrentUserData } from "../../store/users";
import Loader from "./loader";

const NavProfile = () => {
     const currentUser = useSelector(getCurrentUserData());
     const [isOpen, setOpen] = useState(false);
     const toggleMenu = () => {
          setOpen((prevState) => !prevState);
     };

     const toggleHidden = isOpen
          ? "z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
          : "z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ";

     if (!currentUser) return <Loader />;
     return (
          <nav className="bg-white border-gray-200 ">
               <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <div className="hidden w-full md:block md:w-auto">
                         <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                              <li>
                                   <button
                                        onClick={toggleMenu}
                                        className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                   >
                                        Профиль{" "}
                                        <svg
                                             className="w-5 h-5 ml-1"
                                             aria-hidden="true"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg"
                                        >
                                             <path
                                                  fillRule="evenodd"
                                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                  clipRule="evenodd"
                                             ></path>
                                        </svg>
                                   </button>
                                   {/* <!-- Dropdown menu --> */}
                                   <div className={toggleHidden}>
                                        <ul className="py-2 text-sm text-gray-700 ">
                                             <NavLink
                                                  to="/edit"
                                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                             >
                                                  Настройки
                                             </NavLink>
                                        </ul>
                                        <div className="py-1">
                                             <NavLink
                                                  to="/logout"
                                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                             >
                                                  Выйти
                                             </NavLink>
                                        </div>
                                   </div>
                              </li>
                         </ul>
                    </div>
               </div>
          </nav>
     );
};

export default NavProfile;
