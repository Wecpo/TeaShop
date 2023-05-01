import { useSelector } from "react-redux";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import ItemCard from "./ItemCard";
import { getTeaById, getTeaList } from "../../store/tea";
import { paginate } from "../../utils/paginate";
import Pagination from "../ui/pagination";
import { useEffect, useState } from "react";
import Loader from "../ui/loader";
import _ from "lodash";
import SortButton from "../ui/SortButton";
import Search from "../ui/search";

const MainPage = () => {
     const teaList = useSelector(getTeaList());
     const [currentPage, setCurrentPage] = useState(1);
     const pageSize = 3;
     const [isLoading, setIsloading] = useState(true);
     const [sortBy, setSortBy] = useState(``);
     const [searchQuery, setSearchQuery] = useState("");

     useEffect(() => {
          if (teaList) setIsloading(false);
     }, [teaList]);

     const handleSort = () => {
          setSortBy(
               sortBy.order === `asc`
                    ? { path: "price", order: "desc" }
                    : { path: "price", order: "asc" }
          );
     };

     const handlePageChange = (pageIndex) => {
          setCurrentPage(pageIndex);
     };

     const handleSearchQuery = ({ target }) => {
          setSearchQuery(target.value);
     };

     function filterUsers(data) {
          const filteredTea = searchQuery
               ? data.filter(
                      (tea) =>
                           tea.name
                                .toLowerCase()
                                .indexOf(searchQuery.toLowerCase()) !== -1
                 )
               : data;
          return filteredTea;
     }

     const filteredUsers = filterUsers(teaList);

     const getCount = (list) => {
          if (!isLoading) {
               return list.length;
          }
     };

     const sortedTea = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
     const count = getCount(sortedTea);
     const cropTea = paginate(filteredUsers, currentPage, pageSize);

     if (!isLoading) {
          return (
               <div className="bg-slate-100">
                    <h1 className="flex justify-center px-4 pt-4 mb-4">
                         Приветствуем Вас в нашем магазине TeaShop
                    </h1>
                    <NavBar />
                    <Search
                         placeholder={`Поиск по названию`}
                         handleSearchQuery={handleSearchQuery}
                         searchQuery={searchQuery}
                    />
                    <SortButton onSort={handleSort} />
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
