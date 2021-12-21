const LoanTerm = (props) => {
  const updateLoanTerm = (e) => {
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
          <select
            style={{
              width: "95%",
              color: "#002a4e",
              fontWeight: "600",
              padding: "0 5px",
            }}
            onChange={updateLoanTerm}
          >
            <option
              style={{
                color: "#002a4e",
                fontWeight: "600",
                fontSize: "14px",
              }}
              value="30"
            >
              30 Years
            </option>
            <option
              style={{
                color: "#002a4e",
                fontWeight: "600",
                fontSize: "14px",
              }}
              value="15"
            >
              15 Years
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default LoanTerm;
