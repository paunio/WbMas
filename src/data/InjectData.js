import React, { useEffect, useState, createContext } from "react";

import { sample } from "../data/sample";
import { serialize, setStateData } from "../data/logic";

export const dataContext = createContext();

const InjectData = ({ children, url }) => {
  const [data, setData] = useState(sample);

  useEffect(() => {
    fetch(url, { method: "get", mode: "no-cors" })
      .then((resp) => (resp.ok ? resp.json() : "Error!"))
      .then((d) => serialize(d))
      .then((d) => setData((oldData) => setStateData(oldData, d)))
      .catch((err) => console.log(err));
  }, [url]);

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default InjectData;
