import React from "react";
import Hero from "../../assets/hero.jpg";
import ProductItem from "../../components/ProductItem";
import { PRODUCT_DATA, SLIDER_DATA } from "../../data/data";
import SliderComponent from "@components/SliderComponent";
import deco1 from "../../assets/1.png";
import deco2 from "../../assets/2.png";
import deco3 from "../../assets/3.png";
import HomeContentSection from "./view/HomeContentSection";
import Button from "../../components/Button";

const settings_trending_collection = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

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
      <div className="relative">
        <div className="absolute top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 items-center lg:-translate-x-[200px] lg:-translate-y-[200px]">
          <p className="text-xl lg:text-4xl font-semibold sm:font-normal">
            up 70% off
          </p>
          <p className="text-5xl sm:text-6xl font-semibold text-center lg:text-7xl">
            Summer <br /> Collection
          </p>
          <button className="p-3 mt-3 bg-black text-sm text-white w-[130px] hover:text-black border-2 border-black hover:bg-white hover:border-black transition-all ease-in-out">
            Shop Collection
          </button>
        </div>
        <img
          className="h-[350px] object-cover object-right sm:h-full sm:w-full"
          src={Hero}
          alt="bigbanner"
        />
      </div>

      <section className="max-w-[1200px] mx-auto pt-10">
        <div className="text-center py-3">
          <h1 className="title">BEST COLLECTION</h1>
          <p className="p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, id.
          </p>
        </div>
        <div className="py-5 grid grid-cols-2 gap-3 md:gap-6 container mx-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative">
          {PRODUCT_DATA.map((item, index) => {
            return <ProductItem key={index} items={item} />;
          })}
        </div>
      </section>

      <HomeContentSection className="bg-stone-200 mt-10">
        <h1 className="title-thin">A Demo Fashion Store</h1>
        <p className="sm:pt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          voluptatibus sunt aut molestiae voluptate dolorem!
        </p>
        <Button text="View More" />
      </HomeContentSection>

      <section>
        <div className="text-center py-3 pt-10">
          <h1 className="title">TRENDING COLLECTION</h1>
          <p className="p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, id.
          </p>
        </div>
        <div className="container mx-auto mb-10">
          <SliderComponent
            items={PRODUCT_DATA}
            config={settings_trending_collection}
            components={(item) => {
              const { items } = item;
              return <ProductItem items={items} space={true} />;
            }}
          />
        </div>
      </section>

      <HomeContentSection className="bg-blue-200">
        <h1 className="title-thin">10% Off For your First Order!</h1>
        <span className="">Join our mailing list</span>
        <div className="flex justify-center gap-5 pt-5">
          <input
            type="text"
            placeholder="Enter your email"
            className=" placeholder:text-black/50 focus:outline-none md:w-[400px] border-b-2 border-black bg-transparent "
          />
          <Button text="subscribe" />
        </div>
        <img
          className="absolute bottom-20 right-4 hidden lg:block"
          src={deco1}
          alt=""
        />
        <img
          className="absolute top-3 left-[65%] hidden lg:block"
          src={deco2}
          alt=""
        />
        <img
          className="absolute left-20 top-7 hidden lg:block"
          src={deco3}
          alt=""
        />
      </HomeContentSection>

      <section className="mt-5">
        <h2 className="container mx-auto text-3xl flex">
          <div>
            <span className="text-4xl text-red-400">Style</span> Your Own
          </div>
        </h2>
        <SliderComponent items={SLIDER_DATA} components={sliderItem} />
      </section>
    </>
  );
}

export default HomePage;
