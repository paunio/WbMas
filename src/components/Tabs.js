import React, { useRef } from "react";
import { Tab, Tabs as TabsComp, TabList, TabPanel } from "react-tabs";

import InjectData from "../data/InjectData";
import { options, urlOptions } from "../data/sample";

const Tabs = ({ children }) => {
  const active = useRef(options);
  const data = useRef(urlOptions);

  return (
    <TabsComp>
      <TabList>
        {active.current.map((el, index) => (
          <Tab key={index}>{el}</Tab>
        ))}
      </TabList>

      {data.current.map((el, i) => (
        <TabPanel key={i}>
          <InjectData url={`/data/${el}`}>{children}</InjectData>
        </TabPanel>
      ))}
    </TabsComp>
  );
};

export default Tabs;
