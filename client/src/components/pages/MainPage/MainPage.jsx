import { useSelector } from "react-redux";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import ItemPage from "../ItemPage/ItemPage";
import { getTeaList } from "../../../store/tea";

const MainPage = () => {
     const teaList = useSelector(getTeaList());

     return (
          <>
               {" "}
               <h1>Приветствуем Вас в нашем магазине TeaShop</h1>
               <NavBar />
               <ItemPage teaList={teaList} />
               <Footer />
          </>
     );
};

export default MainPage;
