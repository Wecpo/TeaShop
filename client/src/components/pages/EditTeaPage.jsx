import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getTeaById, updateTea } from "../../store/tea";
import TextField from "../form/textField";
import { useEffect, useState } from "react";
import TextAreaField from "../form/textAreaField";
import SubmitButton from "../ui/SubmitButton";
import { validator } from "../../utils/validator";
import NotFoundPage from "./NotFoundPage";
import BackButton from "../ui/BackButton";

const EditTeaPage = () => {
     const { id } = useParams();
     const currentTea = useSelector(getTeaById(id));
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const [errors, setErrors] = useState({});

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

     const [data, setData] = useState({
          name: "",
          about: "",
          price: "",
          category: "",
          imageUrl: "",
     });

     const validate = () => {
          const errors = validator(data, validatorConfig);
          setErrors(errors);
          return Object.keys(errors).length === 0;
     };

     useEffect(() => {
          validate(); // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [data]);

     useEffect(() => {
          if (currentTea) {
               setData({
                    name: currentTea.name,
                    about: currentTea.about,
                    price: currentTea.price.toString(),
                    category: currentTea.category,
                    imageUrl: currentTea.image,
                    _id: currentTea._id,
               });
          }
     }, [currentTea]);

     const isValid = Object.keys(errors).length === 0;

     const handleSubmit = (e) => {
          e.preventDefault();
          const isValid = validate();
          if (!isValid) return;
          dispatch(
               updateTea({
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

     if (currentTea) {
          return (
               <>
                    <BackButton />
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
                         <SubmitButton isValid={isValid} body={`Обновить`} />
                    </form>
               </>
          );
     } else {
          return <NotFoundPage />;
     }
};

export default EditTeaPage;
