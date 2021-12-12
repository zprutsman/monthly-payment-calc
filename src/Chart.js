import React from "react";

const Chart = (props) => {
  const { paymentPrincipal, monthlyPayment, insurance, propertyTax, interest } =
    props;

  return (
    <div className="pl-10 pt-6">
      <div
        className="principal bg-blue-400 mb-2 transition-all duration-500 ease-linear p-2 relative"
        style={{
          width: (paymentPrincipal / monthlyPayment) * 100 + "%",
          height: 25,
        }}
      >
        <p className="text-xs text-white pb-1">Principal</p>
        <p className="absolute right-0.5 bottom-0.5 text-xs text-white">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumSignificantDigits: 4,
          }).format(paymentPrincipal)}
        </p>
      </div>
      <div
        className="tax bg-green-300 transition-all duration-500 ease-linear p-2 mb-2 relative"
        style={{
          width: (interest / monthlyPayment) * 100 + "%",
          height: 25,
        }}
      >
        <p className="text-xs text-white pb-1">Interest</p>
        <p className="absolute right-0.5 bottom-0.5 text-xs text-white">
          ${interest.toFixed(0)}
        </p>
      </div>
      <div
        className="insurance bg-yellow-400 mb-2 p-2 relative transition-all duration-500 ease-linear"
        style={{
          width: (insurance / monthlyPayment) * 100 + "%",
          height: 25,
        }}
      >
        <p className="text-xs text-white pb-1">Homeowner's Insurance</p>
        <p className="absolute right-0.5 bottom-0.5 text-xs text-white">
          ${insurance}
        </p>
      </div>
      <div
        className="tax bg-purple-700 transition-all duration-500 ease-linear p-2 relative"
        style={{
          width: (propertyTax / monthlyPayment) * 100 + "%",
          height: 25,
        }}
      >
        <p className="text-xs text-white pb-1">Property Tax</p>
        <p className="absolute right-0.5 bottom-0.5 text-xs text-white">
          ${propertyTax}
        </p>
      </div>
    </div>
  );
};

export default Chart;
