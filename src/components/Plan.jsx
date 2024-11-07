import React, { useState } from "react";
import { plans } from "../assets/data";
import { GlobalContext } from "../Context/StepContext";

const Plan = () => {
  const { planDue, selectedPlan, Selectplan } = GlobalContext();

  return (
    <div className="mid-main plans">
      {plans.map((item) => (
        <div
          key={item.id}
          className={`Singleplan ${
            selectedPlan.id === item.id ? "active-plan" : ""
          }`}
          onClick={() => Selectplan(item.id)} // Use a function in onClick
        >
          <img src={item.image} alt={item.name} />
          <div>
            <h2>{item.plan}</h2>
            <p>
              {`$${planDue === "monthly" ? item.price[0] : item.price[1]}/${
                planDue === "monthly" ? "mo" : "yr"
              }`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plan;
