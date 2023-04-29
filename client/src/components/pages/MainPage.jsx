import { useSelector } from "react-redux";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import ItemCard from "./ItemCard";
import { getTeaList } from "../../store/tea";
import { paginate } from "../../utils/paginate";
import Pagination from "../ui/pagination";
import { useEffect, useState } from "react";
import Loader from "../ui/loader";

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
     const cropTea = paginate(teaList, currentPage, pageSize);

     if (!isLoading) {
          return (
               <div className="bg-slate-100">
                    <h1 className=" flex justify-center px-4 pt-4 mb-4">
                         Приветствуем Вас в нашем магазине TeaShop
                    </h1>
                    <NavBar />
                    <ItemCard teaList={cropTea} />
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

     return <Loader />;
};

export default MainPage;
