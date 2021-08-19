import React from "react";
import CTAs3 from "../CTAs3";
import "./CupcakeInfo.css";

function CupcakeInfo(props) {
  const { title, subtitle, cTAs3Props } = props;

  return (
    <div className="cupcake-info-6">
      <div className="title-13 wendyone-normal-grape-32px">{title}</div>
      <p className="subtitle-16 lato-normal-grape-16px">{subtitle}</p>
      <CTAs3 className={cTAs3Props.className} tabProps={cTAs3Props.tabProps} />
    </div>
  );
}

export default CupcakeInfo;
