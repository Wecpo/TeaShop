import { useDispatch, useSelector } from "react-redux";
import { loadTeaList } from "./store/tea";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/pages/NotFoundPage";
import ItemPage from "./components/pages/ItemPage";
import CartPage from "./components/pages/CartPage";
import Login from "./layouts/Login";
import AppLoader from "./components/hoc/AppLoader";
import LogOut from "./layouts/LogOut";
import StartPage from "./layouts/StartPage";
import EditPage from "./components/pages/EditPage";
import EditTeaPage from "./components/pages/EditTeaPage";
import AddTeaPage from "./components/pages/AddTeaPage";
import Footer from "./components/ui/Footer";
import NavBar from "./components/ui/NavBar";
import ProtectedRoute from "./components/ui/ProtectedRoutes";
import { getIsLoggedIn } from "./store/users";

function App() {
     const dispatch = useDispatch();
     dispatch(loadTeaList());
     const isLoggedIn = useSelector(getIsLoggedIn());

     return (
          <AppLoader>
               <NavBar />
               <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/tea/:id" element={<ItemPage />} />
                    <Route
                         path="/cart"
                         element={isLoggedIn ? <CartPage /> : <StartPage />}
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
