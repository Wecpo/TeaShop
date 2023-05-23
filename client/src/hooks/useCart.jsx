import { useDispatch, useSelector } from "react-redux";
import {
     addItemToUserCart,
     getCurrentUserData,
     removeItemFromUserCart,
} from "../store/users";
import { useEffect, useState } from "react";

const useCart = () => {
     const dispatch = useDispatch();
     const currentUser = useSelector(getCurrentUserData());

     const { cart } = currentUser;

     // const [cart, setCart] = useState(null);

     // useEffect(() => {
     //      setCart(currentUser.cart);
     // }, [currentUser]);

     // console.log(cart, currentUser);

     const addToCart = (id) => {
          const count = 1;
          const newCart = [...cart, { id: id, count }];
          dispatch(addItemToUserCart({ ...currentUser, cart: newCart }));
     };

     const removeFromCart = (id) => {
          const newCart = cart.filter((item) => item.id !== id);
          dispatch(removeItemFromUserCart({ ...currentUser, cart: newCart }));
     };

     const toggleCart = (id) => {
          const itemInCartIndex = cart.findIndex((item) => item.id === id);
          if (itemInCartIndex === -1) {
               addToCart(id);
          } else {
               removeFromCart(id);
          }
     };

     const handleIncrementItemInCart = (id) => {
          const itemInCartIndex = cart.findIndex((item) => item.id === id);
          let count = cart[itemInCartIndex].count;
          count++;
          const newCart = cart.map((item) => {
               if (item.id === id) {
                    return { id: id, count: count };
               }
               return item;
          });
          dispatch(addItemToUserCart({ ...currentUser, cart: newCart }));
     };
     const handleDecrementItemInCart = (id) => {
          const itemInCartIndex = cart.findIndex((item) => item.id === id);
          let count = currentUser.cart[itemInCartIndex].count;
          count--;
          if (count < 1) {
               removeFromCart(id);
          } else {
               const newCart = cart.map((item) => {
                    if (item.id === id) {
                         return { id: id, count: count };
                    }
                    return item;
               });
               dispatch(addItemToUserCart({ ...currentUser, cart: newCart }));
          }
     };

     const isInCart = (id) => {
          const itemInCartIndex = cart.findIndex((item) => item.id === id);
          if (itemInCartIndex !== -1) {
               return true;
          } else {
               return false;
          }
     };

     return {
          toggleCart,
          isInCart,
          handleDecrementItemInCart,
          handleIncrementItemInCart,
     };
};

export default useCart;
