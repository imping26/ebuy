import React from "react";
import { useProductStore } from "../../../store/productStore";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner";
import ProductItem from "../../../components/ProductItem";

function RelatedView({category}) {
  const store = useProductStore();
  const { data, isPending, isError } = useQuery({
    queryKey: ["productCat", category],
    queryFn: ({ signal }) => store.getProductData({ signal, category }),
  });

  if (isPending) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
      {data.slice(0,5).map((item, index) => {
        return <ProductItem key={index} items={item} />;
      })}
    </div>
  );
}

export default RelatedView;
