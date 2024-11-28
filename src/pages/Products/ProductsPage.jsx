import { ChevronRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom"; 
import { useProductStore } from "../../store/productStore";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner";
import Category from "./view/Category";

function ProductsPage() {

  const [searchParams, setSearchParams] = useSearchParams();
  const store = useProductStore();
  const { data, isPending, isError } = useQuery({
    queryKey: ["getCategory"],
    queryFn: () => store.getCategory(),
  });
  if (isPending) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <div>Error</div>;
  }

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
            <Link
              className={
                !searchParams.get("category")
                  ? "underline text-black"
                  : undefined
              }
              to="/products"
            >
              All
            </Link>
            {data.map((category, index) => {
              const { id, name } = category;
              return (
                <Link
                  className={
                    id === Number(searchParams.get("category"))
                      ? "underline text-black"
                      : undefined
                  }
                  key={id}
                  to={`/products?category=${id}`}
                >
                  {name}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <Category />
    </>
  );
}

export default ProductsPage;
