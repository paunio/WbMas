import React, { useState } from "react";

import { dataContext } from "../data/InjectData";

import { getSD } from "../data/equations";

const StDev = () => {
  const [sd, setSd] = useState(0);
  return (
    <dataContext.Consumer>
      {(data) => {
        console.log(sd);
        if (data.datasets[0].data.length !== 0)
          setSd(getSD(data.datasets[0].data));
        return (
          <div className="st-dev center">
            <p>
              The current <strong>standard deviation</strong> is:{" "}
              <strong>{sd > 0 ? sd.toFixed(2) : "Calculating..."}</strong>
            </p>
          </div>
        );
      }}
    </dataContext.Consumer>
  );
};

export default StDev;
