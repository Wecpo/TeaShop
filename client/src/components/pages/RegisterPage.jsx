import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TextField from "../form/textField";
import RadioField from "../form/radioField";
import { validator } from "../../utils/validator";
import { signUp } from "../../store/users";
import CheckBoxField from "../form/checkBoxField";
import { useNavigate } from "react-router";

const RegisterPage = () => {
     const dispatch = useDispatch();
     const [data, setData] = useState({
          email: "",
          password: "",

          sex: "male",
          name: "",

          licence: false,
     });
     const [errors, setErrors] = useState({});
     const navigate = useNavigate();
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
                    message: "Имя должено состаять миниму из 3 символов",
                    value: 3,
               },
          },
          password: {
               isRequired: {
                    message: "Пароль обязательна для заполнения",
               },
               isCapitalSymbol: {
                    message: "Пароль должен содержать хотя бы одну заглавную букву",
               },
               isContainDigit: {
                    message: "Пароль должен содержать хотя бы одно число",
               },
               min: {
                    message: "Пароль должен состаять миниму из 8 символов",
                    value: 8,
               },
          },
          licence: {
               isRequired: {
                    message: "Вы не можете использовать наш сервис без подтреврждения лицензионного соглашения",
               },
          },
     };
     useEffect(() => {
          validate();
     }, [data]);

     const validate = () => {
          const errors = validator(data, validatorConfig);
          setErrors(errors);
          return Object.keys(errors).length === 0;
     };

     const isValid = Object.keys(errors).length === 0;

     const handleSubmit = (e) => {
          e.preventDefault();
          const isValid = validate();
          if (!isValid) return;
          const newData = {
               ...data,
          };

          navigate(`/`);
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
                         { name: "Другое", value: "other" },
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
                    Подтвердить <a>лицензионное соглашение</a>
               </CheckBoxField>
               <button type="submit">Отправить</button>
          </form>
     );
};

export default RegisterPage;
