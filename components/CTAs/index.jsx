import React from "react";
import Tab from "../Tab";
import "./CTAs.css";

function CTAs(props) {
  const { tabProps } = props;

  return (
    <div className="ct-as-1">
      <Tab number={tabProps.number} />
      <div className="cta-7">
        <div className="overlap-group-8">
          <div className="add-to-cart-3 lato-normal-corn-field-16px">ADD TO CART</div>
        </div>
      </div>
    </div>
  );
}

export default CTAs;
