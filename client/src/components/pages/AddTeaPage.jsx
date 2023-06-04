import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import TextField from "../form/textField";
import { useState, useEffect } from "react";
import TextAreaField from "../form/textAreaField";
import SubmitButton from "../ui/SubmitButton";
import { validator } from "../../utils/validator";
import { addTea } from "../../store/tea";

const AddTeaPage = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const [errors, setErrors] = useState({});

     const [data, setData] = useState({
          name: "",
          about: "",
          price: "",
          category: "",
          imageUrl: "",
     });
     const validatorConfig = {
          about: {
               isRequired: {
                    message: "Введите короткое описание",
               },
          },
          name: {
               isRequired: {
                    message: "Название обязательно для заполнения",
               },
               min: {
                    message: "Название должено состоять минимум из 3 символов",
                    value: 3,
               },
          },
          price: {
               isRequired: {
                    message: "Цена обязательна для заполнения",
               },
          },
          category: {
               isRequired: {
                    message: "Категория обязательна для заполнения",
               },
          },
          imageUrl: {
               isRequired: {
                    message: "Вставьте ссылку на изображение",
               },
          },
     };

     const validate = () => {
          const errors = validator(data, validatorConfig);
          setErrors(errors);
          return Object.keys(errors).length === 0;
     };

     useEffect(() => {
          validate();
     }, [data]);

     const isValid = Object.keys(errors).length === 0;

     const handleSubmit = (e) => {
          e.preventDefault();
          const isValid = validate();
          if (!isValid) return;
          dispatch(
               addTea({
                    ...data,
               })
          );
          navigate(-1);
     };

     const handleChange = (target) => {
          setData((prevState) => ({
               ...prevState,
               [target.name]: target.value,
          }));
     };

     return (
          <>
               <form onSubmit={handleSubmit}>
                    <TextField
                         label="Название чая"
                         name="name"
                         value={data.name}
                         onChange={handleChange}
                         error={errors.name}
                    ></TextField>
                    <TextAreaField
                         label="О чае"
                         name="about"
                         value={data.about}
                         onChange={handleChange}
                         error={errors.about}
                    ></TextAreaField>
                    <TextField
                         label="Цена"
                         name="price"
                         type="number"
                         value={data.price}
                         onChange={handleChange}
                         error={errors.price}
                    ></TextField>
                    <TextAreaField
                         label="Категория чая"
                         name="category"
                         value={data.category}
                         onChange={handleChange}
                         error={errors.category}
                    ></TextAreaField>
                    <TextAreaField
                         label="Ссылка на картинку чая"
                         name="imageUrl"
                         type="url"
                         value={data.imageUrl}
                         onChange={handleChange}
                         error={errors.imageUrl}
                    ></TextAreaField>
                    <SubmitButton isValid={isValid} />
               </form>
          </>
     );
};

export default AddTeaPage;
