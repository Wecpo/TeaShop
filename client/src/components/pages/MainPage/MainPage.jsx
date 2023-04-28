import { useSelector } from "react-redux";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import ItemPage from "../ItemPage/ItemPage";
import { getTeaList } from "../../../store/tea";
import { paginate } from "../../../utils/paginate";
import Pagination from "./pagination";
import { useEffect, useState } from "react";

const MainPage = () => {
     const teaList = useSelector(getTeaList());
     const [currentPage, setCurrentPage] = useState(1);
     const pageSize = 3;
     const [isLoading, setIsloading] = useState(true);

     useEffect(() => {
          if (teaList) setIsloading(false);
     }, [teaList]);

     const handlePageChange = (pageIndex) => {
          setCurrentPage(pageIndex);
     };

     const getCount = (list) => {
          if (!isLoading) {
               return list.length;
          }
     };

     const count = getCount(teaList);
     console.log(teaList);

     const cropTea = paginate(teaList, currentPage, pageSize);

     if (!isLoading) {
          return (
               <div className="bg-slate-100">
                    {" "}
                    <h1>Приветствуем Вас в нашем магазине TeaShop</h1>
                    <NavBar />
                    <ItemPage teaList={cropTea} />
                    <Pagination
                         itemsCount={count}
                         pageSize={pageSize}
                         currentPage={currentPage}
                         onPageChange={handlePageChange}
                    />
                    <Footer />
               </div>
          );
     }

     return `Loading`;
};

export default MainPage;
