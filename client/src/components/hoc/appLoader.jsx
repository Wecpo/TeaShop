import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
     getIsLoggedIn,
     getUsersLoadingStatus,
     loadUsersList,
} from "../../store/users";
import Loader from "../ui/loader";

const AppLoader = ({ children }) => {
     const dispatch = useDispatch();
     const isLoggedIn = useSelector(getIsLoggedIn());
     const usersStatusLoading = useSelector(getUsersLoadingStatus());
     useEffect(() => {
          if (isLoggedIn) {
               dispatch(loadUsersList());
          }
     }, [isLoggedIn]);
     if (usersStatusLoading) return <Loader />;
     return children;
};

AppLoader.propTypes = {
     children: PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.node),
          PropTypes.node,
     ]),
};
export default AppLoader;
