import React, { useState } from "react";
import { useParams } from "react-router";
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";

const Login = () => {
     const { type } = useParams();
     const [formType, setFormType] = useState(
          type === "register" ? type : "login"
     );
     const toggleFormType = () => {
          setFormType((prevState) =>
               prevState === "register" ? "login" : "register"
          );
     };

     return (
          <div className="container mt-5">
               <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                         {formType === "register" ? (
                              <>
                                   <h3 className="m-4">Регистрация</h3>
                                   <RegisterPage />
                                   <p className="ml-5">
                                        Уже зарегестрированы?
                                        <a
                                             href="#/"
                                             className="underline m-4"
                                             role="button"
                                             onClick={toggleFormType}
                                        >
                                             Войти
                                        </a>
                                   </p>
                              </>
                         ) : (
                              <>
                                   <h3 className="m-4">Войти</h3>
                                   <LoginPage />
                                   <p className="ml-5">
                                        Еще не зарегестрированы?
                                        <a
                                             href="#/"
                                             className="underline m-4"
                                             role="button"
                                             onClick={toggleFormType}
                                        >
                                             Зарегестрироваться
                                        </a>
                                   </p>
                              </>
                         )}
                    </div>
               </div>
          </div>
     );
};
export default Login;
