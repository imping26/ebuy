import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_DATA } from "../../data/data";
import { ChevronRight } from "lucide-react";

function ProductDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const detail_item = PRODUCT_DATA.filter((item) => item.id === id);
    setItem(detail_item);
  }, []);

  if (!item) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className="hidden sm:flex items-center gap-2 overflow-hidden max-w-[1280px] mx-auto pb-2">
        <p className="text-nowrap">Home</p>
        <ChevronRight size={14} />
        <p className="text-nowrap">{item[0].category[0]}</p>
        <ChevronRight size={14} />
        <p className="text-nowrap">{item[0].name}</p>
      </div>
      <div className="container lg:px-[5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
          <div className="flex flex-col md:flex-row-reverse">
            <img
              className="md:w-full lg:w-[500px] lg:h-[90%]"
              src={item[0].image}
              alt=""
            />

            <div className="mt-2 md:mt-0 md:mr-1">
              <ul>
                <li>
                  <img
                    className="w-[60px] sm:w-[100px] xl:w-[100px] cursor-pointer"
                    src={item[0].image}
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="w-full">
            <div className="py-5 border-b">
              <p className="text-2xl md:text-3xl">{item[0].name}</p>
              <p className="text-3xl md:text-4xl">RM {item[0].price}</p>
              <p className="text-slate-500 text-lg">
                {item[0].ShortDescription}
              </p>
            </div>

            <div>
              {item[0].size.length > 0 ? (
                <div className="py-3 md:py-5">
                  <p className="pb-2">Size:</p>
                  <div className="flex gap-3">
                    {item[0].size.map((item) => (
                      <button
                        key={item}
                        className="border w-[50px] text-center"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="flex items-center gap-4 pt-3">
                <button className="px-5 bg-slate-200 shadow-sm w-[60px] text-2xl">
                  -
                </button>
                <span className="text-xl">1</span>
                <button className="px-5 bg-slate-200 shadow-sm w-[60px] text-2xl">
                  +
                </button>
              </div>

              <button className="bg-black text-white py-3 px-3 w-full mt-3 md:mt-7 md:text-xl">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
