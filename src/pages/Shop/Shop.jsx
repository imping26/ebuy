import React from "react";
import { ChevronRight } from "lucide-react";
import Men from "../../assets/Men.png";
import useProductList from "../../hook/useProductList";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useProductStore } from "../../store/productStore";
import LoadingSpinner from "../../components/LoadingSpinner";

function CategoryItem({ item }) {
  return (
    <Link
      to={`/products?category=${item.id}`}
      className={`text-center relative max-w-[400px] h-[230px] flex flex-col gap-4 justify-center items-center overflow-hidden`}
    >
      <img src={item.image} alt="" />
      <div className="bg-white w-[200px] p-3 absolute top-15">
        <span className="font-semibold text-2xl md:text-4xl">{item.name}</span>
      </div>
      <button className="flex items-center justify-center gap-3 py-2 bg-white w-[170px] bottom-10 md:bottom-7 absolute">
        <span className=" text-yellow-700 ">Shop collection</span>
        <div className="w-[24px] h-[24px] rounded-full bg-black flex justify-center items-center">
          <ChevronRight size={16} className="text-white font-bold" />
        </div>
      </button>
    </Link>
  );
}

function Shop() { 
  const getCategory = useProductStore((state) => state.getCategory);

  const { data, isPending, isError } = useQuery({
    queryKey: ["getCategory"],
    queryFn: () => getCategory(),
  });
 
  if(isPending){
    return <LoadingSpinner/>
  }

  if(isError){
    return <div>ERROR</div>
  }

  return (
    <>
      <div className="w-full h-[20vh] xl:h-[45vh] mb-[30px] relative  bg-[url('./assets/bn_hero.png')] bg-cover flex flex-col items-center justify-center gap-1 sm:gap-3">
        <p className="font-semibold text-white text-3xl sm:text-4xl">Shop</p>
        <p className="flex gap-1 items-center sm:text-xl">
          <span className="text-white">Home</span>
          <ChevronRight className="text-white" size={16} />
          <span className="text-stone-200">Shop</span>
        </p>
      </div>

      <section>
        <div className="p-3 md:px-10 grid grid-cols-1 sm:flex place-content-center gap-7">
          {data.map((item,index) => {
            return <CategoryItem item={item} key={index} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Shop;
