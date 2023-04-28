// import { Link } from "react-router-dom";
import React from "react";

const ItemPage = ({ teaList }) => {
     console.log(teaList);
     if (teaList === null) {
          return `loading`;
     }
     return teaList.map((tea) => (
          <div key={tea._id}>
               {" "}
               <a href="">
                    {tea.name} - {tea.price} р
               </a>{" "}
          </div>
     ));
};

export default ItemPage;
