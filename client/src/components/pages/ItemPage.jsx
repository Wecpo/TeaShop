import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getTeaById } from "../../store/tea";
import Loader from "../ui/loader";
import BackButton from "../ui/BackButton";
import ToCartButton from "../ui/ToCartButton";

const ItemPage = () => {
     const { id } = useParams();
     const tea = useSelector(getTeaById(id));

     if (tea) {
          return (
               <div className="w-full max-w-sm bg-white border m-5 border-gray-200 rounded-lg shadow">
                    <BackButton />
                    <img
                         className="p-8 rounded-t-lg"
                         src={tea.image}
                         alt="tea image"
                    />
                    <div className="px-5 pb-5">
                         <h3>{tea.about}</h3>
                         <h1 className="text-xl font-semibold tracking-tight text-gray-900">
                              {tea.name}
                         </h1>

                         <div className="flex items-center justify-between mt-4 space-x-3 md:mt-6">
                              <span className="text-3xl font-bold text-gray-900">
                                   {tea.price}р
                              </span>
                              <ToCartButton id={tea._id} />
                         </div>
                    </div>
               </div>
          );
     } else return <Loader />;
};

export default ItemPage;
