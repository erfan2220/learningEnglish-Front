"use client";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

const PriceSlider = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  return (
    <div>
      <Slider
        step={10}
        allowCross={true}
        railStyle={{ backgroundColor: "#D2D2D2" }}
        min={0}
        max={10000}
        value={[minPrice, maxPrice]}
        onChangeComplete={(value: number | number[]) => {
          if (Array.isArray(value)) {
            setMaxPrice(value[1]);
            setMinPrice(value[0]);
          }
        }}
      />
    </div>
  );
};

export default PriceSlider;
