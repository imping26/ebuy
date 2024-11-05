import { Heart, Eye, ShoppingCart } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function ProductItem({ items, space = false }) {
  const { name, price, image, id } = items;
  const navigate = useNavigate();

  function goDetailHandler() {
    navigate(`/products/${id}`); 
  }

  return (
    <div
      className={`group flex flex-col gap-2 relative ${
        space ? "m-2" : undefined
      }`}
    >
      <button className="absolute top-1 right-1 w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center">
        <Heart size={18} />
      </button>
      <div className="relative overflow-y-hidden">
        <img
          className="rounded-tl-lg rounded-tr-lg shadow-sm"
          src={image}
          alt={name}
        />
        <div className="grid grid-cols-2 h-8 border  absolute bottom-0 w-full transform transition-transform duration-300 translate-y-full group-hover:translate-y-0 ">
          <button className="bg-slate-200 flex items-center justify-center">
            <ShoppingCart size={16} />
          </button>
          <button
            onClick={goDetailHandler}
            className="bg-slate-100 border flex items-center justify-center"
          >
            <Eye size={16} />
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="sm:text-lg">{name}</p>
        <p className="text-slate-500 text-lg sm:text-xl">RM {price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
