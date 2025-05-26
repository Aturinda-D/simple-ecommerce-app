export type CartItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
};
type Action =
  | { type: "cart/get" }
  | { type: "cart/add"; payload: CartItem }
  | { type: "cart/delete"; payload: number }
  | { type: "cart/update"; payload: number[] }
  | { type: string; payload?: any };

const CartReducer = (state: CartItem[] = [], action: Action) => {
  switch (action?.type) {
    case "cart/get":
      return state;

    case "cart/add":
      return [...state, action.payload];

    case "cart/delete":
      return state.filter((item) => item.id !== action.payload);

    case "cart/update":
      return state.map((item) => {
        if (item.id === action.payload[0]) {
          return { ...item, quantity: action.payload[1] };
        }
        return item;
      });

    default:
      return state;
  }
};

export default CartReducer;
