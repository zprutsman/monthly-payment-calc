import { useEffect, useRef, useState } from "react";
import Widget from "./widget";
import "./index.css";
import ExtraCosts from "./extraCosts";
import Chart from "./Chart";
import DownPayment from "./downpayment";
import ListingPrice from "./listingprice";

const toNum = (n) => {
  if (n === "") {
    return 0;
  }
  return parseFloat(n);
};
function App() {
  const [downPayment, setDownPayment] = useState("10");
  const [interestRate, setInterestRate] = useState("5");
  const [price, setPrice] = useState("100000");
  const [propertyTax, setPropertyTax] = useState("1000");
  const [insurance, setInsurance] = useState("1500");
  const r = toNum(interestRate) / 100 / 12;
  const n = 12 * 30;
  const principal = toNum(price) * (1 - toNum(downPayment) / 100);
  const numerator = (1 + r) ** n;
  const denominator = (1 + r) ** n - 1;
  const loanPayment = principal * r * (numerator / denominator);
  const monthlyPayment = loanPayment + toNum(propertyTax) + toNum(insurance);
  return (
    <div>
      <div>
        <p className="pt-2 px-10">
          {" "}
          Your monthly payment is:&ensp;
          {Number.isNaN(monthlyPayment)
            ? "Please enter values"
            : `$${monthlyPayment.toFixed(0)}`}
        </p>
        {Number.isNaN(monthlyPayment) ? null : (
          <Chart
            monthlyPayment={monthlyPayment}
            propertyTax={propertyTax}
            loanPayment={loanPayment}
            insurance={insurance}
          />
        )}
      </div>
      <div className="flex p-6">
        <ListingPrice
          title="Listing Price"
          placeholder="Enter Listing Price"
          min={50000}
          max={5000000}
          setValue={setPrice}
          value={price}
          step={1}
          setTaxValue={setPropertyTax}
        />
        <DownPayment
          title="Down Payment"
          type="number"
          placeholder="Down Payment Percent"
          min={0}
          max={40}
          value={downPayment}
          setValue={setDownPayment}
          step={1}
          downPayment={downPayment}
          price={price}
        />
        <Widget
          title="Interest Rate"
          type="number"
          placeholder="Enter Interest Rate"
          min={1}
          max={10}
          value={interestRate}
          setValue={setInterestRate}
          step={0.25}
        />
        <ExtraCosts
          title="Homeowner's Insurance"
          value={insurance}
          setValue={setInsurance}
        />
        <ExtraCosts
          title="Property Tax"
          value={propertyTax}
          setValue={setPropertyTax}
        />
      </div>
    </div>
  );
}

export default App;
