import React from "react";
import { ICONS } from "../assets";

const iconsData = [
  { id: "phone", label: "Call", icon: ICONS.phone },
  { id: "whatsApp", label: "WhatsApp", icon: ICONS.whatsApp },
  { id: "insta", label: "Instagram", icon: ICONS.insta },
  { id: "location", label: "Google Map", icon: ICONS.location },
];

const Icons = () => (
  <div className="flex justify-around w-full bg-slate-300 h-44 items-center">
    {iconsData.map(({ id, label, icon }) => (
      <div key={id} className="flex flex-col justify-center items-center">
        <img src={icon} alt={label} className="w-12 h-12" />
        <p className="text-center text-sm md:text-lg font-serif font-medium">{label}</p>
      </div>
    ))}
  </div>
);

export default Icons;
