"use client";

import { useState, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export default function BasicSlider({ children }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (scrollOffset: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollOffset;
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  return (
    <div className="relative w-full overflow-x-scroll">
      <div
        ref={sliderRef}
        className="flex items-stretch justify-start w-max space-x-4"
      >
        {children}
      </div>
      {scrollLeft > 0 && (
        <button
          className="absolute top-0 bottom-0 left-0 px-4 py-2 bg-gray-200"
          onClick={() => handleScroll(-100)}
        >
          {"<"}
        </button>
      )}
      {sliderRef.current &&
        sliderRef.current.scrollWidth >
          sliderRef.current.clientWidth + scrollLeft && (
          <button
            className="absolute top-0 bottom-0 right-0 px-4 py-2 bg-gray-200"
            onClick={() => handleScroll(100)}
          >
            {">"}
          </button>
        )}
    </div>
  );
}
