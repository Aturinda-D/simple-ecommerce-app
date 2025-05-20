import type React from "react";

type productProps = {
  title: string;
  image: string;
  price: number;
};
const Product: React.FC<productProps> = ({ ...props }) => {
  return (
    <div className="grid grid-cols-1">
      {/* PROVIDE WIDTH AND HEIGHT FOR THE IMAGES */}
      <img src={props?.image} alt="" />
      <h4 className=" --accent-1">{props?.title}</h4>
      <p className=" --accent-1">{props?.price}</p>
    </div>
  );
};

export default Product;
