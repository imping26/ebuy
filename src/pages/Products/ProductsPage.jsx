
import { ChevronRight, Filter } from "lucide-react";
import ProductItem from "../../components/ProductItem";
import { PRODUCT_DATA } from "../../data/data";
 

function ProductsPage() {

 
  return (
    <>
      <div className="w-full h-[35vh] xl:h-[45vh] mb-[30px] relative  bg-[url('./assets/bn_hero.png')] bg-cover flex flex-col items-center justify-center gap-1 sm:gap-3">
        <p className="font-semibold text-white text-3xl sm:text-4xl">All</p>
        <p className="flex gap-1 items-center sm:text-xl">
          <span className="text-white">Products</span>
          <ChevronRight className="text-white" size={16} />
          <span className="text-stone-200">All</span>
        </p>
        <div>
          <ul className="text-white text-lg flex gap-6 mt-5">
            <li>All</li>
            <li>Women</li>
            <li>Men</li>
            <li>Shoes</li>
            <li>Accessories</li>
          </ul>
        </div>
      </div>

      <section className="max-w-[1200px] mx-auto pt-10">
        <button className="flex items-center justify-center gap-1 py-2 px-3 bg-stone-200 rounded-sm">
          <Filter size={16} /> Filter Menu
        </button>

        <div className="py-5 grid grid-cols-2 gap-3 md:gap-6 container mx-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative">
          {PRODUCT_DATA.map((item, index) => {
            return <ProductItem key={index} items={item} />;
          })}
        </div>
      </section>
    </>
  );
}

export default ProductsPage;
