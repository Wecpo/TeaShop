import { NavLink } from "react-router-dom";

const Footer = () => {
     const currentYear = new Date().getFullYear();

     return (
          <footer className="bg-white rounded-lg shadow m-4 ">
               <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center ">
                         © {currentYear + ` `}
                         <NavLink
                              className="mr-4 hover:underline md:mr-6"
                              to={`/`}
                         >
                              TeaShop
                         </NavLink>
                         All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500  sm:mt-0">
                         <li>
                              <NavLink
                                   className="mr-4 hover:underline md:mr-6"
                                   to={`/about`}
                              >
                                   О нас
                              </NavLink>
                         </li>

                         <li>
                              <NavLink
                                   className="mr-4 hover:underline md:mr-6"
                                   to={`https://t.me/wecpo1337`}
                              >
                                   Контакты
                              </NavLink>
                         </li>
                    </ul>
               </div>
          </footer>
     );
};

export default Footer;
