import Image from "next/image";
import React, { useState, useEffect } from "react";

export interface IHighlightCustomer {
  name: string;
  image: string;
}

interface BottomTopSliderProps {
  list: IHighlightCustomer[];
}

const ITEMS_PER_PAGE = 4;

const BottomTopSlider: React.FC<BottomTopSliderProps> = ({ list }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const groupedItems: IHighlightCustomer[][] = [];
  for (let i = 0; i < list.length; i += ITEMS_PER_PAGE) {
    groupedItems.push(list.slice(i, i + ITEMS_PER_PAGE));
  }

  const extendedList = [...groupedItems, groupedItems[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === groupedItems.length - 1) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(0);
          }, 500);
          return prevIndex + 1;
        } else {
          setIsTransitioning(true);
          return prevIndex + 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [groupedItems.length]);

  return (
    <div className="mb-6 md:my-6">
      <div className="relative h-24 overflow-hidden md:h-36">
        <div
          className={`absolute inset-0 w-full ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{ transform: `translateY(-${currentIndex * 100}%)` }}
        >
          {extendedList.map((group, index) => (
            <div key={index} className="flex h-24 items-center justify-center py-6 md:h-36">
              <div className="grid w-full grid-cols-4 gap-4 px-4">
                {group.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="rounded-full object-cover"
                    />
                    <span className="text-center text-sm font-semibold">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomTopSlider;
