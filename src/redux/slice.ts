export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};
type Action =
  | { type: "cart/get" }
  | { type: "cart/add"; payload: CartItem }
  | { type: "cart/delete"; payload: string }
  | { type: string; payload?: any };

const CartReducer = (state: CartItem[] = [], action: Action) => {
  switch (action?.type) {
    case "cart/get":
      return state;

    case "cart/add":
      return [...state, action.payload];

    case "cart/delete":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default CartReducer;
