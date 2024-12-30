import React from "react";

const Header = ({ title, subtitle, address }) => (
  <div className="w-full grad text-center bg-gradient-to-r from-blue-100 to-teal-100 text-black py-1">
    <h1 className="m-0 text-2xl">{title}</h1>
    {subtitle && <p className="m-1 text-base">{subtitle}</p>}
    {address && <p className="italic text-sm">Address: {address}</p>}
  </div>
);

Header.defaultProps = {
  title: "Default Title",
  subtitle: "",
  address: "",
};

export default Header;
