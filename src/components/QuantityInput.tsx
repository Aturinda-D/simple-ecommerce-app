import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityInput = () => {
  const [quantity, setQuantity] = React.useState<number>(1);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value === 0) {
      setQuantity(1);
    }
  };
  const handleQuantityChange = (type: string) => {
    switch (type) {
      case "add":
        setQuantity((prevState) => prevState + 1);
        break;
      case "subtract":
        if (quantity - 1 <= 0) {
          return;
        } else {
          setQuantity((prevState) => prevState - 1);
        }
        break;
      default:
        setQuantity(1);
        break;
    }
  };
  return (
    <form
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
      className="flex *:border-y *:p-2.5"
    >
      <button
        className="active:bg-gray-300"
        onClick={() => handleQuantityChange("subtract")}
      >
        {<FaMinus size={10} />}
      </button>
      <input
        type="number"
        value={quantity}
        className="w-20 px-1 py-1.5 text-black text-center font-semibold bg-gray-100 focus:outline-0"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuantity(parseInt(e.target.value))
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
