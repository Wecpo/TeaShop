import { useSelector } from "react-redux";
import BackButton from "../ui/BackButton";
import { getCurrentUserData } from "../../store/users";
import { getTeaList } from "../../store/tea";
import Loader from "../ui/loader";
import ItemCard from "./ItemCard";

const CartPage = () => {
     const currentUser = useSelector(getCurrentUserData());
     const teaList = useSelector(getTeaList());
     const userCart = currentUser.cart;
     if (userCart.length === 0) {
          return (
               <>
                    <BackButton />
                    <hr />
                    <h1>Упс, в вашей корзине пусто {`:(`}</h1>
               </>
          );
     }

     const getTeaFromIds = (teaList, ids) => {
          return ids.map((item) => {
               return teaList.filter((tea) => tea._id === item.id);
          });
     };

     const getCartPrice = (cart) => {
          let sum = 0;
          cart.map((item) => {
               sum += item.price;
               return sum;
          });
          return sum;
     };

     if (teaList !== null) {
          const itemsInCart = getTeaFromIds(teaList, userCart);

          const cartPrice = getCartPrice(itemsInCart);
          return (
               <div className="bg-slate-100">
                    <BackButton />
                    {itemsInCart.map((tea) => (
                         <ItemCard teaList={tea} />
                    ))}
                    <h1>Итого: {cartPrice}р</h1>
                    <button>Заказать</button>
               </div>
          );
     } else return <Loader />;
};

export default CartPage;
