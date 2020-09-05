import React from "react";

import Max from "./Max";
import Tabs from "./Tabs";
import StDev from "./StDev";
import Layout from "./Layout";
import LineChart from "./LineChart";

const Main = () => {
  return (
    <Layout>
      <main className="center">
        <Tabs>
          <div className="container">
            <LineChart />
            <Max />
            <StDev />
          </div>
        </Tabs>
      </main>
    </Layout>
  );
};

export default Main;
