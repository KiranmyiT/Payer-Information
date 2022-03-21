import { React } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Table from "../Table/Table";

import { COLUMNS } from "../Table/StatusColumns";

const PayerStatus = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Active Payer</Tab>
          <Tab>Inactive Payer</Tab>
        </TabList>

        <TabPanel>
          <Table tableType="active" COLUMNS={COLUMNS} />
        </TabPanel>
        <TabPanel>
          <Table tableType="inactive" COLUMNS={COLUMNS} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PayerStatus;
