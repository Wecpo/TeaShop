const NavBar = () => {
     return (
          <nav className="bg-white border-gray-200 ">
               <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <div
                         className="hidden w-full md:block md:w-auto"
                         id="navbar-default"
                    >
                         <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                              <li>
                                   <a
                                        href="#"
                                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                        aria-current="page"
                                   >
                                        Главная
                                   </a>
                              </li>
                              <li>
                                   <a
                                        href="#"
                                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                   >
                                        О нас
                                   </a>
                              </li>
                              <li>
                                   <a
                                        href="#"
                                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                   >
                                        Корзина
                                   </a>
                              </li>
                         </ul>
                    </div>
               </div>
          </nav>
     );
};

export default NavBar;
