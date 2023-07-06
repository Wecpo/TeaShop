import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUserData, getIsLoggedIn } from "../../store/users";

const NavBar = () => {
     const currentUser = useSelector(getCurrentUserData());
     const itemsCount = currentUser?.cart.length;
     const isLoggedIn = useSelector(getIsLoggedIn());

     return (
          <>
               <nav className="bg-slate-100 border-gray-200 flex flex-wrap items-center justify-center">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-7">
                         <div className="w-full ">
                              <ul className="font-medium bg-slate-100 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-slate-100">
                                   <li>
                                        <NavLink
                                             to={`/`}
                                             className="block py-2 pl-3 pr-4 bg-slate-100 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                                        >
                                             Главная
                                        </NavLink>
                                   </li>
                                   {isLoggedIn ? (
                                        <>
                                             <li>
                                                  <NavLink
                                                       to="/edit"
                                                       className="block py-2 pl-3 pr-4 bg-slate-100 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                                                  >
                                                       Настройки
                                                  </NavLink>
                                             </li>
                                             <li>
                                                  <NavLink
                                                       to="/logout"
                                                       className="block py-2 pl-3 pr-4 bg-slate-100 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                                                  >
                                                       Выйти
                                                  </NavLink>
                                             </li>{" "}
                                             <li className="relative inline-flex items-center px-4 bg-slate-100 text-m font-medium text-center text-black rounded-lg flex justify-end">
                                                  <NavLink
                                                       to={`/cart`}
                                                       className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  md:p-0"
                                                  >
                                                       Корзина
                                                       <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2">
                                                            {itemsCount}
                                                       </div>
                                                  </NavLink>
                                             </li>
                                        </>
                                   ) : (
                                        <li>
                                             <NavLink
                                                  to="/login"
                                                  className="block py-2 pl-3 pr-4 bg-slate-100 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                                             >
                                                  Войти
                                             </NavLink>
                                        </li>
                                   )}
                              </ul>
                         </div>
                    </div>
               </nav>
               <hr />
          </>
     );
};

export default NavBar;
