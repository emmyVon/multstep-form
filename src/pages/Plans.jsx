import React from "react";
import Plan from "../components/Plan";
import Button from "../components/Button";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Form from "../components/Form";
import { GlobalContext } from "../Context/StepContext";

const Plans = () => {
  const { planDue, setPlanDue } = GlobalContext();
  return (
    // <Form >
    //   <div className="left-side">
    //         <Steps />
    //     </div>
    // <div className="right-side">
    <div className="Top">
      <div className="Header">
        <Header
          Bigheader={"Select your plan"}
          subheader={"you have the option of a yearly or monthly billing "}
        />
      </div>
      <div className="mid">
        <div>
          <Plan />
        </div>

        <div className="switch">
          <p>monthly</p>
          <div className="switch-btn-container">
            <div
              className={
                planDue === "monthly"
                  ? "switch-dot switched-monthly"
                  : " switch-dot switched-yearly"
              }
              onClick={() =>
                setPlanDue((prev) =>
                  prev === "monthly" ? "yearly" : "monthly"
                )
              }
            />
          </div>
          <p>yearly</p>
        </div>
      </div>
      <div className="foot">
        <Button path={"/addsOn"} back={"/"} />
      </div>
    </div>
    // </Form>
  );
};

export default Plans;
