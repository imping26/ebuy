import React, { useEffect } from "react";
import { Filter } from "lucide-react";
import ProductItem from "../../../components/ProductItem";
import { useSearchParams } from "react-router-dom";
import { useProductStore } from "../../../store/productStore";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner";

function Category() {
  let [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  const store = useProductStore();

  const { data, isPending, isError } = useQuery({
    queryKey: ["productCat", category],
    queryFn: ({ signal }) => store.getCategoryItem({ signal, id: category }),
  });
  if (isPending) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <section className="max-w-[1200px] mx-auto pt-10">
      <button className="flex items-center justify-center gap-1 py-2 px-3 bg-stone-200 rounded-sm">
        <Filter size={16} /> Filter Menu
      </button>
      <div className="py-5 grid grid-cols-2 gap-3 md:gap-6 container mx-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative">
        {data.map((item, index) => {
          return <ProductItem key={index} items={item} />;
        })}
      </div>
    </section>
  );
}

export default Category;
