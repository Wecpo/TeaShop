import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getTeaById } from "../../store/tea";
import ToCartButton from "../ui/CartButton";
import Button from "../ui/Button";
import NotFoundPage from "./NotFoundPage";

const ItemPage = () => {
     const { id } = useParams();
     const tea = useSelector(getTeaById(id));

     if (tea) {
          return (
               <div className="flex justify-center">
                    <div className="max-w-sm bg-white border p-1 m-7 border-gray-200 rounded-lg shadow">
                         <Button body={`Назад`} />
                         <img
                              className="p-8 rounded-t-lg"
                              src={tea.image}
                              alt="tea image"
                         />
                         <div>
                              <h1 className="text-xl font-bold tracking-tight text-gray-900">
                                   {tea.name}
                              </h1>
                              <h3 className="mb-4">{tea.about}</h3>
                              <span className="text-2xl font-bold text-gray-900">
                                   {tea.price}р
                              </span>
                              <div className="flex items-center justify-between mt-5 space-x-3 md:mt-6">
                                   <ToCartButton id={tea._id} />
                              </div>
                         </div>
                    </div>
               </div>
          );
     } else {
          return <NotFoundPage />;
     }
};

export default ItemPage;
