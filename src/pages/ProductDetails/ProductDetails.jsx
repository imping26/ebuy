import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PRODUCT_DATA } from "../../data/data";
import { ChevronRight, Truck, Heart, MessageCircleMore} from "lucide-react";
import { useProductStore } from "../../store/productStore";

function ProductDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const store = useProductStore();
  const navigate = useNavigate();

  useEffect(() => {
    const detail_item = PRODUCT_DATA.filter((item) => item.id === id)[0];
    if (detail_item.length === 0) {
      navigate("/");
      return;
    }
    setItem(detail_item);
  }, []);

  if (!item) {
    return <div>loading...</div>;
  }

  function increaseQuantityHandler() {
    setQuantity((prev) => prev + 1);
  }

  function decreaseQuantityHandler() {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  }

  function addToCart() {
    store.addToCart({ productId: id, quantity: quantity });
  }

  return (
    <>
      <div className="hidden sm:flex items-center gap-2 overflow-hidden max-w-[1280px] mx-auto pb-2">
        <p className="text-nowrap">Home</p>
        <ChevronRight size={14} />
        <p className="text-nowrap">{item.category[0]}</p>
        <ChevronRight size={14} />
        <p className="text-nowrap text-slate-500">{item.name}</p>
      </div>

      <div className="container lg:px-[5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
          <div className="flex flex-col md:flex-row-reverse">
            <img
              className="md:w-full lg:w-[500px] lg:h-[90%]"
              src={item.image}
              alt=""
            />

            <div className="mt-2 md:mt-0 md:mr-1">
              <ul>
                <li>
                  <img
                    className="w-[60px] sm:w-[100px] xl:w-[100px] cursor-pointer"
                    src={item.image}
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="w-full">
            <div className="py-3 border-b">
              <p className="text-2xl md:text-3xl font-semibold pb-2">
                {item.name}
              </p>
              <p className="text-3xl md:text-4xl">RM {item.price}</p>
              <p className="text-slate-500 text-lg">
                {item.ShortDescription}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 pt-2 gap-2 sm:gap-0">
                <button className="flex items-center gap-1">
                  <Truck size={16} />
                  <p className="text-sm">Delivery & Return</p>
                </button>
                <button className="flex items-center gap-1">
                  <Heart size={16} />
                  <p className="text-sm">Add to Wishlist</p>
                </button>
                <button className="flex items-center gap-1">
                  <MessageCircleMore size={16} />
                  <p className="text-sm">Ask a Question</p>
                </button>
              </div>
            </div>

            <div>
              {item.size.length > 0 ? (
                <div className="py-3 md:py-5">
                  <p className="pb-2">Size:</p>
                  <div className="flex gap-3">
                    {item.size.map((item) => (
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
                <button
                  className="px-5 bg-slate-200 shadow-sm w-[60px] text-2xl"
                  onClick={decreaseQuantityHandler}
                >
                  -
                </button>
                <span className="text-xl">{quantity}</span>
                <button
                  className="px-5 bg-slate-200 shadow-sm w-[60px] text-2xl"
                  onClick={increaseQuantityHandler}
                >
                  +
                </button>
              </div>

              <button
                className="bg-black text-white py-3 px-3 w-full mt-3 md:mt-7 md:text-xl"
                onClick={addToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-2">
        <h4 className="text-black text-lg">
          Sku: <span className="text-md text-slate-500">{id}</span>
        </h4>
        <h4 className="text-black text-lg">
          Available: <span className="text-md text-slate-500">{item.stock}</span>
        </h4>
        <h4 className="text-black text-lg">
          Category: <span className="text-md text-slate-500">{item.category.join(",")}</span>
        </h4>
        {/* <h4 className="text-black text-lg">
          share: <span className="text-md text-slate-500"><Facebook/></span>
        </h4> */}
      </div>
    </>
  );
}

export default ProductDetails;
