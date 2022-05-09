import React from "react";

import "./SubscriptionPlan.css";

const SubscriptionPlan = ({ plan, res, btnText, btnColor }) => {
  return (
    <div className="subscription">
      <div className="subscription__plan">
        <p>{plan}</p>
        <p>{res}</p>
      </div>

      <button className={`subscription__button button--${btnColor}`}>
        {btnText}
      </button>
    </div>
  );
};

export default SubscriptionPlan;
