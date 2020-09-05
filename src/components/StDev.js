import React, { useState, useContext, useEffect } from "react";

import { dataContext } from "../data/InjectData";
import { checkStDev } from "../data/logic";
import { sample } from "../data/sample";

const StDev = () => {
  const [sd, setSd] = useState(sample);
  const data = useContext(dataContext);

  useEffect(() => {
    checkStDev(data, setSd);
  }, [data]);

  return (
    <div className="st-dev center">
      <p>
        The current <strong>standard deviation</strong> is:{" "}
        <strong>{sd > 0 ? sd.toFixed(2) : "Calculating..."}</strong>
      </p>
    </div>
  );
};

export default StDev;
