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
        borderBottom: "2px solid #5E6367",
        maxWidth: 960,
        margin: "0 0 0 20px",
        paddingBottom: 20,
        paddingTop: 20,
      }}
    >
      <div
        className="interest transition-all mb-2 duration-500 ease-linear p-2 relative"
        style={
          (paymentPrincipal / monthlyPayment) * 100 > 9
            ? {
                width: (paymentPrincipal / monthlyPayment) * 100 + "%",
                height: 25,
                backgroundColor: "#009cde",
              }
            : {
                width: (paymentPrincipal / monthlyPayment) * 100 + "%",
                height: 25,
                backgroundColor: "#009cde",
              }
        }
      >
        <p
          style={
            (paymentPrincipal / monthlyPayment) * 100 > 9
              ? {
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "500",
                  top: 3,
                  position: "absolute",
                  left: 10,
                  right: 0,
                  bottom: 0,
                  transition: "0.5s ease-linear",
                }
              : {
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "500",
                  top: -18,
                  position: "absolute",
                  left: 5,
                  right: 0,
                  bottom: 0,
                  transition: "0.5s ease-linear",
                }
          }
        >
          Principle
        </p>
        <p
          style={{
            top: 2,
            right: -50,
            position: "absolute",
            fontSize: "15px",
            color: "white",
            fontWeight: "500",
          }}
        >
          ${paymentPrincipal.toFixed(0)}
        </p>
      </div>
      <div
        className="interest transition-all mb-2 duration-500 ease-linear p-2 relative"
        style={
          (interest / monthlyPayment) * 100 > 9
            ? {
                width: (interest / monthlyPayment) * 100 + "%",
                height: 25,
                backgroundColor: "#929236",
              }
            : {
                width: (interest / monthlyPayment) * 100 + "%",
                height: 25,
                backgroundColor: "#929236",
                marginTop: 20,
              }
        }
      >
        <p
          style={
            (interest / monthlyPayment) * 100 > 9
              ? {
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "500",
                  top: 3,
                  position: "absolute",
                  left: 10,
                  right: 0,
                  bottom: 0,
                  transition: "0.5s ease-linear",
                }
              : {
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "500",
                  top: -18,
                  position: "absolute",
                  left: 5,
                  right: 0,
                  bottom: 0,
                  transition: "0.5s ease-linear",
                }
          }
        >
          Interest
        </p>
        <p
          style={{
            top: 2,
            right: -50,
            position: "absolute",
            fontSize: "15px",
            color: "white",
            fontWeight: "500",
          }}
        >
          ${interest.toFixed(0)}
        </p>
      </div>
      {insurance === 0 ? null : (
        <div
          className="insurance mb-2 p-2 relative transition-all duration-500 ease-linear"
          style={
            (insurance / monthlyPayment) * 100 > 9
              ? {
                  width: (insurance / monthlyPayment) * 100 + "%",
                  height: 25,
                  backgroundColor: "#E65526",
                }
              : {
                  width: (insurance / monthlyPayment) * 100 + "%",
                  height: 25,
                  backgroundColor: "#E65526",
                  marginTop: 20,
                }
          }
        >
          <p
            style={
              (insurance / monthlyPayment) * 100 > 9
                ? {
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "500",
                    top: 3,
                    position: "absolute",
                    left: 10,
                    right: 0,
                    bottom: 0,
                    transition: "0.5s ease-linear",
                  }
                : {
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "500",
                    top: -18,
                    position: "absolute",
                    left: 5,
                    right: 0,
                    bottom: 0,
                    transition: "0.5s ease-linear",
                  }
            }
          >
            Insurance
          </p>
          <p
            style={{
              top: 2,
              right: -50,
              position: "absolute",
              fontSize: "15px",
              color: "white",
              fontWeight: "500",
            }}
          >
            ${insurance}
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
                  height: 25,
                  backgroundColor: "#5AC0B1",
                }
              : {
                  width: (propertyTaxMonthly / monthlyPayment) * 100 + "%",
                  height: 25,
                  backgroundColor: "#5AC0B1",
                  marginTop: 20,
                }
          }
        >
          <p
            style={
              (propertyTaxMonthly / monthlyPayment) * 100 > 9
                ? {
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "500",
                    top: 3,
                    position: "absolute",
                    left: 10,
                    right: 0,
                    bottom: 0,
                    transition: "0.5s ease-linear",
                  }
                : {
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "500",
                    top: -18,
                    position: "absolute",
                    left: 5,
                    right: 0,
                    bottom: 0,
                    transition: "0.5s ease-linear",
                  }
            }
          >
            Taxes
          </p>
          <p
            style={{
              top: 2,
              right: -50,
              position: "absolute",
              fontSize: "15px",
              color: "white",
              fontWeight: "500",
            }}
          >
            ${propertyTaxMonthly.toFixed(0)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Chart;
