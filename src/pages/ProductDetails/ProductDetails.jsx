import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Truck, Heart, MessageCircleMore } from "lucide-react";
import { useProductStore } from "../../store/productStore";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner";
import RecentView from "../Products/view/RecentView";
import RelatedView from "../Products/view/RelatedView";

function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState("related");
  const [selectedImage, setSelectedImage] = useState(0);

  const store = useProductStore();

  const { data, isPending, isError } = useQuery({
    queryKey: ["productDetail", id],
    queryFn: () => store.getProductData({ id: id }),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [id]);

  function increaseQuantityHandler() {
    setQuantity((prev) => prev + 1);
  }

  function decreaseQuantityHandler() {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  }

  function addToCart() {
    store.addToCart({ item: data, quantity: quantity });
  }

  function selectTab(name) {
    setSelectedTab(name);
  }

  function selectView(index) {
    setSelectedImage(index);
  }

  function addToWishlist() {
    store.addToWishList({ items: data });
  }

  let content;

  if (isPending) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>product not found</div>;
  }

  if (data) {
    return (
      <>
        <div className="hidden sm:flex items-center gap-2 overflow-hidden max-w-[1280px] mx-auto pb-2">
          <Link to={"/"} className="text-nowrap">
            Home
          </Link>
          <ChevronRight size={14} />
          <div className="text-nowrap">{data.category?.name}</div>
          <ChevronRight size={14} />
          <p className="text-nowrap text-slate-500">{data.title}</p>
        </div>

        <div className="container lg:px-[5rem]">
          <div className="border-b grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className="flex flex-col lg:flex-row-reverse">
              <img
                className="md:w-full lg:w-[500px] lg:h-[90%]"
                src={data.images[selectedImage]}
                alt=""
              />
              <div className="mt-2 md:mr-1 lg:mt-0">
                <ul className="flex lg:flex-col">
                  {data.images.map((items, index) => {
                    return (
                      <li onClick={() => selectView(index)} key={index}>
                        <img
                          className="w-[60px] md:w-[100px] xl:w-[100px] cursor-pointer"
                          src={items}
                          alt=""
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/*  */}
            <div className="w-full">
              <div className="py-3 border-b">
                <p className="text-2xl md:text-3xl pb-2">{data.title}</p>
                <p className="text-3xl md:text-4xl font-semibold">
                  RM{data.price}
                </p>
                <p className="text-slate-500"></p>

                <div className="grid grid-cols-2 sm:grid-cols-3 pt-2 gap-2 sm:gap-0">
                  <button className="flex items-center gap-1">
                    <Truck size={16} />
                    <p className="text-sm">Delivery & Return</p>
                  </button>
                  <button
                    className="flex items-center gap-1"
                    onClick={addToWishlist}
                  >
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
                <div className="flex items-center gap-4 pt-5 pb-3">
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
                  className="bg-black text-white py-3 px-3 w-full mt-3 text-lg md:mt-7 md:text-xl"
                  onClick={addToCart}
                >
                  Add To Cart
                </button>

                <div className="py-4 sm:">
                  <h4 className="text-black">
                    Sku: <span className="text-md text-slate-500">{id}</span>
                  </h4>
                  <h4 className="text-black">
                    Available:
                    <span className="text-md text-slate-500">967</span>
                  </h4>
                  <h4 className="text-black">
                    Category:
                    <span className="text-md text-slate-500">
                      {data.category?.name}
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5 container max-w-[1280px] mx-auto">
            <div className="flex text-lg gap-3 pb-5">
              <button
                className={` ${
                  selectedTab === "related"
                    ? "text-black underline underline-offset-8"
                    : "text-slate-500"
                }`}
                onClick={() => selectTab("related")}
              >
                Related products
              </button>
              <button
                className={` ${
                  selectedTab === "recent"
                    ? "text-black underline underline-offset-8"
                    : "text-slate-500"
                }`}
                onClick={() => selectTab("recent")}
              >
                Recently viewed
              </button>
            </div>
            {selectedTab === "related" ? (
              <RelatedView category={data.category?.name} />
            ) : (
              <RecentView data={store.recentViewItem} />
            )}
          </div>
        </div>
      </>
    );
  }

  return <>{content}</>;
}

export default ProductDetails;
