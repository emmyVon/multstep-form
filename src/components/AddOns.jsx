import React, { useState } from "react";

import mark from "../assets/icon-checkmark.svg";
import AddOn from "./AddOn";

const AddOns = () => {
  const Addon = [
    {
      info: "Access to multiplayer games",
      title: "Online Services",
      price: [`+1/mo`, `+10/yr`],
    },
    {
      info: "Extra 1TB Of cloud Save",
      title: "Larger Storage",
      price: [`+2/mo`, `+20/yr`],
    },
    {
      info: "Customize theme to your profile",
      title: "Customizable Profile",
      price: [`+2/mo`, `+20/yr`],
    },
  ];
  return (
    <div className="mid-main add-ons">
      {Addon.map((i, index) => (
        <AddOn key={index} {...i} />
      ))}
    </div>
  );
};

export default AddOns;
