import PropTypes from "prop-types";
import useCart from "../../hooks/useCart";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../store/users";

const CartButton = ({ id }) => {
     const {
          toggleCart,
          isInCart,
          handleIncrementItemInCart,
          handleDecrementItemInCart,
     } = useCart();
     const buttonStyle = isInCart(id);
     const currentUser = useSelector(getCurrentUserData());
     const itemInCartIndex = currentUser.cart.findIndex(
          (item) => item.id === id
     );

     if (!buttonStyle) {
          return (
               <>
                    <button
                         onClick={() => toggleCart(id)}
                         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                         Добавить в корзину
                    </button>
               </>
          );
     } else {
          return (
               <>
                    <button
                         onClick={() => toggleCart(id)}
                         className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                         Удалить из корзины
                    </button>
                    <span className="text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                         {currentUser.cart[itemInCartIndex].count}00г
                    </span>
                    <button
                         onClick={() => handleIncrementItemInCart(id)}
                         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                         +
                    </button>
                    <button
                         onClick={() => handleDecrementItemInCart(id)}
                         className="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                         -
                    </button>
               </>
          );
     }
};

CartButton.propTypes = {
     id: PropTypes.string,
};

export default CartButton;
