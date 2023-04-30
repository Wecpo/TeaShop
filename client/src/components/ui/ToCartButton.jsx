import PropTypes from "prop-types";
import useCart from "../../hooks/useCart";

const ToCartButton = ({ id }) => {
     const { toggleCart, isInCart } = useCart();
     const buttonStyle = isInCart(id);

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
               <button
                    onClick={() => toggleCart(id)}
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
               >
                    Удалить из корзины
               </button>
          );
     }
};

ToCartButton.propTypes = {
     id: PropTypes.string,
};

export default ToCartButton;
