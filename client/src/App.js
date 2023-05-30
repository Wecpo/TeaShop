import { useDispatch } from "react-redux";
import { loadTeaList } from "./store/tea";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/pages/NotFoundPage";
import ItemPage from "./components/pages/ItemPage";
import CartPage from "./components/pages/CartPage";
import AboutPage from "./components/pages/AboutPage";
import Login from "./layouts/login";
import AppLoader from "./components/hoc/appLoader";
import LogOut from "./layouts/logOut";

import Start from "./layouts/start";
import EditPage from "./components/pages/EditPage";
import EditTeaPage from "./components/pages/EditTeaPage";
import AddTeaPage from "./components/pages/AddTeaPage";

function App() {
     const dispatch = useDispatch();

     dispatch(loadTeaList());

     return (
          <AppLoader>
               <BrowserRouter>
                    <Routes>
                         <Route path="/" element={<Start />} />
                         <Route path="/404" element={<NotFoundPage />} />
                         <Route path="/tea/:id" element={<ItemPage />} />
                         <Route path="/cart" element={<CartPage />} />
                         <Route path="/edit" element={<EditPage />} />
                         <Route path="/about" element={<AboutPage />} />
                         <Route path="/login" element={<Login />} />
                         <Route path="/logout" element={<LogOut />} />
                         <Route path="/edit/:id" element={<EditTeaPage />} />
                         <Route path="/addTea" element={<AddTeaPage />} />
                    </Routes>
               </BrowserRouter>
          </AppLoader>
     );
}

export default App;
