import React from "react";
import Hero from "../../assets/hero.jpg";
import ProductItem from "../../components/ProductItem";
import { DATA, SLIDER_DATA } from "../../data/data";
import SliderComponent from "@components/SliderComponent";

function sliderItem({ items }) {
  const { image, title } = items;
  return (
    <div>
      <img src={image} alt={title} />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <div>
        <img
          className="h-[350px] object-cover object-right sm:h-full sm:w-full"
          src={Hero}
          alt="bigbanner"
        />
      </div>

      <div className="max-w-[1200px] mx-auto pt-10">
        <div className="text-center py-3">
          <h1 className="font-semibold text-3xl">BEST COLLECTION</h1>
          <p className="p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, id.
          </p>
        </div>
        <div className="py-5 grid grid-cols-2 gap-3 md:gap-6 container mx-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative">
          {DATA.map((item, index) => {
            return <ProductItem key={index} item={item} />;
          })}
        </div>
      </div>
      <div>
        <h2 className="container mx-auto text-3xl">Style</h2>
        <SliderComponent items={SLIDER_DATA} components={sliderItem} />
      </div>
    </>
  );
}

export default HomePage;
