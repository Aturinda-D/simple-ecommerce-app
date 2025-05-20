import { FaArrowRight } from "react-icons/fa";
import ProductInCart from "../components/ProductInCart";
import sampleProducts from "../temporary/products.dummy";

const Cart = () => {
  return (
    <div className="p-10">
      <div className="bg-[var(--accent-1)] py-2 px-3 text-white text-lg font-medium capitalize flex justify-between items-center">
        <h4>product</h4>
        <div className="w-2/5 flex justify-between items-center">
          <h4>quantity</h4>
          <h4>subtotal</h4>
        </div>
      </div>
      <div className="my-4 flex flex-col gap-5">
        {sampleProducts?.slice(0, 3).map((product) => (
          <ProductInCart
            id={product?.id}
            image={product?.image}
            title={product?.title}
            price={product?.price}
          />
        ))}
      </div>
      <div className="w-1/2 ml-auto mt-7 px-2 py-4 border-t-3 border-t-[var(--accent-1)] flex flex-col gap-5">
        <div className="flex justify-between items-center *:text-lg *:font-semibold">
          <h4>Total</h4>
          <h4>${7000}</h4>
        </div>
        <button className="px-6 py-2 ml-auto w-fit inline-flex justify-center items-center gap-3 text-white bg-[var(--accent-1)] font-semibold rounded-full hover:cursor-pointer hover:opacity-90">
          Proceed to checkout
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Cart;
