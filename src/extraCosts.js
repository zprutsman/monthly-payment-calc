const ExtraCosts = (props) => {
  const updateExtraCosts = (e) => {
    let value = e.target.value;
    props.setValue(value);
  };
  return (
    <div
      style={{
        height: 30,
        textAlign: "right",
        paddingTop: 3,
      }}
    >
      <div className="extraCostContainer">
        <p
          style={{
            fontSize: 14,
            paddingRight: 5,
            fontWeight: "600",
            color: "#414042",
          }}
        >
          {props.title}
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
              fontWeight: 500,
            }}
          >
            $
          </span>
          <input
            style={{ width: "80%", color: "#002a4e", fontWeight: "600" }}
            placeholder={props.placeholder}
            type="number"
            value={props.value}
            onChange={updateExtraCosts}
            min={0}
          />
        </div>
      </div>
    </div>
  );
};
export default ExtraCosts;
