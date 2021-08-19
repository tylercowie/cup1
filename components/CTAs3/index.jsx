import React from "react";
import Tab from "../Tab";
import "./CTAs3.css";

function CTAs3(props) {
  const { className, tabProps } = props;

  return (
    <div className={`ct-as-3-1 ${className || ""}`}>
      <Tab number={tabProps.number} />
      <div className="cta-9">
        <div className="overlap-group-10">
          <div className="add-to-cart-5 lato-normal-corn-field-16px">ADD TO CART</div>
        </div>
      </div>
    </div>
  );
}

export default CTAs3;
