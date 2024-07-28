// Card.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

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

const Card = ({ card }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const bgColor = categoryColors[card.category] || "bg-white";

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="group group min-w-[10.8rem] px-2 cursor-pointer"
        onClick={toggleCard}
      >
        <div 
          className={`shadow-md border border-gray-400 rounded-2xl p-4 ${bgColor}`}
        >
          <img
            src={`/images/card/${card.ID}.svg`}
            alt={card.name}
            className="w-full h-auto group-hover:scale-110 duration-500	"
          />
          <h3 className="text-2xl font-bold mt-2 text-center">{card.name}</h3>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={toggleCard}
        >
          <div
            className={`flex items-center w-5/6 max-w-2xl p-10 rounded-2xl ${bgColor}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col-reverse md:flex-row w-full">
              <div className="flex flex-col md:w-7/12 px-5 text-gray-800">
                <h3 className="text-5xl font-bold mb-2">{card.name}</h3>
                <div className="border border-slate-300 mb-4"></div>
                <h4 className="text-2xl">{t("element.cardDescription")}</h4>
                <p className="text-lg mb-2">{card.description}</p>
                <h4 className="text-2xl">{t("element.cardExample")}</h4>
                <p className="text-md italic">{card.example}</p>
              </div>
              <div className="mb-6 md:mb-0 md:w-5/12">
                <img
                  src={`/images/card/${card.ID}.svg`}
                  alt={card.name}
                  className="w-full h-auto"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
