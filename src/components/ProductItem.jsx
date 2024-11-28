import { Heart, Eye, ShoppingCart } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../store/productStore";
import { cn } from "../lib/utils";

function ProductItem({ items, space = false }) {
  const { title, description, images, id, price, isWishlist } = items;
  const navigate = useNavigate();
  const { addToWishList } = useProductStore();
 
  function goDetailHandler() {
    navigate(`/product/${id}`);
  }

  function addToWishlist() {
    addToWishList({ items });
  }
  
  return (
    <div
      className={`group flex flex-col gap-2 relative ${
        space ? "m-2" : undefined
      }`}
    >
      <button
        onClick={addToWishlist}
        className={cn(
          `absolute z-20 top-1 right-1 w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center hover:bg-red-400 hover:text-white`,
          isWishlist ? "bg-red-400 text-white" : ""
        )}
      >
        <Heart size={18} />
      </button>
      <div className="relative overflow-y-hidden" onClick={goDetailHandler}>
        <img
          className="rounded-tl-lg rounded-tr-lg shadow-sm"
          src={images}
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
        <p className="sm:text-lg text-ellipsis line-clamp-1">{title}</p>
        <p className="text-slate-500 text-lg sm:text-xl">RM {price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
