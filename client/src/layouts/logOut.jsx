import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../store/users";
import { useNavigate } from "react-router";
import Loader from "../components/ui/Loader";

const LogOut = () => {
     const navigate = useNavigate();
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(logOut());
          localStorage.clear();
          navigate(`/`);
     }, []);
     return <Loader />;
};

export default LogOut;
