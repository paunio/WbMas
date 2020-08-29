import React, { useEffect, useState, createContext } from "react";
import { sample } from "../data/sample";

export const dataContext = createContext();

const InjectData = ({ children }) => {
  const [data, setData] = useState(sample);

  useEffect(() => {
    const interval = setInterval(async () => {
      const resp = await fetch("/api", { method: "get", mode: "no-cors" });
      const d = await (resp.ok ? resp.json() : "Error!");
      setData((oldData) => {
        return {
          labels: [...oldData.labels, d.time],
          datasets: [
            {
              ...oldData.datasets[0],
              data: [...oldData.datasets[0].data, d.value],
            },
          ],
        };
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [data]);

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default InjectData;
