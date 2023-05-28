import { useSelector } from "react-redux";
import { getTeaList } from "../../store/tea";
import Loader from "../ui/loader";
import BackButton from "../ui/BackButton";
import teaService from "../../services/tea.service";
import useCart from "../../hooks/useCart";

const EditPage = () => {
     const teaList = useSelector(getTeaList());
     const { removeFromCart } = useCart();
     if (teaList === null) {
          return <Loader />;
     }
     const deleteTea = (id) => {
          removeFromCart(id);
          teaService.delete(id);
     };
     return (
          <>
               <BackButton />{" "}
               <ol type="1" className="m-5">
                    {teaList.map((tea) => (
                         <>
                              <li>
                                   {tea.name}{" "}
                                   <button
                                        className="ml-10 bg-red-700"
                                        onClick={() => deleteTea(tea._id)}
                                   >
                                        Удалить
                                   </button>
                                   <button className="ml-10 bg-green-700">
                                        Редактировать
                                   </button>
                              </li>
                              <li>{tea.price} рублей</li>

                              <hr />
                         </>
                    ))}{" "}
               </ol>
          </>
     );
};

export default EditPage;
