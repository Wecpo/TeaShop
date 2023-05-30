import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getTeaById, updateTea } from "../../store/tea";
import TextField from "../form/textField";
import { useEffect, useState } from "react";
import TextAreaField from "../form/textAreaField";

const EditTeaPage = () => {
     const { id } = useParams();
     const currentTea = useSelector(getTeaById(id));
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const [data, setData] = useState({
          name: ` `,
          about: ` `,
          price: ` `,
          category: ` `,
          imageUrl: ` `,
     });

     useEffect(() => {
          if (currentTea) {
               setData({
                    name: currentTea.name,
                    about: currentTea.about,
                    price: currentTea.price,
                    category: currentTea.category,
                    imageUrl: currentTea.image,
                    _id: currentTea._id,
               });
          }
     }, [currentTea]);

     const handleSubmit = (e) => {
          e.preventDefault();
          // const isValid = validate();
          // if (!isValid) return;
          console.log(data);
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
                    {" "}
                    <form onSubmit={handleSubmit}>
                         <TextField
                              label="Название чая"
                              name="name"
                              value={data.name}
                              onChange={handleChange}
                         ></TextField>
                         <TextAreaField
                              label="О чае"
                              name="about"
                              value={data.about}
                              onChange={handleChange}
                         ></TextAreaField>
                         <TextField
                              type="number"
                              label="Цена"
                              name="price"
                              value={data.price}
                              onChange={handleChange}
                         ></TextField>
                         <TextAreaField
                              label="Категория чая"
                              name="category"
                              value={data.category}
                              onChange={handleChange}
                         ></TextAreaField>
                         <TextAreaField
                              label="Ссылка на картинку чая"
                              name="imageUrl"
                              type="url"
                              value={data.imageUrl}
                              onChange={handleChange}
                         ></TextAreaField>
                         <button
                              type="submit"
                              //   disabled={!isValid}
                              className="btn btn-primary w-100 mx-auto"
                         >
                              Обновить
                         </button>
                    </form>{" "}
               </>
          );
     }
};

export default EditTeaPage;
