import { ChevronRight } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import useProductList from "../../hook/useProductList"; 

function ProductsPage() {

  const { categories } = useProductList(); 
  
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
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline text-black" : undefined
              }
              to="/products/all"
            >
              All
            </NavLink>
            {categories.map((category) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline text-black" : undefined
                  }
                  key={category}
                  to={`/products/${category}`}
                >
                  {category}
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default ProductsPage;
