import React, { useState } from "react";
import Button from "../component/Button";
import ProductCard from "../component/ProductCard";
import { dataBuah, dataSayuran } from "../services/getDataProduct";
import dataProducts from "../services/MockApi";

const useProductdata = (category) => {
  switch (category) {
    case "buah":
      return dataBuah;
    case "sayuran":
      return dataSayuran;
    default:
      return dataProducts;
  }
};
const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };
  const products = useProductdata(activeCategory);

  return (
    <div className="mt-24 ">
      <div className=" py-8 flex gap-2 justify-center flex-wrap">
        <Button
          text="Semua"
          isActive={activeCategory === "all"}
          onClick={() => handleCategoryChange("all")}
        />
        <Button
          text="Sayuran"
          isActive={activeCategory === "sayuran"}
          onClick={() => handleCategoryChange("sayuran")}
        />
        <Button
          text="Buah"
          isActive={activeCategory === "buah"}
          onClick={() => handleCategoryChange("buah")}
        />
      </div>
      <div className=" flex flex-wrap justify-center gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            productName={product.ProductName}
            price={product.price}
            alt={product.ProductName}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
