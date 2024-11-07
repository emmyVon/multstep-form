import React from "react";
import Sum from "../components/Sum";
import Button from "../components/Button";
import Header from "../components/Header";
import { GlobalContext } from "../Context/StepContext";

const Summary = () => {
  const { selectedPlan, addOns, planDue } = GlobalContext();
  return (
    <>
      <div className="Top">
        <div className="Header">
          <Header
            Bigheader={"Finishing Up"}
            subheader={"Double-check everything looks OK before confirming"}
          />
        </div>
      </div>
      <div className="mid">
        <Sum />
      </div>

      <Button path={"/final"} back={"/addsOn"} />
    </>
  );
};

export default Summary;
