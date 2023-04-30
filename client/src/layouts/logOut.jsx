import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../store/users";
import { useNavigate } from "react-router";
import Loader from "../components/ui/loader";
const LogOut = () => {
     const navigate = useNavigate();
     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(logOut());
          navigate(`/`);
     }, []);
     return <Loader />;
};

export default LogOut;
