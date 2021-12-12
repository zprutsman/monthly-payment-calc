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
  const [price, setPrice] = useState("300000");
  const [propertyTax, setPropertyTax] = useState("1500");
  const [insurance, setInsurance] = useState("1000");
  const r = toNum(interestRate) / 100 / 12;
  const n = 12 * 30;
  const principal = toNum(price) * (1 - toNum(downPayment) / 100);
  const interest = principal * r;
  const numerator = (1 + r) ** n;
  const denominator = (1 + r) ** n - 1;
  const loanPayment = principal * r * (numerator / denominator);
  const paymentPrincipal = loanPayment - interest;
  const monthlyPayment = loanPayment + toNum(propertyTax) + toNum(insurance);
  const amortization = (b) => {
    let balance = b;
    let interestPaid = 0;
    while (balance > 0) {
      interestPaid += balance * r;
      balance -= loanPayment - balance * r;
    }
    return interestPaid.toFixed(0);
  };
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
        <p className="ml-10">Total Interest Paid: ${amortization(principal)}</p>
        {Number.isNaN(monthlyPayment) ? null : (
          <Chart
            monthlyPayment={monthlyPayment}
            propertyTax={propertyTax}
            loanPayment={loanPayment}
            insurance={insurance}
            interest={interest}
            paymentPrincipal={paymentPrincipal}
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
          title="Property Tax (Annual)"
          value={propertyTax}
          setValue={setPropertyTax}
        />
      </div>
      <p className="text-xs ml-10 mt-0">
        For general informational purposes only. Actual rates available to you
        will depend on many factors including lender, income, credit, location,
        and property value. Contact a mortgage broker to find out what programs
        are available to you.
      </p>
    </div>
  );
}

export default App;
