import React from "react";
import { ChevronRight } from "lucide-react";
import { useProductStore } from "../../store/productStore";
import ProductItem from "../../components/ProductItem";

function WishlistPage() {
  const { wishList } = useProductStore();

  return (
    <>
      <div className="w-full h-[20vh] xl:h-[45vh] mb-[30px] relative  bg-[url('./assets/bn_hero.png')] bg-cover flex flex-col items-center justify-center gap-1 sm:gap-3">
        <p className="font-semibold text-white text-3xl sm:text-4xl">
          Wish list
        </p>
        <p className="flex gap-1 items-center sm:text-xl">
          <span className="text-white">Home</span>
          <ChevronRight className="text-white" size={16} />
          <span className="text-stone-200">Wishlist</span>
        </p>
      </div>

      <section className="max-w-[1200px] mx-auto pt-10">
        {wishList.length === 0 && <div className="flex justify-center text-lg md:text-2xl">No wishlist item!</div>}
        {wishList.length > 0 && (
          <div className="py-5 grid grid-cols-2 gap-3 md:gap-6 container mx-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative">
            {wishList.map((item, index) => {
              return <ProductItem key={index} items={item} />;
            })}
          </div>
        )}
      </section>
    </>
  );
}

export default WishlistPage;
