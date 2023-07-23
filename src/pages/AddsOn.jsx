import React from "react";
import AddOns from "../components/AddOns";
import Button from "../components/Button";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Form from "../components/Form";

const AddsOn = ({ planDue }) => {
  return (
    // <Form>
    //     <div className="left-side">
    //         <Steps />
    //     </div>
    //     <div className="right-side">
    <div className="Top">
      <div className="Header">
        <Header
          Bigheader={"Pick adds-on"}
          subheader={"you have the option of a yearly or monthly billing "}
        />
      </div>
      <div className="mid">
        <AddOns planDue={planDue} />
      </div>

      <div className="foot">
        <Button path={"/Summary"} back={"/plans"} />
      </div>
    </div>
    // </Form>
  );
};

export default AddsOn;
