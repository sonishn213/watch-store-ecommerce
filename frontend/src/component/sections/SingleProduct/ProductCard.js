import React from "react";

const ProductCard = ({ img, title, price }) => {
  return (
    <div className="bg-white   border-[#c4c4c4] md:shadow-xl shadow-lg   rounded-md overflow-hidden text-left my-6 cursor-pointer">
      <img src={img} alt="pimg" />
      <div className="md:p-2  p-1 rounded-2xl rounded-t-none">
        <p className="mb-2 capitalize">{title}</p>
        <p className=" text-base ">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
