import React from "react";
import "./style.css";

const Loading = () => {
  return (
    <div>
      <div className="overlay">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
