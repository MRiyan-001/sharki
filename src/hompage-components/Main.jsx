import React from "react";
import Hero from "./Hero";
import Heading from "./Heading";
import Card from "../small-components/Card";

const Main = () => {
  const trendingProducts = [
    {
      id: 1,
      image: "/public/trending-img/t-img1.png",
      name: "Casual Cotton Shirt",
      price: "PKR 2,499/-",
      sale: "-20%",
    },
    {
      id: 2,
      image: "/public/trending-img/t-img2.png",
      name: "Traditional Black Kurta",
      price: "PKR 3,199/-",
      sale: "-15%",
    },
    {
      id: 3,
      image: "/public/trending-img/t-img3.png",
      name: "Slim Fit Trousers",
      price: "PKR 1,999/-",
      sale: "-10%",
    },
    {
      id: 4,
      image: "/public/trending-img/t-img4.png",
      name: "Elegant Shalwar Kameez",
      price: "PKR 4,999/-",
      sale: "-25%",
    },
    {
      id: 5,
      image: "/public/trending-img/t-img5.png",
      name: "Winter Hoodie",
      price: "PKR 2,799/-",
      sale: "-30%",
    },
    {
      id: 6,
      image: "/public/trending-img/t-img6.png",
      name: "Classic White Kurta",
      price: "PKR 2,099/-",
      sale: "-12%",
    },
    {
      id: 7,
      image: "/public/trending-img/t-img7.png",
      name: "Linen Summer Shirt",
      price: "PKR 2,699/-",
      sale: "-18%",
    },
  ];

  return (
    <div className="h-auto w-full">
      <Hero />
      <Heading />

      {/* Cards Section  */}
      <div className="trending my-10 px-4 flex flex-wrap gap-6">
        {trendingProducts.map((trendingProduct, idx) => (
          <Card
            key={idx}
            image={trendingProduct.image}
            name={trendingProduct.name}
            price={trendingProduct.price}
            sale={trendingProduct.sale}
          />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <button className="bg-blue-900 text-white text-[0.9rem] px-4 py-1 mb-6 rounded-md font-semibold">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Main;
