import React, { useRef } from "react";
import { Tab, Tabs as TabsComp, TabList, TabPanel } from "react-tabs";

import InjectData from "../data/InjectData";

const options = [
  { name: "Temperature", active: true },
  { name: "Pressure", active: false },
  { name: "UV", active: false },
];

const urlOptions = ["temp", "press", "light"];

const Tabs = ({ children }) => {
  const active = useRef(options);
  const data = useRef(urlOptions);

  return (
    <TabsComp>
      <TabList>
        {active.current.map((el, index) => {
          return <Tab key={index}>{el.name}</Tab>;
        })}
      </TabList>
      {data.current.map((el, i) => (
        <TabPanel key={i}>
          <InjectData uri={`/data/${el}`}>{children}</InjectData>
        </TabPanel>
      ))}
    </TabsComp>
  );
};

export default Tabs;
