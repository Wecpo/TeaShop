import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import ItemPage from "../ItemPage/ItemPage";

const MainPage = () => {
     return (
          <>
               <NavBar />
               <h1>Приветствуем в нашем магазине TeaShop</h1>
               <ItemPage />
               <Footer />
          </>
     );
};

export default MainPage;
