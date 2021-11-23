import React from "react";

const Chart = (props) => {
  const { loanPayment, monthlyPayment, insurance, propertyTax } = props;

  return (
    <>
      <div
        className="principal border-t-8 border-blue-400 mb-2 transition-all duration-500 ease-linear"
        style={{
          width: (loanPayment / monthlyPayment) * 100 + "%",
          height: 8,
        }}
      ></div>
      <div
        className="insurance border-t-8 border-yellow-400 mb-2 transition-all duration-500 ease-linear"
        style={{ width: (insurance / monthlyPayment) * 100 + "%", height: 8 }}
      ></div>
      <div
        className="tax border-t-8 border-purple-700 transition-all duration-500 ease-linear"
        style={{
          width: (propertyTax / monthlyPayment) * 100 + "%",
          height: 8,
        }}
      ></div>
    </>
  );
};

export default Chart;
