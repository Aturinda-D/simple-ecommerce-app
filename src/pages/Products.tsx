import Product from "../components/Product";

const availableProducts = [
  { image: "/assets/images/bag_1.jpg", title: "bag_1", price: "3,000" },
  { image: "/assets/images/bag_2.jpg", title: "bag_2", price: "3,000" },
  { image: "/assets/images/bag_3.jpg", title: "bag_3", price: "3,000" },
  { image: "/assets/images/shoe_1.jpg", title: "shoe_1", price: "8000" },
  { image: "/assets/images/shoe_2.jpg", title: "shoe_2", price: "8000" },
  { image: "/assets/images/shoe_3.jpg", title: "shoe_3", price: "8000" },
  {
    image: "/assets/images/trouser_1.jpg",
    title: "trouser_1",
    price: "50,000",
  },
  {
    image: "/assets/images/trouser_2.jpg",
    title: "trouser_2",
    price: "50,000",
  },
  {
    image: "/assets/images/trouser_3.jpg",
    title: "trouser_3",
    price: "50,000",
  },
];

type productdetails = {
  title: string;
  image: string;
  price: string;
};
const Products: productdetails = () => {
  return (
    <section className="grid ">
      <h2>Discover Our Products</h2>
      {availableProducts?.map((product, index) => (
        <Product
          title={product.title}
          image={product.image}
          price={product.price}
          key={index}
        />
      ))}
    </section>
  );
};

export default Products;
