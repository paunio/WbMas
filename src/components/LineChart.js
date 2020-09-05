import React, { useContext } from "react";
import { Line } from "react-chartjs-2";

import { dataContext } from "../data/InjectData";

const LineChart = () => {
  const data = useContext(dataContext);
  return (
    <div className="chart">
      {data ? <Line data={data} /> : <h2>Loading..</h2>}
    </div>
  );
};

export default LineChart;
