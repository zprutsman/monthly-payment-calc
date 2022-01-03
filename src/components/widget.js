const InterestRate = (props) => {
  const { title, placeholder, type, value, min, max, step, setValue } = props;
  const updatePrice = (e) => {
    setValue(e.target.value);
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
            fontWeight: "500",
          }}
        >
          %
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
          className="input-long"
          type={type}
          value={value}
          onChange={updatePrice}
          min={min}
          max={max}
          step="0.25"
        />
      </div>
      <input
        style={{ width: "80%", marginTop: 5 }}
        className="slider"
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

export default InterestRate;
