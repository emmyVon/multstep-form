import React from "react";
import Sum from "../components/Sum";
import Button from "../components/Button";
import Header from "../components/Header";

const Summary = () => {
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
        <Sum
          plan={"Arcade"}
          price1={`$9/mo`}
          price2={`+$1/mo`}
          price3={`+$2/mo`}
        />
        <div>
          <p>Total(per month)</p>
          <h3>{`+$12/mo`}</h3>
        </div>
      </div>

      <div className="foot">
        <Button path={"/final"} back={"/addsOn"} />
      </div>
    </>
  );
};

export default Summary;
