import React, { useEffect, useState } from "react";
import { useProductStore } from "../store/productStore";

const useProductList = () => {
  const [loading, setLoading] = useState(true);
  const productItem = useProductStore((state) => state.productItem);
  const cartItem = useProductStore((state) => state.cartItem);
  const categories = useProductStore((state) => state.categories);
  const setProductItem = useProductStore((state) => state.setProductItem);
  // useEffect(() => {
    
  //     setProductItem();
 
  // }, []);
  console.log("render use product list")
  return { productItem, cartItem, categories };
};

export default useProductList;
