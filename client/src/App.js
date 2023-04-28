import MainPage from "./components/pages/MainPage/MainPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTeaList } from "./store/tea";

function App() {
     const dispatch = useDispatch();

     dispatch(loadTeaList());

     return <MainPage />;
}

export default App;
