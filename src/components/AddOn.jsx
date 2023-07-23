import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { GlobalContext } from "../Context/StepContext";

const AddOn = ({ title, info, price }) => {
  const [Select, setSelect] = useState(false);
  const { planDue } = GlobalContext();
  return (
    <div
      className={Select ? "active-addon add-on" : "add-on"}
      onClick={() => setSelect((prev) => !prev)}
    >
      <div>
        <span>
          <FcCheckmark style={{ backgroundColor: "white" }} />
        </span>
        <div>
          <h3>{title}</h3>
          <p>{info}</p>
        </div>
      </div>
      <p>{planDue === "monthly" ? price[0] : price[1]}</p>
    </div>
  );
};

export default AddOn;
