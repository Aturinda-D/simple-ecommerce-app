import React from "react";
import type { productType } from "../temporary/products.dummy";
import QuantityInput from "./QuantityInput";

const ProductInCart: React.FC<productType> = ({ ...props }) => {
  return (
    <div className="min-h-30 flex justify-between items-center bg-gray-100 shadow">
      <div>product details</div>
      <div className="w-2/5 flex justify-between items-center">
        <QuantityInput />
        <h4 className="pr-4 text-black text-lg font-semibold">
          ${props.price}
        </h4>
      </div>
    </div>
  );
};

export default ProductInCart;
