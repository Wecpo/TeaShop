import TextField from "../form/textField";
import CheckBoxField from "../form/checkBoxField";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors, login } from "../../store/users";
import { validator } from "../../utils/validator";
import { useNavigate } from "react-router";
import SubmitButton from "../ui/SubmitButton";

const LoginPage = () => {
     const [data, setData] = useState({
          email: "",
          password: "",
          stayOn: false,
     });
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const [errors, setErrors] = useState({});
     const loginError = useSelector(getAuthErrors());

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
          dispatch(login({ payload: data }));
          navigate(`/`);
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
               {loginError && <p className="ml-5 text-red-600">{loginError}</p>}
               <SubmitButton isValid={isValid} />
          </form>
     );
};

export default LoginPage;
