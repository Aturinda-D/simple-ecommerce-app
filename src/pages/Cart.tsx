import ProductInCart from "../components/ProductInCart";
import sampleProducts from "../temporary/products.dummy";

const Cart = () => {
  return (
    <div className="p-10">
      <div className="bg-[var(--accent-1)] p-2 text-white capitalize flex justify-between items-center">
        <h4>product</h4>
        <div className="w-2/5 flex justify-between items-center">
          <h4>quantity</h4>
          <h4>subtotal</h4>
        </div>
      </div>
      <div className="my-4 flex flex-col gap-5">
        {sampleProducts?.map((product) => (
          <ProductInCart
            id={product?.id}
            image={product?.image}
            title={product?.title}
            price={product?.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
