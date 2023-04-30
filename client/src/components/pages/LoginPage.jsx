import TextField from "../form/textField";
import CheckBoxField from "../form/checkBoxField";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/users";
import { validator } from "../../utils/validator";
import { useNavigate } from "react-router";

const LoginPage = () => {
     const [data, setData] = useState({
          email: "",
          password: "",
          stayOn: false,
     });
     const dispath = useDispatch();
     const navigate = useNavigate();
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
          },
          password: {
               isRequired: {
                    message: "Пароль обязателен для заполнения",
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
          dispath(login({ payload: data }));
          navigate(`/ `);
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
                    label="Пароль"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    error={errors.password}
               />
               <CheckBoxField
                    value={data.stayOn}
                    onChange={handleChange}
                    name="stayOn"
               >
                    Оставаться в системе
               </CheckBoxField>

               <button type="submit">Отправить</button>
          </form>
     );
};

export default LoginPage;
