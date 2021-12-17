import { useEffect, useRef, useState } from "react";
import InterestRate from "./widget";
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
  const [propertyTax, setPropertyTax] = useState("15000");
  const [insurance, setInsurance] = useState("1000");
  const propertyTaxMonthly = toNum(propertyTax) / 12;
  const r = toNum(interestRate) / 100 / 12;
  const n = 12 * 30;
  const principal = toNum(price) * (1 - toNum(downPayment) / 100);
  const interest = principal * r;
  const numerator = (1 + r) ** n;
  const denominator = (1 + r) ** n - 1;
  const loanPayment = principal * r * (numerator / denominator);
  const paymentPrincipal = loanPayment - interest;
  const monthlyPayment = loanPayment + propertyTaxMonthly + toNum(insurance);
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
    <div className="container">
      <div
        style={{
          background: "#F1F1F2",
          padding: "10px 20px",
        }}
      >
        <p
          style={{
            fontSize: 18,
            fontWeight: "500",
            color: "#5E6367",
            borderBottom: "1px solid #bbbcbc",
            maxWidth: 400,
            marginBottom: 7,
            paddingBottom: 10,
          }}
        >
          Monthly payment:
          <span
            style={{
              fontSize: 22,
              color: "#002a4e",
              fontWeight: "600",
              paddingLeft: 10,
            }}
          >
            {Number.isNaN(monthlyPayment)
              ? "Please enter values"
              : `$${monthlyPayment.toFixed(0)}`}
          </span>
        </p>
        <p
          style={{
            fontSize: 18,
            fontWeight: "500",
            color: "#5E6367",
            maxWidth: 400,
            paddingBottom: 10,
          }}
        >
          Total interest paid:
          <span
            style={{
              fontSize: 22,
              color: "#002a4e",
              fontWeight: "600",
              paddingLeft: 10,
            }}
          >
            ${amortization(principal)}
          </span>
        </p>
      </div>
      <div style={{ backgroundColor: "#002a4e", paddingBottom: 20 }}>
        {Number.isNaN(monthlyPayment) ? null : (
          <Chart
            monthlyPayment={monthlyPayment}
            propertyTaxMonthly={propertyTaxMonthly}
            loanPayment={loanPayment}
            insurance={insurance}
            interest={interest}
            paymentPrincipal={paymentPrincipal}
          />
        )}

        <div class="inputContainer">
          <ListingPrice
            title="Listing Price $"
            type="number"
            placeholder="Enter Listing Price"
            min={50000}
            max={5000000}
            setValue={setPrice}
            value={price}
            step={1}
            setTaxValue={setPropertyTax}
          />
          <DownPayment
            title="Down Payment %"
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
          <InterestRate
            title="Interest Rate %"
            type="number"
            placeholder="Enter Interest Rate"
            min={1}
            max={10}
            value={interestRate}
            setValue={setInterestRate}
            step={0.25}
          />
          <div
            style={{
              backgroundColor: "#efefef",
              paddingRight: 15,
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <ExtraCosts
              title="Insurance"
              value={insurance}
              setValue={setInsurance}
            />
            <ExtraCosts
              title="Property Taxes"
              value={propertyTax}
              setValue={setPropertyTax}
            />
            <ExtraCosts title="Loan Term" />
          </div>
        </div>
        <p
          style={{
            color: "#efefef",
            marginLeft: 20,
            marginTop: 30,
          }}
        >
          For general informational purposes only. Actual rates available to you
          will depend on many factors including lender, income, credit,
          location, and property value. Contact a mortgage broker to find out
          what programs are available to you.
        </p>
      </div>
    </div>
  );
}

export default App;
