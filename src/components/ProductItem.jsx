import { Heart } from "lucide-react";
import React from "react";

function ProductItem({ item }) {
  const { title, price, image } = item;
  return (
    <div className="flex flex-col gap-2 relative">
      <button className="absolute top-1 right-1 w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center">
        <Heart size={18}/>
      </button>
      <div>
        <img className="rounded-lg shadow-sm" src={image} alt={title} />
      </div>
      <div>
        <p className="text-lg">{title}</p>
        <p className="text-slate-500 text-xl">RM {price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
