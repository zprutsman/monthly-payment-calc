const DownPayment = (props) => {
  const {
    title,
    placeholder,
    type,
    value,
    min,
    max,
    price,
    step,
    downPayment,
    setValue,
  } = props;
  const updateDownPayment = (e) => {
    setValue(e.target.value);
  };
  const downPaymentConverted = (downPayment / 100) * price;

  return (
    <div className="flex-auto p-6 border-2 border-gray-500 m-2">
      <p>{title}</p>
      <input
        placeholder={placeholder}
        className="rounded border-2 border-gray-400 text-base text-green-500"
        type={type}
        value={value}
        onChange={updateDownPayment}
        min={min}
        max={max}
      />
      <span className="pl-2 text-green-500">
        (${downPaymentConverted.toFixed(0)})
      </span>
      <input
        className="block mt-4 mb-0"
        type="range"
        value={value === "" ? min : value}
        onChange={updateDownPayment}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
};

export default DownPayment;
