// type productDetails = {
//   id: string;
//   image: string;
//   title: string;
// };

const Product = () => {
  return (
    <div className="grid grid-cols-1 rounded-[20px]">
      <img src="/assets/images/bag_1.jpg" alt="" />
      <h4 className=" --accent-1">image title</h4>
      <p className=" --accent-1">price</p>
    </div>
  );
};

export default Product;
