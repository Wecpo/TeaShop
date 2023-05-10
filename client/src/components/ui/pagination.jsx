import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
     const pagesCount = Math.ceil(itemsCount / pageSize);
     const pages = _.range(1, pagesCount + 1);
     if (pagesCount === 1) return null;

     return (
          <nav>
               <ul className=" flex flex-center">
                    {pages.map((page) => (
                         <li key={page}>
                              <a
                                   className={
                                        Number(currentPage) === page
                                             ? "z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                             : "cursor-pointer px-6 py-2 leading-tight text-gray-500  bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                                   }
                                   onClick={() => {
                                        onPageChange(page);
                                   }}
                              >
                                   {page}
                              </a>
                         </li>
                    ))}
               </ul>
          </nav>
     );
};
Pagination.propTypes = {
     itemsCount: PropTypes.number.isRequired,
     pageSize: PropTypes.number,
     currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
     onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
