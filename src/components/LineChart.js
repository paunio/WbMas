import React from "react";
import { Line } from "react-chartjs-2";

import { dataContext } from "../data/InjectData";

const LineChart = () => {
  return (
    <div className="chart">
      <dataContext.Consumer>
        {(value) => (
          <div>{value ? <Line data={value} /> : <h2>Loading..</h2>}</div>
        )}
      </dataContext.Consumer>
    </div>
  );
};

export default LineChart;
