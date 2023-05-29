import { useDispatch, useSelector } from "react-redux";
import { deleteTeaFromList, getTeaList } from "../../store/tea";
import Loader from "../ui/loader";
import BackButton from "../ui/BackButton";
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
               <BackButton />{" "}
               <ol type="1" className="m-5">
                    {teaList.map((tea) => (
                         <ol key={tea._id}>
                              <li>
                                   {tea.name}{" "}
                                   <button
                                        className="ml-10 bg-red-700"
                                        onClick={() => deleteTea(tea._id)}
                                   >
                                        Удалить
                                   </button>
                                   <NavLink
                                        to={`${tea._id}`}
                                        className="ml-10 bg-green-700"
                                   >
                                        Редактировать
                                   </NavLink>
                              </li>
                              <li>{tea.price} рублей</li>

                              <hr />
                         </ol>
                    ))}{" "}
               </ol>
          </>
     );
};

export default EditPage;
