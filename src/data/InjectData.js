import React, { useEffect, useState, createContext } from "react";
import { sample } from "../data/sample";
import { serialize, setStateData } from "../data/logic";

export const dataContext = createContext();

const InjectData = ({ children, uri }) => {
  const [data, setData] = useState(sample);

  useEffect(() => {
    fetch(uri, { method: "get", mode: "no-cors" })
      .then((resp) => (resp.ok ? resp.json() : "Error!"))
      .then((d) => serialize(d))
      .then((d) => setData((oldData) => setStateData(oldData, 0, d)))
      .catch((err) => console.log(err));
  }, [uri]);

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default InjectData;
