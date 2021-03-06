import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "../components/CustomTooltip";
import { CustomizedAxisTick } from "../service";

const AreaCarts = ({ mydata1, mydata2, mydata3 }) => {
  return (
    <ResponsiveContainer width="95%" aspect={2.5}>
      <AreaChart>
        <defs>
          <linearGradient id="color1" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="0%" stopColor="#eb2689" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#eb2689" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="color2" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="0%" stopColor="#82ca9d" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#82ca9d" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="color3" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="0%" stopColor="#8884d8" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#8884d8" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          data={mydata1}
          dataKey="rate"
          stroke="#eb2689"
          fill="url(#color1)"
        />
        <Area
          type="monotone"
          data={mydata2}
          dataKey="rate"
          stroke="#82ca9d"
          fill="url(#color2)"
        />
        <Area
          type="monotone"
          data={mydata3}
          dataKey="rate"
          stroke="#8884d8"
          fill="url(#color3)"
        />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          type="number"
          tickFormatter={CustomizedAxisTick}
          domain={["dataMin - 100", "dataMax + 100"]}
          tick={{ fill: "#fff" }}
          tickCount={10}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          type="number"
          domain={[5, "dataMax + 10"]}
          tick={{ fill: "#fff" }}
          tickCount={10}
          tickFormatter={(number) => number.toFixed(0)}
        />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid opacity={0.1} horizontal vertical="" color="#243240" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaCarts;
