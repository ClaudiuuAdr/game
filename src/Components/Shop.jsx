import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Shop({ size }) {
  return (
    <div className="relative">
      <FaShoppingCart
        size={25}
        className="absolute right-9 top-[-36px] z-20 mt-3 inline cursor-pointer "
      />
      <span className="absolute right-6 top-[-40px]  z-20 flex items-center justify-center rounded-full bg-red-500 px-2 text-white">
        {size}
      </span>
    </div>
  );
}

export default Shop;
