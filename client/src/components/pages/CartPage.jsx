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
               const teaListInCart = [];
               teaList.map((tea) => {
                    if (tea._id === item.id) {
                         teaListInCart.push({ ...tea, count: item.count });
                    }
               });
               return teaListInCart;
          });
     };

     const getCartPrice = (cart) => {
          let sum = 0;
          cart.map((item) => {
               sum += item[0].price * item[0].count;
          });
          return sum;
     };

     if (teaList !== null) {
          const itemsInCart = getTeaFromIds(teaList, userCart);

          return (
               <div className="bg-slate-100">
                    <BackButton />

                    {itemsInCart.map((tea) => (
                         <ItemCard key={tea[0]._id} teaList={tea} />
                    ))}
                    <h1>Итого: {getCartPrice(itemsInCart)}р</h1>
                    <button>Заказать</button>
               </div>
          );
     } else return <Loader />;
};

export default CartPage;
