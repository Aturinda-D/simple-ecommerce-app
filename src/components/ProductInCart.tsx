import React from "react";
import QuantityInput from "./QuantityInput";
import type { CartItem } from "../redux/slice";
import { useDispatch } from "react-redux";

const ProductInCart: React.FC<CartItem> = ({ ...props }) => {
  const dispatch = useDispatch();
  return (
    <div className="min-h-30 flex justify-between items-center bg-white shadow">
      <div className="h-full w-fit flex">
        <img className="w-30 h-30" src={props.image} alt="" />
        <div className="ml-3 p-3 flex flex-col gap-1 justify-center items-start">
          <h2 className="text-xl text-black font-semibold">{props.title}</h2>
          <h4 className="text-[16px] text-black font-normal">
            Price: ${props.price}
          </h4>
          <button
            className="text-[var(--accent-1)] font-medium cursor-pointer hover:underline"
            onClick={() =>
              dispatch({ type: "cart/delete", payload: props?.id })
            }
          >
            Remove
          </button>
        </div>
      </div>
      <div className="w-2/5 flex justify-between items-center">
        <QuantityInput
          productId={props?.id}
          quantity={props?.quantity}
          dispatch={dispatch}
        />
        <h4 className="pr-4 text-black text-lg font-semibold">
          ${props.price * (isNaN(props?.quantity) ? 0 : props?.quantity)}
        </h4>
      </div>
    </div>
  );
};

export default ProductInCart;
