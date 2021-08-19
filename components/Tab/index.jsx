import React from "react";
import "./Tab.css";

function Tab(props) {
  const { number } = props;

  return (
    <div className="tab">
      <div className="overlap-group1 border-2px-grape">
        <img
          className="minus"
          src="https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/minus@2x.svg"
        />
        <div className="number-1 avenir-black-grape-20px">{number}</div>
        <img
          className="plus"
          src="https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/plus@2x.svg"
        />
      </div>
    </div>
  );
}

export default Tab;
