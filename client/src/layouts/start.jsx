import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../store/users";
import MainPage from "../components/pages/MainPage";
import Login from "./login";

const Start = () => {
     const isLoggedId = useSelector(getIsLoggedIn());
     if (isLoggedId) {
          return <MainPage />;
     } else {
          return <Login />;
     }
};

export default Start;
