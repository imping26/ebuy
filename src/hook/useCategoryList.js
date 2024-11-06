import React, { useEffect, useState } from "react";
import { useProductStore } from "../store/productStore";

const useCategoryList = () => {
  const [loading, setLoading] = useState(true);
  const categories = useProductStore((state) => state.categories);
  const setProductItem = useProductStore((state) => state.setProductItem);
  const setCategories = useProductStore((state) => state.setCategories);
  useEffect(() => {
    setProductItem();
    setCategories();
    setLoading(false);
  }, []);
  return { categories, loading };
};

export default useCategoryList;
