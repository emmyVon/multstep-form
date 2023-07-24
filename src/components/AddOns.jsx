import React, { useState } from "react";
import { AddonData } from "../assets/data";
import mark from "../assets/icon-checkmark.svg";
import AddOn from "./AddOn";

const AddOns = () => {
  return (
    <div className="mid-main add-ons">
      {AddonData.map((Addon) => (
        <AddOn key={Addon.id} Addon={Addon} />
      ))}
    </div>
  );
};

export default AddOns;
