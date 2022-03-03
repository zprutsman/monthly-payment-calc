import React from "react";
import { useEffect } from "react";

const Chart = (props) => {
  const {
    paymentPrincipal,
    monthlyPayment,
    insurance,
    propertyTaxMonthly,
    interest,
  } = props;
  return (
    <div
      style={{
        maxWidth: 960,
        margin: "0 0 0 20px",
        paddingBottom: 0,
        paddingTop: 20,
      }}
    >
      <div
        className="interest transition-all mb-2 duration-300 ease-linear p-2 relative"
        style={
          (paymentPrincipal / monthlyPayment) * 100 > 9
            ? {
                width: (paymentPrincipal / monthlyPayment) * 100 + "%",
                height: 30,
                backgroundColor: "#009cde",
              }
            : {
                width: (paymentPrincipal / monthlyPayment) * 100 + "%",
                height: 30,
                backgroundColor: "#009cde",
              }
        }
      >
        <p
          className="transition-all duration-300 ease-linear"
          style={
            (paymentPrincipal / monthlyPayment) * 100 > 9
              ? {
                  fontSize: "16px",
                  color: "white",
                  fontWeight: "500",
                  top: 4,
                  position: "absolute",
                  left: 10,
                }
              : {
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "500",
                  top: -18,
                  position: "absolute",
                  left: 5,
                }
          }
        >
          Principal
        </p>
        <p
          className="principalLabel"
          style={{
            top: 4,
            left: "102%",
            position: "absolute",
            fontSize: "16px",
            color: "white",
            fontWeight: "500",
          }}
        >
          ${paymentPrincipal.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&,")}
        </p>
      </div>
      <div
        className="interest transition-all mb-2 duration-500 ease-linear p-2 relative"
        style={
          (interest / monthlyPayment) * 100 > 9
            ? {
                width: (interest / monthlyPayment) * 100 + "%",
                height: 30,
                backgroundColor: "#929236",
              }
            : {
                width: (interest / monthlyPayment) * 100 + "%",
                height: 30,
                backgroundColor: "#929236",
                marginTop: 20,
              }
        }
      >
        <p
          className="transition-all duration-300 ease-linear"
          style={
            (interest / monthlyPayment) * 100 > 9
              ? {
                  fontSize: "16px",
                  color: "white",
                  fontWeight: "500",
                  top: 4,
                  position: "absolute",
                  left: 10,
                }
              : {
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "500",
                  top: -18,
                  position: "absolute",
                  left: 5,
                }
          }
        >
          Interest
        </p>
        <p
          style={{
            top: 4,
            left: "102%",
            position: "absolute",
            fontSize: "16px",
            color: "white",
            fontWeight: "500",
          }}
        >
          ${interest.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&,")}
        </p>
      </div>
      {insurance == 0 ? null : (
        <div
          className="insurance mb-2 p-2 relative transition-all duration-500 ease-linear"
          style={
            (insurance / monthlyPayment) * 100 > 9
              ? {
                  width: (insurance / monthlyPayment) * 100 + "%",
                  height: 30,
                  backgroundColor: "#E65526",
                }
              : {
                  width: (insurance / monthlyPayment) * 100 + "%",
                  height: 30,
                  backgroundColor: "#E65526",
                  marginTop: 20,
                }
          }
        >
          <p
            className="transition-all duration-300 ease-linear"
            style={
              (insurance / monthlyPayment) * 100 > 9
                ? {
                    fontSize: "16px",
                    color: "white",
                    fontWeight: "500",
                    top: 4,
                    position: "absolute",
                    left: 10,
                  }
                : {
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "500",
                    top: -18,
                    position: "absolute",
                    left: 5,
                  }
            }
          >
            Insurance
          </p>
          <p
            style={{
              top: 4,
              left: "102%",
              position: "absolute",
              fontSize: "16px",
              color: "white",
              fontWeight: "500",
            }}
          >
            ${insurance.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&,")}
          </p>
        </div>
      )}
      {propertyTaxMonthly === 0 ? null : (
        <div
          className="tax transition-all duration-500 ease-linear p-2 relative"
          style={
            (propertyTaxMonthly / monthlyPayment) * 100 > 9
              ? {
                  width: (propertyTaxMonthly / monthlyPayment) * 100 + "%",
                  height: 30,
                  backgroundColor: "#5AC0B1",
                }
              : {
                  width: (propertyTaxMonthly / monthlyPayment) * 100 + "%",
                  height: 30,
                  backgroundColor: "#5AC0B1",
                  marginTop: 20,
                }
          }
        >
          <p
            className="transition-all duration-300 ease-linear"
            style={
              (propertyTaxMonthly / monthlyPayment) * 100 > 9
                ? {
                    fontSize: "16px",
                    color: "white",
                    fontWeight: "500",
                    top: 4,
                    position: "absolute",
                    left: 10,
                  }
                : {
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "500",
                    top: -18,
                    position: "absolute",
                    left: 5,
                  }
            }
          >
            Taxes
          </p>
          <p
            style={{
              top: 4,
              left: "102%",
              position: "absolute",
              fontSize: "16px",
              color: "white",
              fontWeight: "500",
            }}
          >
            ${propertyTaxMonthly.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&,")}
          </p>
        </div>
      )}
    </div>
  );
};

export default Chart;
