import MainPage from "./components/pages/MainPage";
import { useDispatch } from "react-redux";
import { loadTeaList } from "./store/tea";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/pages/NotFoundPage";
import ItemPage from "./components/ItemPage";
import CartPage from "./components/pages/CartPage";
import AboutPage from "./components/pages/AboutPage";

function App() {
     const dispatch = useDispatch();

     dispatch(loadTeaList());

     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/404" element={<NotFoundPage />} />
                    <Route path="/tea/:id" element={<ItemPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/about" element={<AboutPage />} />
               </Routes>
          </BrowserRouter>
     );
}

export default App;
