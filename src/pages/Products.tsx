import Product from "../components/Product";
import sampleProducts from "../temporary/products.dummy";

const Products = () => {
  return (
    <>
      <h1>Discover Our Products</h1>
      <section className="grid grid-cols-2">
        {sampleProducts?.map((product, index) => (
          <Product
            title={product.title}
            image={product.image}
            price={product.price}
            key={index}
          />
        ))}
      </section>
    </>
  );
};

export default Products;
