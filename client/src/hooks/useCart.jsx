import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserData, updateUser } from "../store/users";

const useCart = () => {
     const dispatch = useDispatch();
     const currentUser = useSelector(getCurrentUserData());

     const userCart = currentUser.cart;
     const toggleCart = (id) => {
          if (userCart.includes(id)) {
               const newCart = userCart.filter((i) => i !== id);
               dispatch(updateUser({ ...currentUser, cart: newCart }));
          } else {
               const newArray = [...userCart, id];
               dispatch(updateUser({ ...currentUser, cart: newArray }));
          }
     };

     const isInCart = (id) => {
          if (userCart.includes(id)) return true;
          return false;
     };

     return { toggleCart, isInCart };
};

export default useCart;
