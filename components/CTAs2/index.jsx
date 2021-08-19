import React from "react";
import Tab from "../Tab";
import "./CTAs2.css";

function CTAs2(props) {
  const { tabProps } = props;

  return (
    <div className="ct-as-2">
      <Tab number={tabProps.number} />
      <div className="cta-8">
        <div className="overlap-group-9">
          <div className="add-to-cart-4 lato-normal-corn-field-16px">ADD TO CART</div>
        </div>
      </div>
    </div>
  );
}

export default CTAs2;
