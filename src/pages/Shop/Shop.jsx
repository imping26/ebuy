import React from "react";
import { ChevronRight } from "lucide-react";
import Men from "../../assets/Men.png";
import useProductList from "../../hook/useProductList";
import { Link } from "react-router-dom";

function CategoryItem({ item }) {
  return (
    <Link
      to={`/products/${item}`}
      className={`text-center relative max-w-[400px] h-[230px] flex flex-col gap-4 justify-center items-center`}
    >
      <img src={Men} alt="" />
      <div className="bg-white w-[200px] p-3 absolute top-15">
        <span className="font-semibold text-2xl md:text-4xl">{item}</span>
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
  const { categories } = useProductList();

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
        <div className="p-3 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-7">
          {categories.map((item) => {
            return <CategoryItem item={item} key={item} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Shop;
