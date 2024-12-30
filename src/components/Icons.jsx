import React from "react";
import { ICONS } from "../assets";

const iconsData = [
  { id: "phone", label: "Call", icon: ICONS.phone, path: "tel:6767898956" },
  {
    id: "whatsApp",
    label: "WhatsApp",
    icon: ICONS.whatsApp,
    path: "https://wa.me/+8801608249337",
  },
  {
    id: "insta",
    label: "Instagram",
    icon: ICONS.insta,
    path: "https://www.instagram.com/prernabadwane/",
  },
  {
    id: "location",
    label: "Google Map",
    icon: ICONS.location,
    path: "https://maps.app.goo.gl/dsBVrrzz1DzQiwDM7",
  },
];

const Icons = () => (
  <div className="flex justify-around w-full bg-slate-100 h-24 items-center gap-2 pt-2">
    {iconsData.map(({ id, label, icon, path }) => (
      <div key={id}>
        <a
          href={path}
          target="_blank"
          className="flex flex-col justify-center items-center"
          style={{color:"inherit" , textDecoration:"none"}}
        >
          <img src={icon} alt={label} className="w-7 h-7" />
          <p className="text-center text-sm md:text-lg font-serif font-medium  ">
            {label}
          </p>{" "}
        </a>
      </div>
    ))}
  </div>
);

export default Icons;
