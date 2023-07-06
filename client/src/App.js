import { useDispatch, useSelector } from "react-redux";
import { loadTeaList } from "./store/tea";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/pages/NotFoundPage";
import ItemPage from "./components/pages/ItemPage";
import CartPage from "./components/pages/CartPage";
import Login from "./layouts/Login";
import AppLoader from "./components/hoc/AppLoader";
import LogOut from "./layouts/LogOut";
import EditPage from "./components/pages/EditPage";
import EditTeaPage from "./components/pages/EditTeaPage";
import AddTeaPage from "./components/pages/AddTeaPage";
import Footer from "./components/ui/Footer";
import NavBar from "./components/ui/NavBar";
import ProtectedRoute from "./components/ui/ProtectedRoutes";
import { getIsLoggedIn } from "./store/users";
import MainPage from "./components/pages/MainPage";
import LoginPage from "./components/pages/LoginPage";
import { useEffect } from "react";

function App() {
     const dispatch = useDispatch();
     const isLoggedIn = useSelector(getIsLoggedIn());
     useEffect(() => {
          dispatch(loadTeaList()); // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     return (
          <AppLoader>
               <NavBar />
               <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/tea/:id" element={<ItemPage />} />

                    <Route
                         path="/cart"
                         element={isLoggedIn ? <CartPage /> : <LoginPage />}
                    />
                    <Route
                         path="/edit"
                         element={
                              <ProtectedRoute>
                                   <EditPage />
                              </ProtectedRoute>
                         }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<LogOut />} />
                    <Route path="/edit/:id/" element={<EditTeaPage />} />
                    <Route path="/addTea" element={<AddTeaPage />} />
               </Routes>
               <Footer />
          </AppLoader>
     );
}

export default App;
