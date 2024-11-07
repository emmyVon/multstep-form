import React from "react";
import { GlobalContext } from "../Context/StepContext";
import { Link } from "react-router-dom";

const Sum = () => {
  const { selectedPlan, addOns, planDue } = GlobalContext();
  //   for (let i = 0; i < addOns.length; i++) {
  //     const price = 0;
  //     const sum = addOns.map((item) => {});
  //   }
  const TotalAddons = () => {
    const plantotal =
      planDue === "monthly" ? selectedPlan.price[0] : selectedPlan.price[1];
    let Addontotal = 0;

    addOns.forEach((addon) => {
      const { price } = addon;
      Addontotal +=
        addOns.length > 0 ? (planDue === "monthly" ? price[0] : price[1]) : 0;
    });
    const total = plantotal + Addontotal;
    return total;
  };

  return (
    <>
      <div className="Summary">
        <div className="item">
          <div>
            <h3>{selectedPlan.plan}</h3>
            <Link to="/plans">change</Link>
          </div>
          <p>
            {`$${
              planDue === "monthly"
                ? selectedPlan.price[0]
                : selectedPlan.price[1]
            }/${planDue === "monthly" ? "mo" : "yr"}`}
          </p>
        </div>
        <div className="sum-divid" />
        {addOns.map((item) => {
          return (
            <div className="item" key={item.title}>
              <p>{item.title}</p>
              <p>{`+$${planDue === "monthly" ? item.price[0] : item.price[1]}/${
                planDue === "monthly" ? "mo" : "yr"
              }`}</p>
            </div>
          );
        })}
      </div>
      <div>
        <p>Total({planDue === "monthly" ? "per month" : "per year"})</p>
        <h3>{`$${TotalAddons()}/${planDue === "monthly" ? "mo" : "yr"}`}</h3>
      </div>
    </>
  );
};

export default Sum;
