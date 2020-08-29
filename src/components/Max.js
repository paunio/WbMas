import React, { useState } from "react";

import { dataContext } from "../data/InjectData";

const Max = () => {
  const [max, setMax] = useState(0);
  return (
    <dataContext.Consumer>
      {(data) => {
        if (data.datasets[0].data.length !== 0)
          setMax(Math.max(...data.datasets[0].data));
        return (
          <div className="max center">
            <p>
              The current maximum value is:{" "}
              <strong>
                {max === 0
                  ? "Calculating..."
                  : `${max} @
                ${max && data.labels[data.datasets[0].data.indexOf(max)]}`}
              </strong>
            </p>
          </div>
        );
      }}
    </dataContext.Consumer>
  );
};

export default Max;
