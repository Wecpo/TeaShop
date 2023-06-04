import React from "react";
import { NavLink } from "react-router-dom";
import ToCartButton from "../ui/CartButton";

const ItemCard = ({ teaList }) => {
     return teaList.map((tea) => (
          <div
               key={tea._id}
               className="bg-slate-50 border border-gray-200 rounded-lg shadow pt-10 m-5"
          >
               <div className="flex flex-col items-center pb-10">
                    <NavLink to={`/tea/${tea._id}`}>
                         <img
                              className="w-44 h-40 mb-3 rounded-lg shadow-lg"
                              src={tea.image}
                              alt="Здесь должна быть картинка чая"
                         />
                    </NavLink>
                    <h5 className="mb-1 text-xl font-medium text-gray-900">
                         {tea.name}
                    </h5>
                    <span className="m-5 text-m text-gray-700">
                         {tea.about}
                    </span>
                    <span className="text-xl text-black-600">{tea.price}р</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                         <NavLink
                              to={`/tea/${tea._id}`}
                              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
                         >
                              Подробнее
                         </NavLink>
                         <ToCartButton id={tea._id} />
                    </div>
               </div>
          </div>
     ));
};

export default ItemCard;
