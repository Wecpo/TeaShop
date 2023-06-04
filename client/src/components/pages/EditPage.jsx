import { useDispatch, useSelector } from "react-redux";
import { deleteTeaFromList, getTeaList } from "../../store/tea";
import Loader from "../ui/Loader";
import useCart from "../../hooks/useCart";
import { NavLink } from "react-router-dom";

const EditPage = () => {
     const teaList = useSelector(getTeaList());
     const dispatch = useDispatch();
     const { removeFromCart } = useCart();
     if (teaList === null) {
          return <Loader />;
     }
     const deleteTea = (id) => {
          removeFromCart(id);
          dispatch(deleteTeaFromList(id));
     };
     return (
          <>
               <div className="flex justify-center m-2">
                    <NavLink
                         to={`/addTea`}
                         className="text-white bg-green-500 m-5 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                         Добавить новый чай
                    </NavLink>
               </div>
               <hr />
               <div className="m-5">
                    {teaList.map((tea) => (
                         <div key={tea._id}>
                              <div className="flex justify-center">
                                   {tea.name} - {tea.price} рублей
                              </div>
                              <div className="flex justify-center">
                                   <button
                                        className="text-white bg-red-500 m-5 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                        onClick={() => deleteTea(tea._id)}
                                   >
                                        Удалить
                                   </button>
                                   <NavLink
                                        to={`${tea._id}`}
                                        className="text-white bg-blue-500 m-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                   >
                                        Редактировать
                                   </NavLink>
                              </div>
                              <hr />
                         </div>
                    ))}
               </div>
          </>
     );
};

export default EditPage;
