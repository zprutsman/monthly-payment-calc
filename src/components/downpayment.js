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
    <div className="widgetContainer">
      <p
        style={{
          textAlign: "left",
          paddingLeft: 20,
          paddingTop: 7,
          color: "#414042",
          fontWeight: "600",
          fontSize: 14,
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
            fontWeight: "500",
          }}
        >
          %
        </span>
        <input
          style={{
            width: "40%",
            color: "#002a4e",
            marginTop: 5,
            marginBottom: 5,
            fontWeight: "600",
          }}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={updateDownPayment}
          min={min}
          max={max}
        />
        <span
          style={{
            color: "#414042",
            fontWeight: "600",
            fontSize: 14,
            paddingLeft: 10,
          }}
        >
          (${downPaymentConverted.toLocaleString()})
        </span>
      </div>
      <input
        style={{ width: "80%", marginTop: 5 }}
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
