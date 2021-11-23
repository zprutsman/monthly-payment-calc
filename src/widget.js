import { useEffect, useRef, useState } from "react";
const Widget = (props) => {
  // const [inputPrice, setInputPrice] = useState("");
  const updatePrice = (e) => {
    props.setValue(e.target.value);
  };
  // const updateInputPrice = (e) => {
  //   const value = e.target.value;
  //   setPrice(parseInt(value) || "");
  //   setInputPrice(parseInt(value) || "");
  // };

  return (
    <div className="flex-auto p-6 border-2 border-gray-500 m-2">
      <p>{props.title}</p>
      <input
        placeholder={props.placeholder}
        className="rounded border-2 border-gray-400 text-base text-green-500"
        type={props.type}
        value={props.value}
        onChange={updatePrice}
        min={props.min}
        max={props.max}
      />
      <input
        className="block mt-4 mb-0"
        type="range"
        value={props.value === "" ? props.min : props.value}
        onChange={updatePrice}
        min={props.min}
        max={props.max}
        // min={inputPrice - 50000}
        // max={inputPrice + 50000}
      />
    </div>
  );
};

export default Widget;
