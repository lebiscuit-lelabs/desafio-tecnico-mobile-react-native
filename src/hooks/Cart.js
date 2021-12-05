import React, {
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    products: [],
    totalValue: 0,
  });

  const totalPrice = (product) => {
    return product?.reduce(function (acc, val) {
      return acc + val?.price;
    }, 0);
  };

  const add = useCallback(
    (prod) => {
      var products = cart.products.concat(prod);
      var concat = { ...cart, products, totalValue: totalPrice(products) };
      setCart(concat);
    },
    [cart]
  );

  const remove = useCallback((product) => {
    const filter = cart.products.filter((i) => {
      return i.id !== product.id;
    });

    const newCart = {
      ...cart,
      products: filter,
      totalValue: totalPrice(filter),
    };
    setCart(newCart);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        add,
        remove,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("usePusher must be used within an PusherContext");
  }

  return context;
};
