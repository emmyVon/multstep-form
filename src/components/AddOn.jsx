import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { GlobalContext } from "../Context/StepContext";

const AddOn = ({ Addon }) => {
  const { price, title, info, id } = Addon;
  const { planDue, HandleAddon, addOns } = GlobalContext();

  const isAddonSelected = addOns.includes(Addon);

  return (
    <div
      className={isAddonSelected ? "active-addon add-on" : "add-on"}
      onClick={(e) => HandleAddon(e, Addon)}
    >
      <div>
        {/* <span>
          <FcCheckmark style={{ backgroundColor: "white" }} />
        </span> */}
        <input type="checkbox" />
        <div>
          <h3>{title}</h3>
          <p>{info}</p>
        </div>
      </div>
      <p>{`+$${planDue === "monthly" ? price[0] : price[1]}/${
        planDue === "monthly" ? "mo" : "yr"
      }`}</p>
    </div>
  );
};

export default AddOn;
