import React from "react";
import ProductItem from "../../../components/ProductItem";

function RecentView({data}) {


  if(!data){
    return <div>Browse some product!</div>
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-6"> 
      {data.map((item, index) => {
        return <ProductItem key={index} items={item} />;
      })}
    </div>
  );
}

export default RecentView;
