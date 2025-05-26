import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import type { AppDispatch } from "../redux/store";

type quantityInputProps = {
  productId: number;
  quantity: number;
  dispatch: AppDispatch;
};

const QuantityInput: React.FC<quantityInputProps> = ({
  productId,
  quantity,
  dispatch,
}) => {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value === 0) {
      dispatch({ type: "cart/update", payload: [productId, 1] });
    }
  };

  const handleQuantityChange = (type: string) => {
    switch (type) {
      case "add":
        dispatch({ type: "cart/update", payload: [productId, quantity + 1] });
        break;
      case "subtract":
        if (quantity - 1 <= 0) {
          return;
        } else {
          dispatch({ type: "cart/update", payload: [productId, quantity - 1] });
        }
        break;
      default:
        dispatch({ type: "cart/update", payload: [productId, 1] });
    }
  };
  return (
    <form
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
      className="flex *:border-y *:p-2.5"
    >
      <button
        className="active:bg-gray-200"
        onClick={() => handleQuantityChange("subtract")}
      >
        {<FaMinus size={10} />}
      </button>
      <input
        type="number"
        value={quantity}
        className="w-20 px-1 py-1.5 text-black text-center font-semibold bg-transparent focus:outline-0"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "cart/update",
            payload: [productId, parseInt(e.target.value)],
          })
        }
        onBlur={handleBlur}
      />
      <button
        className="active:bg-gray-300"
        onClick={() => handleQuantityChange("add")}
      >
        {<FaPlus size={10} />}
      </button>
    </form>
  );
};

export default QuantityInput;
