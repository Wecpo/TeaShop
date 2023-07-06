import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../store/users";
import { useNavigate } from "react-router";

const LogOut = () => {
     const navigate = useNavigate();
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(logOut());
          localStorage.clear();
          navigate(`/`); // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);
};

export default LogOut;
