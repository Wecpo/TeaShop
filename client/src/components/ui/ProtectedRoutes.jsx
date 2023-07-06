import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getIsAdmin } from "../../store/users";

const ProtectedRoute = ({ children, redirectPath = `/` }) => {
     const isAdmin = useSelector(getIsAdmin());
     if (!isAdmin) {
          return (
               <>
                    {alert(
                         `Для доступа к настройкам нужно обладать правами администратора, вы переадресованы на главную страницу.`
                    )}
                    <Navigate to={redirectPath} replace />
               </>
          );
     }

     return children;
};

ProtectedRoute.propTypes = {
     children: PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.node),
          PropTypes.node,
     ]),
};

export default ProtectedRoute;
