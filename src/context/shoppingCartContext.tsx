import { useContext, createContext, useState } from "react";

type ShoppingCartContextProviderCtx = {
  children: ReactNode;
};

type ShoppingCartContextFunctions = {
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItemQuantity: (id: number) => void;
};

type CartItem = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextFunctions);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({
  children,
}: ShoppingCartContextProviderCtx) {
  const [cartItems, setCartQuantity] = useState<CartItem[]>([]);

  function getItemQuantity(id: number): number {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function removeItemQuantity(id: number) {
    setCartQuantity((cartItems) => {
      return cartItems.filter((item) => item.id !== id);
    });
  }

  function increaseItemQuantity(id: number) {
    setCartQuantity((cartItems) => {
      if (cartItems.find((item) => item.id === id) == null) {
        return [...cartItems, { id, quantity: 1 }];
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseItemQuantity(id: number) {
    setCartQuantity((cartItems) => {
      if (cartItems.find((item) => item.id === id)?.quantity === 1) {
        return cartItems.filter((elem) => elem.id !== id);
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        removeItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
