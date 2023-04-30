import { useSelector } from "react-redux";
import BackButton from "../ui/BackButton";
import { getCurrentUserData } from "../../store/users";
import { getTeaList } from "../../store/tea";
import Loader from "../ui/loader";
import ItemCard from "./ItemCard";

const CartPage = () => {
     const currentUser = useSelector(getCurrentUserData());
     const teaList = useSelector(getTeaList());

     if (currentUser.cart.length === 0) {
          return (
               <>
                    {" "}
                    <BackButton />
                    <hr />
                    <h1>Упс, в вашей корзине пусто {`:(`}</h1>
               </>
          );
     }

     const getTeaFromIds = (teaList, ids) => {
          return ids.map((id) => {
               return teaList.filter((tea) => tea._id === id);
          });
     };

     const getCartPrice = (cart) => {
          let sum = 0;
          cart.map((item) => {
               sum += item[0].price;
               return sum;
          });
          return sum;
     };

     if (teaList !== null) {
          const teaInCart = getTeaFromIds(teaList, currentUser.cart);
          const cartPrice = getCartPrice(teaInCart);
          return (
               <>
                    <BackButton />
                    {teaInCart.map((tea) => (
                         <ItemCard teaList={tea} />
                    ))}
                    <h1>Итого: {cartPrice}</h1>
               </>
          );
     } else return <Loader />;
};

export default CartPage;
