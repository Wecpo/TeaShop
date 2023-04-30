import React, { useState } from "react";
import { useParams } from "react-router";
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";
import BackButton from "../components/ui/BackButton";

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
                                   {" "}
                                   <BackButton />
                                   <h3 className="mb-4">Регистрация</h3>
                                   <RegisterPage />
                                   <p>
                                        Уже зарегестрированы?{" "}
                                        <a
                                             role="button"
                                             onClick={toggleFormType}
                                        >
                                             {" "}
                                             Войти
                                        </a>
                                   </p>
                              </>
                         ) : (
                              <>
                                   <BackButton />
                                   <h3 className="mb-4">Войти</h3>
                                   <LoginPage />
                                   <p>
                                        Еще не зарегестрированы?{" "}
                                        <a
                                             role="button"
                                             onClick={toggleFormType}
                                        >
                                             {" "}
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
