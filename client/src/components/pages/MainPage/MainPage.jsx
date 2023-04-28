import { useSelector } from "react-redux";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import ItemPage from "../ItemPage/ItemPage";
import { getTeaList } from "../../../store/tea";

const MainPage = () => {
     const teaList = useSelector(getTeaList());

     return (
          <>
               <NavBar />
               <h1>Приветствуем в нашем магазине TeaShop</h1>
               <ItemPage teaList={teaList} />
               <Footer />
          </>
     );
};

export default MainPage;
