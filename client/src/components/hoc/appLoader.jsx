import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
     getIsLoggedIn,
     getUsersLoadingStatus,
     loadUsersList,
} from "../../store/users";
import { useEffect } from "react";
import { loadTeaList } from "../../store/tea";
import Loader from "../ui/Loader";

const AppLoader = ({ children }) => {
     const dispatch = useDispatch();
     const isLoggedIn = useSelector(getIsLoggedIn());
     const isLoading = useSelector(getUsersLoadingStatus());

     useEffect(() => {
          dispatch(loadTeaList);
          if (isLoggedIn) {
               dispatch(loadUsersList());
          }
     }, [isLoggedIn]);

     if (isLoading) {
          return <Loader />;
     }

     return children;
};

AppLoader.propTypes = {
     children: PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.node),
          PropTypes.node,
     ]),
};
export default AppLoader;
