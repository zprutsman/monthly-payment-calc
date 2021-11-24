const ListingPrice = (props) => {
  const {
    title,
    placeholder,
    type,
    value,
    min,
    max,
    step,
    setValue,
    setTaxValue,
  } = props;
  const updatePrice = (e) => {
    const estPropertyTax = (e.target.value * 0.011) / 12;
    setValue(e.target.value);
    setTaxValue(estPropertyTax.toFixed(0));
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
      />
    </div>
  );
};

export default ListingPrice;
