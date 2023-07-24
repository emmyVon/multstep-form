import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { GlobalContext } from "../Context/StepContext";

const AddOn = ({ Addon }) => {
  const { price, title, info } = Addon;
  const { planDue, HandleAddon, SelectAddon } = GlobalContext();
  return (
    <div
      className={SelectAddon ? "active-addon add-on" : "add-on"}
      onClick={() => HandleAddon(Addon)}
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
