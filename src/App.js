import { useEffect, useRef, useState } from "react";
import InterestRate from "./components/widget";
import "./index.css";
import ExtraCosts from "./components/extraCosts";
import Chart from "./components/Chart";
import DownPayment from "./components/downpayment";
import ListingPrice from "./components/listingprice";
import LoanTerm from "./components/LoanTerm";
import banner from "./banner.jpg";

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
  const [loanTerm, setLoanTerm] = useState("30");
  const propertyTaxMonthly = toNum(propertyTax) / 12;
  const r = toNum(interestRate) / 100 / 12;
  const n = 12 * toNum(loanTerm);
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
    <div className="calcContainer">
      <div
        style={{
          background: "#F1F1F2",
          padding: "10px 20px 10px 40px",
          display: "grid",
          gridTemplateColumns: "65% 35%",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: 18,
              fontWeight: "500",
              color: "#5E6367",
              borderBottom: "1px solid #bbbcbc",
              maxWidth: 400,
              marginBottom: 7,
              paddingBottom: 10,
              paddingTop: 10,
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
                : `$${monthlyPayment
                    .toFixed(0)
                    .replace(/\d(?=(\d{3})+$)/g, "$&,")}`}
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
              ${amortization(principal).replace(/\d(?=(\d{3})+$)/g, "$&,")}
            </span>
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <p
            style={{
              fontSize: 30,
              maxWidth: 200,
              lineHeight: "1.2",
              textAlign: "right",
              color: "#5E6367",
              fontWeight: "500",
            }}
          >
            Mortgage Calculator
          </p>
          <img
            style={{
              maxWidth: 65,
              alignSelf: "top",
              justifySelf: "start",
              marginTop: -25,
            }}
            src={banner}
          />
        </div>
      </div>
      <div></div>
      <div
        style={{
          backgroundColor: "#002a4e",
          padding: "5px 25px 20px 20px",
        }}
      >
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
              prefix={"$"}
            />
            <ExtraCosts
              title="Property Taxes"
              value={propertyTax}
              setValue={setPropertyTax}
              prefix={"$"}
            />
            <LoanTerm
              value={loanTerm}
              setValue={setLoanTerm}
              title="Loan Term"
            />
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "55% 45%",
            padding: "0 20px",
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: "#bbbcbc",
              fontWeight: "500",
              maxWidth: 500,
            }}
          >
            For general informational purposes only. Actual rates available to
            you will depend on many factors including lender, income, credit,
            location, and property value. Contact a mortgage broker to find out
            what programs are available to you.
          </p>
          <p
            style={{
              justifySelf: "center",
              alignSelf: "center",
              fontSize: 14,
              color: "white",
              textTransform: "uppercase",
              letterSpacing: 2,
              fontWeight: "500",
            }}
          >
            Windermere Real Estate
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
