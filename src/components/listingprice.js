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
    setInsuranceValue,
  } = props;
  const updatePrice = (e) => {
    const estPropertyTax = e.target.value * 0.011;
    const estInsurance = e.target.value * 0.005;
    setValue(e.target.value);
    setTaxValue(estPropertyTax.toFixed(0));
    setInsuranceValue(estInsurance.toFixed(0));
  };
  return (
    <div className="widgetContainer">
      <p
        style={{
          textAlign: "left",
          paddingLeft: 20,
          paddingTop: 7,
          color: "#414042",
          fontWeight: "600",
          fontSize: 15,
        }}
      >
        {title}
      </p>
      <div>
        <span
          style={{
            backgroundColor: "white",
            paddingTop: 2,
            paddingBottom: 3,
            paddingRight: 4,
            color: "#5E6367",
            paddingLeft: 4,
          }}
        >
          $
        </span>
        <input
          style={{
            width: "80%",
            color: "#002a4e",
            marginTop: 5,
            marginBottom: 5,
            fontWeight: "600",
          }}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={updatePrice}
          min={min}
          max={max}
        />
      </div>
      <input
        style={{ width: "80%", marginTop: 5 }}
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
