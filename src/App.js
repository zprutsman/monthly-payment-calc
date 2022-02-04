import { useEffect, useRef, useState } from "react";
import InterestRate from "./components/widget";
import "./index.css";
import ExtraCosts from "./components/extraCosts";
import Chart from "./components/Chart";
import DownPayment from "./components/downpayment";
import ListingPrice from "./components/listingprice";
import LoanTerm from "./components/LoanTerm";
import banner from "./Calc-icon-tab.png";
import arrows from "./Calc-arrows.png";

const toNum = (n) => {
  if (n === "") {
    return 0;
  }
  return parseFloat(n);
};
function App() {
  const [downPayment, setDownPayment] = useState("10");
  const [interestRate, setInterestRate] = useState("3.75");
  const [price, setPrice] = useState("400000");
  const [propertyTax, setPropertyTax] = useState("4400");
  const [insurance, setInsurance] = useState("2000");
  const [loanTerm, setLoanTerm] = useState("30");
  const monthlyInsurance = toNum(insurance) / 12;
  const propertyTaxMonthly = toNum(propertyTax) / 12;
  const r = toNum(interestRate) / 100 / 12;
  const n = 12 * toNum(loanTerm);
  const principal = toNum(price) * (1 - toNum(downPayment) / 100);
  const interest = principal * r;
  const numerator = (1 + r) ** n;
  const denominator = (1 + r) ** n - 1;
  const loanPayment = principal * r * (numerator / denominator);
  const paymentPrincipal = loanPayment - interest;
  const monthlyPayment = loanPayment + propertyTaxMonthly + monthlyInsurance;
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
      <div className="headingContainer">
        <div className="bannerContainer">
          <img
            style={{
              maxWidth: 60,
              alignSelf: "top",
              justifySelf: "start",
              marginTop: -17,
              marginLeft: 15,
            }}
            src={banner}
          />
          <div>
            <p
              style={{
                fontSize: 32,
                maxWidth: 700,
                lineHeight: "1.2",
                textAlign: "left",
                color: "#002a4e",
                fontWeight: "600",
                alignSelf: "top",
                textTransform: "uppercase",
                marginTop: 15,
              }}
            >
              Mortgage Calculator
            </p>
            <p
              style={{
                marginTop: 8,
                marginBottom: 10,
                fontSize: 15,
                color: "#414042",
                fontStyle: "italic",
                maxWidth: 500,
                fontWeight: "500",
              }}
            >
              This is a breakdown of your first monthly payment. Future payments
              will change over time. Connect with your agent for&nbsp;more
              information on amortization details.
            </p>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "24% 52% 24%",
              marginTop: 20,
              alignContent: "center",
            }}
          >
            <p
              style={{
                borderTop: "#bbbcbc 2px solid",
                marginTop: 10,
              }}
            ></p>
            <p
              style={{
                fontSize: 16,
                textTransform: "uppercase",
                fontWeight: "600",
                color: "#5E6367",
                textAlign: "center",
              }}
            >
              Monthly Payment
            </p>
            <p
              style={{
                borderTop: "#bbbcbc 2px solid",
                marginTop: 10,
              }}
            ></p>
          </div>
          <p
            style={{
              fontSize: 32,
              fontWeight: "500",
              color: "#002a4e",
              borderBottom: "2px solid #bbbcbc",
              maxWidth: 400,
              marginBottom: 7,
              paddingBottom: 10,
              paddingTop: 5,
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {Number.isNaN(monthlyPayment)
              ? "Please enter values"
              : `$${monthlyPayment
                  .toFixed(0)
                  .replace(/\d(?=(\d{3})+$)/g, "$&,")}`}
          </p>
          <p
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: "#5E6367",
              maxWidth: 400,
              paddingBottom: 10,
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Total interest paid:
            <span
              style={{
                fontSize: 18,
                color: "#002a4e",
                fontWeight: "600",
                paddingLeft: 10,
              }}
            >
              ${amortization(principal).replace(/\d(?=(\d{3})+$)/g, "$&,")}
            </span>
          </p>
        </div>
      </div>
      <div></div>
      <div
        style={{
          backgroundColor: "#002a4e",
          padding: "5px 25px 5px 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "8% 92%",
            margin: "20px 10px",
            gap: 15,
          }}
        >
          <img
            style={{
              maxWidth: 50,
              justifySelf: "right",
            }}
            src={arrows}
          ></img>
          <p
            style={{
              fontSize: 15,
              color: "white",
              fontStyle: "italic",
              maxWidth: 725,
              fontWeight: "500",
            }}
          >
            The current values below are based on national averages. Choose
            different values and use the sliders to experiment with different
            principal amounts, interest rates, down payments, taxes, and
            insurance to see what you can afford.
          </p>
        </div>
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
          <div
            style={{
              display: "grid",
              backgroundColor: "#efefef",
              gridTemplateColumns: "40% 60%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
            <p
              style={{
                fontSize: 15,
                color: "#414042",
                fontStyle: "italic",
                fontWeight: "500",
                textIndent: -5,
              }}
            >
              *See today’s current rates below to input&nbsp;the&nbsp;most
              accurate rate.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#efefef",
            paddingTop: 10,
            paddingBottom: 10,
            display: "grid",
            gridTemplateColumns: "30% 30% 39%",
            maxWidth: 955,
            margin: "0 auto",
            justifyContent: "center",
          }}
        >
          <LoanTerm
            value={loanTerm}
            setValue={setLoanTerm}
            title="Mortgage Term"
          />
          <ExtraCosts
            title="Yearly Insurance"
            value={insurance}
            setValue={setInsurance}
            prefix={"$"}
          />
          <ExtraCosts
            title="Yearly Property Taxes"
            value={propertyTax}
            setValue={setPropertyTax}
            prefix={"$"}
          />
        </div>
        {Number.isNaN(monthlyPayment) ? null : (
          <Chart
            monthlyPayment={monthlyPayment}
            propertyTaxMonthly={propertyTaxMonthly}
            loanPayment={loanPayment}
            insurance={monthlyInsurance}
            interest={interest}
            paymentPrincipal={paymentPrincipal}
          />
        )}
        <div className="disclaimerContainer">
          <p>&nbsp;</p>
          <p
            style={{
              justifySelf: "center",
              alignSelf: "center",
              fontSize: 14,
              color: "white",
              textTransform: "uppercase",
              letterSpacing: 2,
              fontWeight: "500",
              marginTop: 20,
              marginBottom: 20,
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
