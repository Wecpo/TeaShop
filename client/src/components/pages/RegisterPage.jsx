// eslint-disable-next-line react-hooks/exhaustive-deps

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "../form/textField";
import RadioField from "../form/radioField";
import { validator } from "../../utils/validator";
import {
     authErrorReset,
     getAuthErrors,
     getIsLoggedIn,
     signUp,
} from "../../store/users";
import CheckBoxField from "../form/checkBoxField";
import { useNavigate } from "react-router";
import SubmitButton from "../ui/SubmitButton";

const RegisterPage = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const isLoggedIn = useSelector(getIsLoggedIn());
     const registerError = useSelector(getAuthErrors());
     const [data, setData] = useState({
          email: "",
          password: "",
          sex: "male",
          name: "",
          licence: false,
          isAdmin: false,
     });

     const [errors, setErrors] = useState({});
     const handleChange = (target) => {
          setData((prevState) => ({
               ...prevState,
               [target.name]: target.value,
          }));
     };

     const validatorConfig = {
          email: {
               isRequired: {
                    message: "Электронная почта обязательна для заполнения",
               },
               isEmail: {
                    message: "Email введен некорректно",
               },
          },
          name: {
               isRequired: {
                    message: "Имя обязательно для заполнения",
               },
               min: {
                    message: "Имя должно состоять минимум из 3 символов",
                    value: 3,
               },
          },
          password: {
               isRequired: {
                    message: "Пароль обязателен для заполнения",
               },
               isCapitalSymbol: {
                    message: "Пароль должен содержать хотя бы одну заглавную букву",
               },
               isContainDigit: {
                    message: "Пароль должен содержать хотя бы одно число",
               },
               min: {
                    message: "Пароль должен состоять минимум из 8 символов",
                    value: 8,
               },
          },
          licence: {
               isRequired: {
                    message: "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения",
               },
          },
     };

     const validate = () => {
          const errors = validator(data, validatorConfig);
          setErrors(errors);
          return Object.keys(errors).length === 0;
     };

     useEffect(() => {
          validate(); // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [data]);

     useEffect(() => {
          dispatch(authErrorReset()); // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     useEffect(() => {
          if (isLoggedIn) navigate(`/`); // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [isLoggedIn]);

     const isValid = Object.keys(errors).length === 0;

     const handleSubmit = (e) => {
          e.preventDefault();
          const isValid = validate();
          if (!isValid) return;
          const newData = {
               ...data,
          };
          dispatch(signUp(newData));
     };

     return (
          <form onSubmit={handleSubmit}>
               <TextField
                    label="Электронная почта"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
               />
               <TextField
                    label="Имя"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    error={errors.name}
               />
               <TextField
                    label="Пароль"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    error={errors.password}
               />
               <RadioField
                    options={[
                         { name: "Мужской", value: "male" },
                         { name: "Женский", value: "female" },
                    ]}
                    value={data.sex}
                    name="sex"
                    onChange={handleChange}
                    label="Выберите ваш пол"
               />
               <CheckBoxField
                    value={data.licence}
                    onChange={handleChange}
                    name="licence"
                    error={errors.licence}
               >
                    Подтвердить <a href="#/">лицензионное соглашение</a>
               </CheckBoxField>
               <CheckBoxField
                    value={data.isAdmin}
                    onChange={handleChange}
                    name="isAdmin"
                    error={errors.isAdmin}
               >
                    Получить права администратора
               </CheckBoxField>
               {registerError && (
                    <p className="ml-5 text-red-600">{registerError}</p>
               )}
               <SubmitButton isValid={isValid} />
          </form>
     );
};

export default RegisterPage;
