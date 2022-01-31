import React from "react";
import { CustomizedAxisTick } from "../service";

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    const lab = CustomizedAxisTick(label);
    const rate1 = payload[0].payload.rate;
    const rate2 = payload[1].payload.rate;
    const rate3 = payload[2].payload.rate;
    return (
      <div className="tooltip">
        <h4>{lab}</h4>
        <h5 style={{color: '#eb2689'}}>{"rate1: " + rate1}</h5>
        <h5 style={{color: '#82ca9d'}}>{"rate2: " + rate2}</h5>
        <h5 style={{color: '#8884d8'}}>{"rate3: " + rate3}</h5>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
