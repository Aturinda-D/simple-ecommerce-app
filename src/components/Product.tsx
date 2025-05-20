import type React from "react";
import { useDispatch } from "react-redux";
import type { productType } from "../temporary/products.dummy";

const Product: React.FC<productType> = ({ ...props }) => {
  const dispatch = useDispatch();
  return (
    <div className="min-h-100 max-w-80 flex flex-col gap-2 bg-white">
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className={`h-2/3 bg-cover bg-center bg-no-repeat`}
      ></div>
      <h4 className="mx-3 text-xl text-black font-semibold">{props?.title}</h4>
      <p className="mx-3 text-sm text-[var(--accent-1)] font-semibold">
        ${props?.price}
      </p>
      <button
        onClick={() =>
          dispatch({ type: "cart/add", payload: { ...props, quantity: 1 } })
        }
        className="w-fit mt-auto ml-auto mr-3 mb-3 py-2 px-4 bg-[var(--accent-1)] rounded-xl text-white font-semibold text-[16px]"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
