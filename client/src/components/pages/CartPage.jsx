import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../store/users";
import { getTeaList } from "../../store/tea";
import Loader from "../ui/Loader";
import ItemCard from "./ItemCard";
import BackButton from "../ui/BackButton";
import useCart from "../../hooks/useCart";
import { useNavigate } from "react-router";

const CartPage = () => {
     const navigate = useNavigate();
     const currentUser = useSelector(getCurrentUserData());
     const { orderFromCart } = useCart();
     const teaList = useSelector(getTeaList());
     const userCart = currentUser.cart;

     if (userCart.length === 0) {
          return (
               <>
                    <BackButton />
                    <hr />
                    <h1 className="m-6 text-red-400">
                         Упс, в вашей корзине пусто {`:(`}
                    </h1>
               </>
          );
     }

     const getTeaFromIds = (teaList, ids) => {
          return ids.map((item) => {
               const teaListInCart = [];
               teaList.map((tea) => {
                    if (tea._id === item.id) {
                         teaListInCart.push({ ...tea, count: item.count });
                    }
                    return null;
               });
               return teaListInCart;
          });
     };

     const getCartPrice = (cart) => {
          let sum = 0;
          cart.map((item) => {
               return (sum += item[0].price * item[0].count);
          });
          return sum;
     };

     const handleOrder = () => {
          orderFromCart();
          navigate(`/`);
          alert(`Вы успешно оформили заказ, спасибо!`);
     };

     if (teaList !== null) {
          const itemsInCart = getTeaFromIds(teaList, userCart);
          return (
               <div className="bg-slate-100">
                    <BackButton />
                    <p className="flex justify-center text-3xl pt-4 text-blue-600">
                         Итого: {getCartPrice(itemsInCart)}р
                    </p>
                    <div className="flex justify-center px-4 pt-4 mb-4">
                         <button
                              className="text-white bg-blue-700 m-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                              onClick={() => handleOrder()}
                         >
                              Оформить заказ
                         </button>
                    </div>
                    {itemsInCart.map((tea) => (
                         <ItemCard key={tea[0]._id} teaList={tea} />
                    ))}
               </div>
          );
     } else return <Loader />;
};

export default CartPage;
