import {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { useCustomHookToStoreLocalData } from "../hooks/storeData";

type ShoppingCartContextProviderCtx = {
  children: ReactNode;
};

type ShoppingCartContextFunctions = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (
    id: number,
    category: string,
    description: string,
    image: string,
    price: number
  ) => number;
  increaseItemQuantity: (
    id: number,
    category: string,
    description: string,
    image: string,
    price: number
  ) => void;
  decreaseItemQuantity: (
    id: number,
    category: string,
    description: string,
    image: string,
    price: number
  ) => void;
  removeItemQuantity: (
    id: number,
    category: string,
    description: string,
    image: string,
    price: number
  ) => void;
  cartQty: number;
  cartItems: CartItem[];
  isOpen: boolean;
};

export type CartItem = {
  id: number;
  quantity: number;
  description: string;
  price: number;
  category: string;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextFunctions);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

// function reducer(state, action) {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       console.log(action.type, action.payload, state);
//       return { ...state, cartItemsStored: action.payload };
//     default:
//       return state;
//   }
// }

export function ShoppingCartProvider({
  children,
}: ShoppingCartContextProviderCtx) {
  const [isOpen, setIsOpen] = useState(true);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  // let itemStored: any = cartItems;
  const [cartItems, setCartQuantity] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("localData")) || []
  );

  useEffect(() => {
    if (cartItems) {
      localStorage.setItem("localData", JSON.stringify(cartItems || []));
    }
  }, [cartItems]);

  function getItemQuantity(
    id: number,
    category: string,
    description: string,
    image: string,
    price: number
  ): number {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function removeItemQuantity(
    id: number,
    category: string,
    description: string,
    image: string,
    price: number
  ) {
    setCartQuantity((cartItems) => {
      return cartItems.filter((item) => item.id !== id);
    });
  }

  function increaseItemQuantity(
    id: number,
    category: string,
    description: string,
    image: string,
    price: number
  ) {
    setCartQuantity((cartItems) => {
      if (cartItems.find((item) => item.id === id) == null) {
        return [
          ...cartItems,
          {
            id,
            quantity: 1,
            category: category,
            description: description,
            price: price,
          },
        ];
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

  function decreaseItemQuantity(
    id: number,
    category: string,
    description: string,
    image: string,
    price: number
  ) {
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
        openCart,
        closeCart,
        cartItems,
        isOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
