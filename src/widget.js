const Widget = (props) => {
  const { title, placeholder, type, value, min, max, step, setValue } = props;
  const updatePrice = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="flex-auto p-6 border-2 border-gray-500 m-2">
      <p>{title}</p>
      <input
        placeholder={placeholder}
        className="rounded border-2 border-gray-400 text-base text-green-500"
        type={type}
        value={value}
        onChange={updatePrice}
        min={min}
        max={max}
      />
      <input
        className="block mt-4 mb-0"
        type="range"
        value={value === "" ? min : value}
        onChange={updatePrice}
        min={min}
        max={max}
        step={step}
        // min={inputPrice - 50000}
        // max={inputPrice + 50000}
      />
    </div>
  );
};

export default Widget;
