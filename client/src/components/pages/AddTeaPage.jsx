import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addTea } from "../../store/tea";
import TextField from "../form/textField";
import { useState } from "react";
import TextAreaField from "../form/textAreaField";

const AddTeaPage = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const [data, setData] = useState({
          name: ` `,
          about: ` `,
          price: ` `,
          category: ` `,
          image: ` `,
     });

     const handleSubmit = (e) => {
          e.preventDefault();
          // const isValid = validate();
          // if (!isValid) return;

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
                         name="image"
                         value={data.image}
                         onChange={handleChange}
                    ></TextAreaField>
                    <button
                         type="submit"
                         //   disabled={!isValid}
                         className="btn btn-primary w-100 mx-auto"
                    >
                         Добавить
                    </button>
               </form>{" "}
          </>
     );
};

export default AddTeaPage;
