// CategoryList.js
import React, { useState } from "react";
import CardList from "./CardList";
import { ArrowDownRightIcon, ArrowLeftIcon } from "@heroicons/react/16/solid";

const categoryColors = {
  快樂: "bg-[#FFE589]",
  期待: "bg-[#F8C18F]",
  安心: "bg-[#CEE5AF]",
  不安: "bg-[#E0CACA]",
  驚訝: "bg-[#B4B9E7]",
  低落: "bg-[#C5DDE8]",
  討厭: "bg-[#D6CAC0]",
  生氣: "bg-[#E0AEAE]",
  其他: "bg-gray-200"
};

const CategoryList = ({ cards }) => {
  const [openCategories, setOpenCategories] = useState(
    Object.keys(categoryColors)
  );

  if (!cards) {
    return <p>載入中...</p>;
  }

  const cardArray = Array.isArray(cards) ? cards : Object.values(cards);
  if (cardArray.length === 0) {
    return <p>沒有情緒卡可顯示</p>;
  }

  const categories = [...new Set(cardArray.map((card) => card.category))];

  const toggleCategory = (category) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="flex flex-col space-y-4">
      {categories.map((category) => (
        <div key={category} className="flex">
          <button
            className={`flex flex-col justify-center shadow-lg border-gray-400 shrink-0 p-2 items-center transition-all duration-1000 ease-in-out ${
              categoryColors[category] || "bg-white"
            } ${
              openCategories.includes(category)
                ? "border-l w-10 h-52 rounded-l-full"
                : "w-24 h-14 rounded-xl"
            }`}
            onClick={() => toggleCategory(category)}
          >
            <h2 className="text-xl text-gray-800">{category}</h2>
            <div className="size-4 text-gray-400">
              {openCategories.includes(category) ? 
                <ArrowLeftIcon/>
               : 
                <ArrowDownRightIcon/>
              }
            </div>
          </button>
          <div
            className={`overflow-x-scroll transition-all duration-1000 ${
              openCategories.includes(category)
                ? "max-w-full max-h-52 border-r-4 "
                : "max-w-0 max-h-0"
            }`}
          >
            <CardList
              cards={cardArray.filter((card) => card.category === category)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
