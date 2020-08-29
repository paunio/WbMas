import React from "react";

import Layout from "./Layout";
import LineChart from "./LineChart";
import Map from "./Map";
import Max from "./Max";
import StDev from "./StDev";
import InjectData from "../data/InjectData";

const Main = () => {
  return (
    <Layout>
      <main className="center">
        <InjectData>
          <div className="container">
            <LineChart />
            <Max />
            <StDev />
          </div>
          <Map />
        </InjectData>
      </main>
    </Layout>
  );
};

export default Main;
