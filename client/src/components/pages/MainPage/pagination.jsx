import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
     const pagesCount = Math.ceil(itemsCount / pageSize);
     const pages = _.range(1, pagesCount + 1);

     if (pagesCount === 1) return null;
     return (
          <nav aria-label="Page navigation example">
               <ul className="inline-flex -space-x-px">
                    {pages.map((page) => (
                         <li
                              key={page}
                              className={
                                   "page-item " +
                                   (page === currentPage ? "active" : "")
                              }
                         >
                              <a
                                   className="cursor-pointer px-6 py-2 leading-tight text-gray-500  bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
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
     pageSize: PropTypes.number.isRequired,
     currentPage: PropTypes.number.isRequired,
     onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
