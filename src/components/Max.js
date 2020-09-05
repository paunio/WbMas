import React, { useState, useContext, useEffect } from "react";

import { dataContext } from "../data/InjectData";
import { checkMax, getMaxTime } from "../data/logic";

const Max = () => {
  const [max, setMax] = useState(0);
  const data = useContext(dataContext);

  useEffect(() => {
    checkMax(data, setMax);
  }, [data, max]);

  return (
    <div className="max center">
      <p>
        The current maximum value is:{" "}
        <strong>
          {max === 0
            ? "Calculating..."
            : `${max} @
                ${max && getMaxTime(data, max)}`}
        </strong>
      </p>
    </div>
  );
};

export default Max;
