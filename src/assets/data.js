import image1 from "../assets/icon-advanced.svg";
import image2 from "../assets/icon-arcade.svg";
import image3 from "../assets/icon-pro.svg";


export const plans = [
    {
      id: 1,
      image: image2,
      plan: "ARCADE",
      price: "$19",
    },
    {
      id: 2,
      image: image1,
      plan: "ADVANCED",
      price: "$12",
    },
    {
      id: 3,
      image: image3,
      plan: "PRO",
      price: "$15",
    },
  ];

  export const AddonData = [
    {
      id:1,
      info: "Access to multiplayer games",
      title: "Online Services",
      price: [`+1/mo`, `+10/yr`],
    },
    {
      id:2,
      info: "Extra 1TB Of cloud Save",
      title: "Larger Storage",
      price: [`+2/mo`, `+20/yr`],
    },
    {
      id:3,
      info: "Customize theme to your profile",
      title: "Customizable Profile",
      price: [`+2/mo`, `+20/yr`],
    },
  ];
