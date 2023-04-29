import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getTeaById } from "../store/tea";
import Loader from "./ui/loader";

const ItemPage = () => {
     const { id } = useParams();
     const tea = useSelector(getTeaById(id));

     if (tea) {
          return (
               <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
                    <img
                         className="p-8 rounded-t-lg"
                         src={tea.image}
                         alt="tea image"
                    />

                    <div className="px-5 pb-5">
                         <a href="#">
                              <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                   {tea.name}
                              </h1>
                         </a>

                         <div className="flex items-center justify-between">
                              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                   {tea.price}р
                              </span>
                              <a
                                   href="#"
                                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                   Добавить в корзину
                              </a>
                         </div>
                    </div>
               </div>
          );
     } else return <Loader />;
};

export default ItemPage;
