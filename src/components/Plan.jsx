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
          onClick={Selectplan(item.id)}
        >
          <img src={item.image} alt={item.name} />
          <div>
            <h2>{item.plan}</h2>
            <p>{`${item.price}/${planDue === "monthly" ? "mo" : "yr"} `}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plan;
