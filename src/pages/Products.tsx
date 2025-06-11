import React from "react";
import Product from "../components/Product";
import sampleProducts, { type productType } from "../temporary/products.dummy";
import { FaSearch } from "react-icons/fa";

const Products = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [filteredProducts, setFilteredProducts] = React.useState<productType[]>(
    []
  );
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    const searchResults = sampleProducts?.filter((product) =>
      product?.title.toLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    setFilteredProducts(searchResults);
  };

  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/products/")
      .then((response) => response.json())
      .then((products) => {
        setFilteredProducts(products);
        console.log(products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
    // setFilteredProducts(sampleProducts);
  }, []);
  return (
    <>
      <h1 className="my-7 text-center text-3xl text-[var(--accent-1)] font-black capitalize">
        Discover Our Products
      </h1>
      <form
        onSubmit={(e: React.FormEvent) => e.preventDefault()}
        className="w-1/2 h-12 mx-auto relative"
      >
        <input
          type="text"
          value={searchValue}
          placeholder="Your dream product awaits you..."
          onChange={handleSearchChange}
          className="w-full h-full p-5 text-lg text-gray-700 font-semibold bg-white shadow-md focus:border-2 border-[var(--accent-1)] rounded-full placeholder:font-normal focus:outline-0"
        />
        <FaSearch
          size={24}
          className="absolute top-1/2 -translate-y-1/2 right-4 text-[var(--accent-1)]"
        />
      </form>
      <section className="p-4">
        <div className=" grid sm:grid-cols-3  lg:grid-cols-4 p-5  justify-center  gap-5">
          {filteredProducts?.map((product, index) => (
            <Product
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
